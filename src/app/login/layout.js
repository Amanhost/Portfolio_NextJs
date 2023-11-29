'use client';
import Link from 'next/link';
import React from 'react';
import style from './login.module.css';
import { usePathname } from 'next/navigation';

const layout = ({ children }) => {
  const currentpath = usePathname();
  console.log(currentpath);
  return (
    <>
      {currentpath !== '/login/loginteacher' ? (
        <ul className={style.loginMenu}>
          <li>
            <h4> Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Admin Login</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </>
  );
};

export default layout;
