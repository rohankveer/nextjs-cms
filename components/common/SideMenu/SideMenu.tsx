import { FC } from 'react'
const classNames = require('classnames');

interface Props {
  className?: string
  children?: any,
}

const SideMenu: FC<Props> = ({ children, className }) => {
  const containerClass = classNames({
    'flex': true,
    'flex-col': true,
    'w-1/6': true,
    'h-screen': true,
    'border-solid border-r border-skin-base border-opacity-30': true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}

export default SideMenu