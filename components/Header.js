import Link from 'next/link'

const Header = () => (
    <div className="nav">
      
        <Link href="/">
          <a>
            <span className="pencil">✎</span>
            <h6 className="logo">···‒‒‒···</h6>
          </a>
        </Link>
      
      <div className="nav-bar">
        <Link prefetch href="/"><a>Home</a></Link>
        <Link prefetch href="/about"><a>About</a></Link>
        <Link prefetch href="/projects"><a>Projects</a></Link>
        <Link prefetch href="/contact"><a>Contact</a></Link>
      </div>
    </div>
)

export default Header
