/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:56:50
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

const Tokenomics = () => {
  return (
    <div className='flex flex-col  items-center text-white sm:w-4/5'>
      <h1 className='text-8xl font-extrabold mb-16'>Tokenomics</h1>
      <h2 className='text-2xl font-extrabold mb-6'>
        Token Symbol:{' '}
        <span className='bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text'>
          $RESPECT
        </span>
      </h2>
      <div className='w-[54rem] h-[4rem] text-3xl  self-start  font-extrabold mb-4 bg-gradient-to-r  from-pink-500 to-blue-500 rounded-3xl py-3 px-6'>
        Contract Address:{' '}
        <span className='text-[1rem] text-lg  lg:text-xl  font-bold'>
          0x862F1F054b9BEbcae048c66104019EBD86f81b96
        </span>
      </div>
      <div className='w-[54rem] h-[4rem] text-3xl text-right self-end font-extrabold mb-4 bg-gradient-to-r to-pink-500 from-blue-500 rounded-3xl py-3 px-6'>
        Network: Ethereum
      </div>
      <div className='w-[54rem] h-[4rem]  text-3xl self-start font-extrabold mb-4 bg-gradient-to-r  from-pink-500 to-blue-500 rounded-3xl py-3 px-6'>
        Max Bag: 4%
      </div>
      <div className='w-[54rem] h-[4rem] text-3xl text-right self-end font-extrabold mb-4 bg-gradient-to-r to-pink-500 from-blue-500 rounded-3xl py-3 px-6'>
        Total Supply: 10,000,000
      </div>
    </div>
  );
};

export default Tokenomics;
