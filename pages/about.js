import Layout from '../components/Layout.js'

export default () => (
    <Layout>
         <div className="about-page">
           <div className="top">
             <h1 className="title">
               Vivamus sagittis lacus vel  laoreet rutrum faucibus auctor.
             </h1>
             <p className="text">
               Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </p>
           </div>
           <div className="intro">
             <p>
               Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
              
              <ul dir="rtl">
                <li>Nulla vitae elit libero</li>
                <li>a pharetra augue</li>
                <li>Cras mattis consectetur purus sit amet fermentum</li>
                <li>Fusce dapibus</li>
                <li> tellus ac cursus commodo</li>
                <li>Praesent commodo cursus magna</li>
              </ul>
           </div>
           <div className="image">
             <img className="about-image" src="/static/images/broadcast.png" ></img>
           </div>
           <div className="image">
             <img className="about-image" src="/static/images/money.png" ></img>
           </div>
           <div className="description">
             <h5 className="title">
               Vel augue laoreet rutrum faucibus auctor.
             </h5>
             <p>
               Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </p>
           </div>
           <div className="image">
             <img className="about-image" src="/static/images/protect.png" ></img>
           </div>
           <div className="image">
             <img className="about-image" src="/static/media.png" ></img>
           </div>
           <div className="image">
             <img className="about-image" src="/static/images/research.png" ></img>
           </div>
           <div className="outro">
             <p>
               Nulla vitae elit libero, a pharetra augue.
              </p>
              <p> Cras mattis consectetur purus sit amet fermentum.</p>
           </div>
         </div>
    </Layout>
)
