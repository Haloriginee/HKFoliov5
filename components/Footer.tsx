import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaBeer } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact' >
      <div className='w-full absolute left-0 -bottom-72 min-h-96 '>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='opacity-50 w-full h- full'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg::max-w-[45vw] '>
        Let&apos;s team up and bring <span className='text-purple'>your</span> vision to life
        </h1>
        <a href="mailto:herezy2006@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaBeer/>}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <a href={profile.link} target='_blank'>
                <img
                  src={profile.img}
                  alt="work or not"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer
