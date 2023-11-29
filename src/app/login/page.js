'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import style from '././login.module.css';
const Login = () => {
  const router = useRouter();
  const handleroute = (path) => {
    router.push('/login/' + path);
  };
  return (
    <>
      <h2 className={style.menuHead}>Admin Login</h2>
      <Link href="/">Home</Link>
      {/* <button onClick={() => handleroute('/')}>back to Home</button> */}
      {/* <br></br>
      <button onClick={() => handleroute('loginstudent')}>Login Student</button>
      <br></br>
      <button onClick={() => handleroute('loginteacher')}>Login teacher</button> */}
    </>
  );
};
export default Login;
