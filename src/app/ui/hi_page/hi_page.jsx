import Image from 'next/image';
import './hi_page.scss';
import Link from 'next/link';
import Logo from '../../image/Logo2.png'
export default function HiPage() {
    return (
        <>
            <div className='WrapperHiPage'>

                <Image src={Logo} width={150} height={150} alt='LOGO'/>
                <h1>Добро пожаловать на сайт arc!</h1>

                <p>Наш ресурс подходит для обладателей знаний, любопытных искателей и мечтателей. Погружайтесь в мир свежих и интригующих статей. Открывайте новые горизонты и вдохновляйтесь. Найдите источник знаний на нашей странице!</p>
                <Link href='/main'><button>Начать чтение</button></Link>
            </div>
        </>
    )
}