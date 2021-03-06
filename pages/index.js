import Layout from '../components/Layout'
import Head from 'next/head'

const Index = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <div className="home-page">
        <h1 className="main-title">Building Static Websites</h1>
        <p className="sub-title">Next.js & CSS Grid</p>
        <div className="icons">
          <img className="icon" src="/static/images/lightbulb.png" ></img>
          <img className="icon" src="/static/images/media.png" ></img>
          <img className="icon" src="/static/images/design.png" ></img>
          
        </div>
        
      </div>
    
  </Layout>
)

export default Index
