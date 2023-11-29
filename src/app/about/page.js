'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };
  return (
    <>
      <h2>About Page</h2>
      <Link href="/">Home</Link>
    </>
  );
};

export default About;
