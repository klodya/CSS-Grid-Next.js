import Layout from '../components/Layout.js'
import Head from 'next/head'

export default () => (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="about-page">
        <div className="top">
          <h1 className="title">Vivamus sagittis lacus vel  laoreet rutrum faucibus auctor.</h1>
          <p className="text">
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        
        <div className="images">
          <img className="about-image" src="/static/images/broadcast.png" ></img>
          <img className="about-image" src="/static/images/card.png" ></img>
          <img className="about-image" src="/static/images/document-paper.png" ></img>
          <img className="about-image" src="/static/images/research.png" ></img>
        </div>
        
        <div className="intro">
          <p>
           Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
           </p>
          
          <ul>
            <li>Nulla vitae elit libero</li>
            <li>a pharetra augue</li>
            <li>Cras mattis consectetur purus sit amet fermentum</li>
            <li>Fusce dapibus</li>
            <li> tellus ac cursus commodo</li>
            <li>Praesent commodo cursus magna</li>
          </ul>
        </div>
       
        <div className="image">
          <img className="money-image" src="/static/images/money.png" ></img>
        </div>
        
        <div className="description">
          <h5 className="title">Vel augue laoreet rutrum faucibus auctor.</h5>
          <p>
           Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
          <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
         </p>
        </div>
       
        <div className="dotted-image">
          <img className="bottom-image" src="/static/images/protect.png"></img>
          <p>Nulla vitae elit libero, a pharetra augue.</p>
        </div>
        <div className="dotted-image">
          <img className="bottom-image" src="/static/images/media.png" ></img>
          <p>Nulla vitae elit libero, a pharetra augue.</p>
        </div>
        <div className="dotted-image">
          <img className="bottom-image" src="/static/images/network.png" ></img>
          <p>Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </div>
    </Layout>
)
