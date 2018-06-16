import Link from 'next/link'

const Header = () => (
    <div className="nav">
      <h1 className="logo">LOGO</h1>
      <div className="nav-bar">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/gallery"><a>Gallery</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </div>
    </div>
)

export default Header
