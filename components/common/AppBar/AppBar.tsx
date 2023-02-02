import { FC, Suspense } from 'react'
import UserProfile from '../UserProfile';
const classNames = require('classnames');

interface Props {
  className?: string
}

const BrandLogo: FC<Props> = ({ className }) => {
  const containerClass = classNames({
    'h-[52px] shadow-appbar shadow-theme flex flex-row-reverse items-center': true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass}>
      {/* <Notification /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserProfile />
      </Suspense>
    </div>
  )
}

export default BrandLogo