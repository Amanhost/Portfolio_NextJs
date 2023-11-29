'use client';
import Link from 'next/link';
import style from '../../login/login.module.css';

const AboutCollage = () => {
  return (
    <>
      <h2 className={style.menuHead}>Details for Teacher</h2>
      <Link href="/about">Home</Link>
    </>
  );
};
export default AboutCollage;
