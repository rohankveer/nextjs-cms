'use client'
import { FC } from 'react'
const classNames = require('classnames');
import { useRouter, usePathname } from 'next/navigation';

interface Props {
  className?: string
  title: string,
  linkTo: string,
  icon?: React.ReactNode
}

const SideMenuItem: FC<Props> = ({ title, className, linkTo, icon }) => {
  const router = useRouter();
  const pathname = usePathname();
  const containerClass = classNames({
    'py-2 px-3 mx-3 my-1 flex': true,
    'cursor-pointer rounded-md': true,
    'bg-skin-menu bg-opacity-20': pathname?.startsWith(linkTo) ? true : false,
    'hover:bg-skin-menu hover:bg-opacity-10': true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass} onClick={() => router.push(linkTo)}>
      {
        icon && <span className='mr-2'>{icon}</span>
      }
      <span>{title}</span>
    </div>
  )
}

export default SideMenuItem