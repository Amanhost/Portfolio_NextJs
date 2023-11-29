import Link from 'next/link';
import React from 'react';
import style from '../login/login.module.css';

const AboutLayout = ({ children }) => {
  return (
    <>
      <ul className={style.loginMenu}>
        <li>
          <h4> Login Navbar</h4>
        </li>
        <li>
          <Link href="/about/aboutstudent">Student Details</Link>
        </li>
        <li>
          <Link href="/about/aboutcollage">Teacher Details</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default AboutLayout;
