'use client'
import { useFormState } from 'react-dom'
import Image from 'next/image';
import '../registration_component/registration_from.scss';
import Logo2 from '../../image/Logo2.png';
import Link from 'next/link';
import { entrance } from '@/app/actions/auth';
import { useState, useEffect } from 'react';
export default function EntranceForm() {
    const [state, action] = useFormState(entrance, undefined);
    useEffect(() => {
        console.log(state)
    }, [state, action]);

    return (
        <div className="wrapper-form">
            <form className='form-registration' action={action}>
                <Image src={Logo2} alt='LOGO' height={150} width={150} />

                <div>
                    <label htmlFor="email">Почта</label>
                    <input id="email" name="email" placeholder="Почта" />
                </div>

                {state?.errors && state.errors.map((item, index) => {
                    if (item.path[0] !== 'email') {
                        return
                    }

                    return <p key={index}>{item.message}</p>
                })}

                <div>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" name="password" placeholder="Пароль" />
                </div>

                {state?.errors && state.errors.map((item, index) => {
                    if (item.path[0] !== 'password') {
                        return
                    }

                    return <p key={index}>{item.message}</p>
                })}

                <button>Войти</button>
                <Link href='/registration'>У вас нет аккаунта</Link>
            </form>
        </div>
    )
}