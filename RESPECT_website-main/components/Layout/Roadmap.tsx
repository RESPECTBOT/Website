/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:04:25
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

const Roadmap = () => {
  return (
    <div className='flex flex-col item-center '>
      <Image
        src='/Roadmap1.png'
        alt='how it works'
        className='w-[64rem]'
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Roadmap;
