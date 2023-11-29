'use client';
import Link from 'next/link';
import style from '../login.module.css';

const Studentdashboard = () => {
  return (
    <>
      <h2 className={style.menuHead}>You Login as Student</h2>
      <Link href="/login">Home</Link>
    </>
  );
};
export default Studentdashboard;
