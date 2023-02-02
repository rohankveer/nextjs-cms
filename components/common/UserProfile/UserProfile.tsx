import { FC } from 'react'
import ProfileDetails from '../ProfileDetails';
import ProfilePic from '../ProfilePic';
const classNames = require('classnames');

async function getUserData() {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // wait added to check suspense
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/1', { next: { revalidate: 60 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface Props {
  className?: string
  children?: any,
}

{/* @ts-expect-error Async Server Component */ }
const UserProfile: FC<Props> = async ({ children, className }) => {
  const data = await getUserData();
  const containerClass = classNames({
    'relative': true,
    [`${className}`]: className ? true : false
  });
  return (
    <div className={containerClass}>
      <ProfilePic url={data.thumbnailUrl1} />
      <ProfileDetails />
    </div>
  )
}

export default UserProfile