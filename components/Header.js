import Link from 'next/link'

const Header = () => (
    <div className="nav">
      
        <Link href="/">
          <a>
            <h3 className="logo">✎_ _</h3>
          </a>
        </Link>
      
      <div className="nav-bar">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </div>
    </div>
)

export default Header
