
import React from 'react' 

import Link from 'next/link'

const navbar = () => {

    return(
        <main>
             <nav className="border-b-2 border-gray-300 bg-gray-400 py-4 h-[60px]">
            <div className='flex space-x-8'>
        
        <Link href="/Home" className="font-bold text-2xl hover:text-blue-700  space-x-08 " >Home</Link>
         <Link href="/About" className="font-bold text-2xl hover:text-blue-700 ">About</Link>
          <Link href="/Contact" className="font-bold text-2xl hover:text-blue-700 ">Contact Us</Link>
        <Link href="/programming/jobs" className="font-bold text-2xl hover:text-blue-700 " >Jobs</Link>
        <Link href="/programming" className="font-bold text-2xl hover:text-blue-700 ">Programming</Link>

        </div>
        </nav>
        </main>
    )
};

export default navbar;

