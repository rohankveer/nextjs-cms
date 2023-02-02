'use client';
import { FC, useEffect, useState } from 'react'
import { getAuthSession } from '../../../lib/session';
import { useRouter } from 'next/navigation';
const classNames = require('classnames');

// Refer : https://github.com/vercel/next.js/discussions/41745?sort=new#discussioncomment-4104570

interface Props {
  children?: any,
  redirectTo?: string
}

const Authenticated: FC<Props> = ({ children, redirectTo = "/login" }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // If user is not present in session then redirect
    const authSession = getAuthSession();
    if (!authSession) router.push(redirectTo);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const containerClass = classNames({
    'theme-red': false,
    'theme-neon': false,
    'flex': true
  });

  return (
    <div className={containerClass}>
      {
        loading && <h1>Loading.....</h1>
      }
      {
        !loading && children
      }
    </div>
  )
}

export default Authenticated