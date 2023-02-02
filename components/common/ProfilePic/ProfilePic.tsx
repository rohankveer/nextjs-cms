'use client';
import { FC } from 'react'
import Image from 'next/image'
import { useAppBarContext } from '../AppBar/AppBarContext'
import { UserIcon } from '@heroicons/react/24/outline'

interface Props {
  className?: string
  url?: string,
  title?: string
}

const ProfilePic: FC<Props> = ({ className, url, title = 'Profile Pic' }) => {
  const [open, setOpen] = useAppBarContext();
  return (
    <>
      {url &&
        <Image
          src={`${url}.png`}
          className='cursor-pointer rounded-full mr-3'
          alt={title}
          width={40}
          height={40}
          onClick={() => { setOpen(!open) }}
        />
      }
      {
        !url &&
        <div className='cursor-pointer rounded-full mr-3 border-solid border border-skin-base border-opacity-30 p-2' onClick={() => { setOpen(!open) }}>
          <UserIcon className='h-6 w-6' />
        </div>
      }
    </>
  )
}

export default ProfilePic