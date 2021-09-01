import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href="/about">About Me</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      
      <li><Link as="/post/1" href="./post/[id]">First Post</Link></li>
      <li><Link as="/post/2" href="./post/[id]">Second Post</Link></li>

      <li><Link href='/login'>Login</Link></li>
    </ul>
  </nav>
);
