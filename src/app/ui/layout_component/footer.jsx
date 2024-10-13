'use client'
import { Layout } from 'antd';
const { Footer } = Layout;
import './layout_component.scss'
import Logo from '../../image/logo_white.png'
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function FooterLayout({ cook }) {
    return (
        <Footer className='footer'>
            <div className="wrapper_footer">
                <div>
                    <Image src={Logo} width={100} heigth={100} />
                </div>

                <div className='nav'>
                    <Link href='/main'>Главная страница</Link>
                    {
                        cook
                            ?
                            <Link href='/profile'>Аккаунт</Link>
                            :
                            <Link href='/registration'>Регистрация</Link>
                    }
                </div>

                <div className="icons">
                    <BiLogoFacebookCircle className = 'icon'/>
                    <AiFillTwitterCircle className = 'icon'/>
                    <FaTelegram className = 'icon'/>
                </div>
            </div>
        </Footer>
    )
}