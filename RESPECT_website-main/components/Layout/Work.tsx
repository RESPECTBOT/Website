/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-08 16:54:36
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div className='flex flex-col gap-10 items-center'>
      <h1 className='text-white text-8xl font-extrabold'>
        <span className='bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text'>
          How it works?
        </span>
      </h1>
      <Image
        src='/howitworks1.png'
        alt='how it works'
        className='w-[1200px]'
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Work;
