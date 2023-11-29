'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import style from '../../src/app/login/login.module.css';

export default function Home() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };
  return (
    <main>
      <ul className={style.loginMenu}>
        <li>
          <h4>This is home page</h4>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <br></br>
      <br></br>
    </main>
  );
}
