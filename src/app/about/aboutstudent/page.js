'use client';
import Link from 'next/link';
import React from 'react';
import style from '../../login/login.module.css';
const Aboutstudent = () => {
  return (
    <>
      <h2 className={style.menuHead}> Details for Student</h2>
      <Link href="/about">Home</Link>
    </>
  );
};

export default Aboutstudent;
