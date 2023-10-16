/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:00:33
 * @Description:
 */

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex max-w-7xl items-center justify-between mx-auto'>
      <Image
        src='/Logo.png'
        alt='logo'
        className='w-[12rem]'
        width={300}
        height={300}
      />
      <div className='flex'>
        <Image
          src='/typec.png'
          alt='C'
          className='w-[1.5rem]'
          width={20}
          height={20}
        />
        <p className='text-white'>2023 RΞSPECT ALL RIGHTS RESEVERED</p>
      </div>
    </div>
  );
};

export default Footer;
