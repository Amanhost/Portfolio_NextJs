'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import style from '../login.module.css'


const loginteacher = () => {
    const router = useRouter()
    const handlenavigate = (page) => {
        router.push(page)

    }
    return (
        <>
            <h2 className={style.menuHead}> Failed Login As Teacher </h2>
            <Link href="/login">home</Link>
            {/* <button onClick={() => handlenavigate("/")}> home page</button> */}
        </>
    )
}

export default loginteacher