import Image from 'next/image';
import React from 'react';
import sqlImg from '../public/assets/projects/sql.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={sqlImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>CloudBRoker Data Analysis</h2>
          <h3>SQL / SQL Database Management</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This Database Management using SQL on SQL Server Database Management 
            as a fullfilment of the assignment project on Database System in 
            Bina Nusantara University.
          </p>
          <p>
            Cloud BRoker is a company which helps customers to buy their own servers and databases and host them on their chosen cloud provider.
            In order to maintain transactions, you, as a database administrator, are tasked to create a database system to store data and maintain transactions. The tasks that you must do are:
          </p>
          <h6>
            a.	Create Entity Relationship Diagram to maintain transactions.
          </h6>
          <h6>
            b.	Create a database system using DDL syntax that is relevant with transactions.
          </h6>
          <h6>
            c.	Create query using DML syntax to fill the tables in the database system with data based on the following conditions:
          </h6>
          <h6>
              •	Master table must be filled with more than or equals 15 data.
          </h6>
          <h6> 
              •	Transaction table must be filled with more than or equals 15 data
          </h6>
          <h6>
              •	Transaction detail table must be filled with more than or equals 25 data.
          </h6>
          <h6>
            d.	To support management process in Cloud BRoker, you are tasked to provide some query that produces important data. 
          </h6>
          <a
            href='https://github.com/ravenkong28/SQLdatamanagement.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
          {/* <a
            href='https://twitch-nextjs-tailwind.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a> */}

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL Server
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Database Management
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Database Analysis
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Database Manipulation
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Entity Relationship Diagram
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;