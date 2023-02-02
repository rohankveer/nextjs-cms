'use client'
import { FC } from 'react'
import { useAppBarContext } from '../AppBar/AppBarContext';
const classNames = require('classnames');

interface Props {
  className?: string
  children?: any,
}

const ProfileDetails: FC<Props> = ({ children, className }) => {
  const [open] = useAppBarContext();
  const containerClass = classNames({
    'absolute top-12 right-4' : true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass}>
      {
        open && 'TODO'
      }
    </div>
  )
}

export default ProfileDetails