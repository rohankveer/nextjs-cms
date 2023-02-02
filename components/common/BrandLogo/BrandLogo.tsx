'use client'
import { FC } from 'react'
import Image from 'next/image';
const classNames = require('classnames');
import { useRouter } from 'next/navigation';

interface Props {
  className?: string
  src: any,
  title: string
}

const BrandLogo: FC<Props> = ({ title, className, src }) => {
  const router = useRouter();
  const containerClass = classNames({
    'cursor-pointer mb-2 h-[52px]': true,
    'shadow-logo shadow-theme' : true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass} onClick={() => { router.push('/admin') }}>
      <Image
        src={src}
        alt={title}
        width={84}
        height={50}
      />
    </div>
  )
}

export default BrandLogo