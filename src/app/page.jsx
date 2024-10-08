import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {

  
  return (
    <>
      <h1>Привет</h1>
      <Link href='/main'><Button type="primary">Primary Button</Button></Link>
    </>

  );
}
