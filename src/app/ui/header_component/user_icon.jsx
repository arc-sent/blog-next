
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';
export default function UserIcon({ cook }) {
    return (
        <Link href={cook ? '/profile' : "/registration"}><FaRegCircleUser style={{ width: '25px', height: '25px', color: '#26262e' }}/></Link>
    )
}