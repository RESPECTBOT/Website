/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-08-09 11:37:53
 * @Description:
 */
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  text: string;
  little: boolean;
}

const Card = (props: Props) => {
  const data = props.text.split('/');
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col text-white font-bold gap-20 items-center tracking-wider  py-20 px-10 rounded-[4rem] bg-gradient-to-t to-transparent from-[#404040] w-[54rem]'>
        <h1 className='text-5xl '>{props.title}</h1>
        <div
          className={`flex flex-col items-center gap-5 ${
            props.little ? 'text-lg lg:text-xl' : 'text-xl md:text-2xl'
          } ${props.little ? 'tracking-normal' : 'tracking-wider'}`}
        >
          {data.map((item, index) => (
            <h2 key={index}>{item}</h2>
          ))}
        </div>
      </div>
      {props.little && (
        <p className='text-white text-xs '>
          ❗️Please use this Trading Bot only when you have a thorough
          understanding of and acknowledge the Security Disclaimer.
        </p>
      )}
    </div>
  );
};

export default Card;
