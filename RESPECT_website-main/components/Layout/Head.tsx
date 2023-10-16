/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:56:07
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

const Head = () => {
  return (
    <div className='relative w-[52.6875rem] h-[52.6875rem] max-w-4xl  z-10 '>
      <Image
        src='/Crypto1.png'
        alt='Head image'
        className='w-[52.6875rem] h-[52.6875rem]'
        width={843}
        height={843}
      />
      <div className='absolute top-[29rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[3.75rem] sm:text-[5.75rem]  font-bold text-center flex flex-col w-[1200px] gap-4 '>
        <span>The Customised-Strategy</span>
        <span>Telegram Trading Bot</span>
      </div>
    </div>
  );
};

export default Head;
