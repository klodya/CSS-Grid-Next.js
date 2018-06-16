import "../styles/style.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
  <div className="main">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
