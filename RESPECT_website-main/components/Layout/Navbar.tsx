/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:39:28
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex  items-center justify-center h-[5rem] w-full  fixed top-0 left-0  bg-[#1F1F1F] shadow-3xl opacity-90 z-50 '>
      <nav className='flex flex-row  max-w-7xl  text-[1.75rem] w-2/3 px-5   z-50 justify-between items-center  '>
        <Image
          src='/Logo.png'
          alt='logo'
          className='w-[13rem] h-[4.8rem]'
          width={300}
          height={300}
        />
        <div className='flex flex-row   items-center justify-center gap-10'>
          <Link
            href='/'
            className='text-white text-[1.25rem]  font-bold hover:text-purple-500'
          >
            Docs
          </Link>
          <Link
            href='/'
            className='text-white text-[1.25rem] font-bold hover:text-purple-500'
          >
            Tutorials
          </Link>
          <Link
            href='/'
            className='text-white text-[1.25rem] font-bold hover:text-purple-500'
          >
            Link3
          </Link>
          <button
            className='w-40 h-12 rounded-full bg-gradient-to-r to-purple-500 from-blue-500 text-white font-bold text-[1.25rem]  hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-transform  '
            style={{
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Launch APP
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

/* Menu bar background */
