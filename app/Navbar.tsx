import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbarmini">
      <div>
        <Link href='./'><h1>Trevor Gardner Website</h1></Link>
        <Link className="navbaritems" href="./">Home   </Link>
        <Link className="navbaritems" href="/projects">Projects   </Link>
        <Link className="navbaritems" href="/interests">Interests  </Link>
        <Link className="navbaritems" href="/skills">Skills  </Link>
      </div>
    </nav>
  );
}

export default Navbar;
