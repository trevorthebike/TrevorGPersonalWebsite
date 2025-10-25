import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbarmini">
      <div>
        <Link  href='./'><h1 className= "navbartitle">Trevor Gardner Website</h1></Link>
        <Link className="navbaritems" href="./">Home   </Link>
        <Link className="navbaritems" href="/projects">Projects   </Link>
        <Link className="navbaritems" href="/about">About  </Link>
      </div>
    </nav>
  );
}

export default Navbar;
