import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbarmini">
        <div className="navbar-left">
          <Link href="/" className="navbarimage" />
          <Link href="/" className="navbartitle">
            Trevor Gardner Website
          </Link>
        </div>
        <div className="navbar-right">
          <Link href="/projects" className="navbaritems">Projects</Link>
          <Link href="/about" className="navbaritems">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
