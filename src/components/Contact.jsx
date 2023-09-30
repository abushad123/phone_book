import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Contact({icon, contact}) {
  const handleIcon = () => {
    const type = [
         "adventurer",
         "adventurer-neutral",
         "adventurer",
         "big-smile",
         "bottts",
         "fun-emoji",
         "open-peeps",
    ];
  
    return type[Math.floor(Math.random()*type.length)];
  } 
 

  return (
    <>
    
    {contact.map((cont) => 
            <tr key={cont.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
       
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {icon ? (<FaUserCircle size="20px"/>)  : <img src={`https://api.dicebear.com/7.x/${handleIcon()}/svg?size=32`}/>}
            </th>
            <td className="px-6 py-4">
                {cont.firstName}
            </td>
            <td className="px-6 py-4">
                {cont.lastName}
            </td>
            <td className="px-6 py-4">
                {cont.phone}
            </td>
            </tr>
            )}
    </>
  )
}

export default Contact
