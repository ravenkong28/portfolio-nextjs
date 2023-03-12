import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import kenshinImg from '../public/assets/projects/kenshin.png';
import faceImg from '../public/assets/projects/face.jpg'
import sudokuImg from '../public/assets/projects/sudoku.png'
import sqlImg from '../public/assets/projects/sql.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Kenshin Impact'
            backgroundImg={kenshinImg}
            projectUrl='/kenshin'
            tech='HTML, CSS, JS'
          />
              
          <ProjectItem
            title='Face Detection'
            backgroundImg={faceImg}
            projectUrl='/face'
            tech='Python'
          />
              
          <ProjectItem
            title='Sudoku Solver'
            backgroundImg={sudokuImg}
            projectUrl='/sudoku'
            tech='C/C++'
          />
              
          <ProjectItem
            title='CloudBRoker Analysis'
            backgroundImg={sqlImg}
            projectUrl='/sql'
            tech='SQL'
          />
              
        </div>
      </div>
    </div>
  );
};

export default Projects;
