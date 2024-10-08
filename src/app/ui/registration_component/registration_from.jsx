'use client'
import Image from 'next/image';
import './registration_from.scss';
import Logo2 from '../../image/Logo2.png';
import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth';
export default function RegistrationFrom() {

    const [state, action] = useFormState(signup, undefined);

    return (
        <div className="wrapper-form">
            <form className='form-registration' action={action}>
                <Image src={Logo2} alt='LOGO' height={150} width={150} />
                <div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" name="name" placeholder="Имя" />
                </div>
                {state?.errors?.name && <p>{state.errors.name}</p>}

                <div>
                    <label htmlFor="email">Почта</label>
                    <input id="email" name="email" placeholder="Почта" />
                </div>
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <div>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" name="password" placeholder="Пароль" />
                </div>

                {state?.errors?.password && (
                    <div>
                        <p>Password must:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <button>Зарегестрироваться</button>
            </form>
        </div>
    )
}