import { useState, useEffect } from 'react';
import Contact from "./components/Contact";
import Db from "./components/Db";
import { FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { HiArrowsUpDown } from 'react-icons/hi2';

function App() {
  let userContacts = Db();
  const [userCont, setUserCont] = useState(false);
  const [short, setShort] = useState(true);
  const [search, setSearch] = useState("");
  const handleContact = () => {
   
    !userCont ?  setUserCont(true) : setUserCont(false)
  }

  const handleShort = () => {
    short ? setShort(false) : setShort(true);
    
  }

  useEffect(() => {
    console.log(search);
  }, [search])

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-center mt-5 text-3xl'>
          <h1>Phone Book</h1>
        </div>
        <div className='flex flex-col item-center bg-gray-500 h-screen'>
          <div className='flex justify-center mt-5'>
            <div className='mt-5'>
              <button type="button" onClick={handleContact} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaUserAlt /></button>
            </div>
            <div className='mt-5 me-3'>
     
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" onChange={(e) => setSearch(e.target.value)} id="default-search" className="block w-full p-[7px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Contacts..." required />
                </div>

            </div>
            <div className='mt-5'>
              <button  onClick={handleShort} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><HiArrowsUpDown /></button>
            </div>
          </div>
          <div className='flex justify-center mt-5'>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                 
                    <th scope="col" className="px-6 py-3">
                      Profile
                    </th>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userCont ? <Contact  contact={(short ? userContacts.sort((a,b) => a.firstName.localeCompare(b.firstName)) : userContacts.sort((a,b) => b.firstName.localeCompare(a.firstName)))
                  .filter((sereach) => { 
                    if(search === ""){
                      return sereach;
                      }else if(sereach.firstName
                        .toLocaleLowerCase()
                        .includes(search.toLowerCase())){
                        return sereach;
                      }
                      })
                      }/> : null}
                  
                </tbody>
              </table>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default App
