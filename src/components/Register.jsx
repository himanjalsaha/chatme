import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-300 h-screen">
      <div className="w-96 p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="text" placeholder="Display Name" className="w-full p-2 border rounded" />
          <input required type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input required type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <input required type="file" id="file" className="hidden" />
          <label htmlFor="file" className="cursor-pointer flex items-center space-x-2">
            <img src="https://icon-library.com/images/add-icon-png/add-icon-png-27.jpg" alt="" className="w-6 h-6" />
            <span>Add an Avatar</span>
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Sign up
          </button>
          {loading && <span className="text-blue-500 text-sm">Uploading and compressing the image, please wait...</span>}
          {err && <span className="text-red-500 text-sm">Something went wrong</span>}

        </form>
        <p className="mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
