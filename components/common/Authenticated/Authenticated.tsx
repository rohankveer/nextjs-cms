import { FC, useEffect } from 'react'
import { getAuthSession } from '../../../lib/session';
import Router from "next/router";

interface Props {
  className?: string
  children?: any,
  redirectTo?: string
}

const Authenticated: FC<Props> = ({ children, className, redirectTo = "/login" }) => {

  useEffect(() => {
    // If user is not present in session then redirect
    const authSession = getAuthSession();
    if (!authSession) Router.push(redirectTo);
  }, []);

  return (
    <div className={`cms-authenticated ${className}`}>
      {children}
    </div>
  )
}

export default Authenticated