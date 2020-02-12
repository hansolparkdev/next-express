import Link from 'next/link';

const linkStype = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStype}>home</a>
    </Link>
    <Link href="/about">
      <a style={linkStype}>about</a>
    </Link>
  </div>
);

export default Header;
