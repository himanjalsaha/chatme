import React, { useContext, useState } from 'react'
import { collection, query, where ,getDocs, setDoc} from "firebase/firestore";
import { db } from '../firebase';
import { Authcontext } from '../context/Authcontext';
const Search = () => {
    const [username,setusername] = useState("")
    const [user , setUser] = useState(null)
    const [err , seterr]  = useState(false)
    const {currentuser} =useContext(Authcontext)

     const handlesearch = async () => {
        const usersref = collection(db, "users");
        const q = query(usersref, where("displayName", "==", username));
        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data()) 
            })
         }
         catch(err){
            seterr(true)
        }
        }
       
      
    const handlekey = e =>{
        e.code === "Enter" && handlesearch()

    }

    const handleselect = async ()=>{
        // check wetcher the group (chats in firestore ) exiosts
        const combinedusrid = currentuser.uid > user.uid ? currentuser.uid + user.uid : user.uid + currentuser.uid
        {console.log(combinedusrid );}
        try{
            const res =  await getDocs(db,"chats" , combinedusrid)
            if(
                !res.exists()
            ){
                await setDoc(doc ,db  , "chats" , combinedusrid , {messages:[]})

                //userchats
             
            }

        }
        catch{

        }

    }
  return (
    <div>
       
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" onKeyDown={handlekey} onChange={e=>setusername(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find chats" required />
    </div>

{err && <span>user not found</span>}
{
   user && <div className='p-2 flex  flex-row items-center rounded hover:bg-slate-500 ' onClick={handleselect}>
    <div><img src={user.photoURL} alt="" className='w-10 h-10 rounded-full m-1' /></div>
    <text className='text-white font-bold'>{user.displayName}</text>
</div>
}


    </div>
  )
}

export default Search