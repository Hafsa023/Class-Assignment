import React from 'react';

import Link from 'next/link'
const navbar = () => {
    return(
<div className='bg-[#1D1E2C] w-[1440px] h-[1132px]'>
    {/* creating navbar..!! */}
    <nav className='w-full py-6 flex justify-between items center px-12'>
        <div className='text-white font-bold text-xl'>BrandName</div>
        <div className='text-white flex space-x-8'>
<Link href="/home" className=' hover:text-gray-500'>Home </Link>
<Link href="/product" className='hover:text-gray-500' >Product </Link>
<Link href="/pricing" className=' hover:text-gray-500'>Pricing </Link>
<Link href="/contact"className=' hover:text-gray-500'>Contact </Link>
</div>
<div className='flex space-x-6'>
<Link href="/login" className='text-white'>Log-in</Link>
<button className='bg-blue-500 text-white py-2 px-4 rounded hover-blue-600'>Join-US</button>
</div>
</nav>
{/* writing main area*/}
<div className='text-center mt-16 mr-5 justify center'>
<h3 className='text-[#23A6F0] text-size-16-px mb-4'>Welcome</h3>
<h1 className='text-white text-5xl font-bold mb-6'>Selling on the</h1>
<h1 className='text-white text-5xl font-bold mb-6'>internet like a pro</h1>
<p className='text-gray-300 text-lg mb-10'>We know how large objects will act,but things on a <br />small scale just do not act that way..</p>
<button className='bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 '>Get Quote Now</button>
<button className='text-blue-500 border border-blue-500 py-3 px-8  rounded-lg ml-4 '>Learn More</button>
</div>
{/* writing cards section.. */}
<div className='flex justify-center space-x-8 mt-28'>
{/* card 1 */}
<div className='bg-white p-6  w-[292px] h-[292px]'>
    <div className='w-12 h-12 bg-red-200 mb-4 rounded-lg' ></div><br />
    <div className='w-20 h-1 bg-[#E74040]'></div><br />
    <h2 className='text-gray-800 font-bold text-xl mb-2'>training courses</h2>
    <p className='text-gray-600'>The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>
{/* card 2 */}
<div className='bg-white p-6 w-[292px] h-[292px]'>
<div className='w-12 h-12 bg-green-200 mb-4 rounded-lg'></div><br />
<div className='w-20 h-1 bg-[#E74040]'></div><br />
<h2 className='text-gray-800 font-bold text-xl m-2'>2,769 online course</h2>
<p className='text-gray-600'>The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>
{/* card 3  */}
<div className='bg-blue-500 p-6  w-[292px] h-[292px]'>
<div className='w-12 h-12 bg-white mb-4 rounded-lg'></div><br />
<div className='w-20 h-1 bg-[#FFFF]'></div><br />
<h2 className='text-gray-800 font-bold text-xl m-2'>training courses</h2>
<p className='text-gray-600'>The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>

</div>
</div>
)
};
export default navbar;