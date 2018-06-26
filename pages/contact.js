import Layout from '../components/Layout.js'
import Head from 'next/head'

export default () => (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
       <div className="contact-page">
        <h2 className="contact-title">Resources</h2>
         
        <div className="css-grid">
          <h3>CSS Grid</h3>
          <ul>
             <li><a href="https://cssgrid.io/">CSS Grid video tutorials</a>, Wes Bos</li>
             <li> <a href="https://learncssgrid.com/">Guide to learning CSS Grid</a>, Jonathan Suh</li>
             <li><a href="https://gridbyexample.com/learn/">Grid by Example</a> </li>
          </ul>
          <ul>
            <li><a href="https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/">
               "Should I use Grid or Flexbox"</a>, Rachel Andrew</li>
            <li> <a href="https://medium.com/@jonyablonski/designers-guide-to-flexbox-and-grid-cec6e7e45736">"Designer’s Guide to Flexbox and Grid"</a>, Jon Yablonski</li>
            <li><a href="https://dockyard.com/blog/2018/05/22/new-css-techniques-at-the-component-level-part-1-of-2-css-grid">"New CSS Techniques at the Component Level"</a>, David Luhr</li>
            <li><a href="https://medium.com/deemaze-software/css-grid-responsive-layouts-and-components-eee1badd5a2f">"Responsive layouts and components"</a>, Rafaela Ferro</li>
          </ul>
        </div>
        
        <div className="next-js">
          <h3>Next.js</h3>
          <ul>
            <li><a href="https://nextjs.org/learn/">Next.js tutorial</a></li>
            <li><a href="https://flaviocopes.com/nextjs/">Getting started with Next.js</a></li>
            <li><a href="https://zeit.co/blog/next2">Next.js Blog</a></li>
           </ul>
           <ul>
            <li><a href="https://medium.freecodecamp.org/use-react-with-next-js-framework-and-how-it-made-my-life-easier-4280b643451">"Why I chose React + Next.js"</a>, Tim Založnik</li>
            <li><a href="https://hackernoon.com/next-js-react-server-side-rendering-done-right-f9700078a3b6">"Next.js — React Server Side Rendering"</a>, Indrek Lasn</li>
            <li><a href="https://www.codementor.io/tgreco/5-of-the-many-things-to-love-about-zeit-s-next-js-bpszu99g1">"5 (of the many reasons) to love Zeit's Next.js"</a>, Thomas Greco</li>
          </ul>
        </div>
        
        <div className="tools">
          <h3>Tools</h3>
          <ul>
            <li><a href="https://nextjs.org/">Next.js</a></li>
            <li><a href="https://zeit.co/now">Now</a></li>
            <li><a href="https://www.netlify.com/">Netlify</a></li>
            <li><a href="https://www.mozilla.org/en-GB/firefox/developer/">FireFox Dev</a></li>
            <li><a href="https://mozilladevelopers.github.io/playground/">FireFox Dev Tools playground</a></li>
          </ul>
        </div>
        
        <div className="get-in-touch">
          <h2 className="get-in-touch-title">Thanks! (◠‿◠)</h2>
          <p>If you'd like to get in touch about anything I've said, or check out the code for this website...</p>
          <span>
            <img className="social" src="/static/email.png"></img>
            <a href="mailto:&#99;&#109;&#64;&#107;&#112;&#118;&#45;&#108;&#97;&#98;&#46;&#99;&#111;&#46;&#117;&#107;">
              &#99;&#109;&#64;&#107;&#112;&#118;&#45;&#108;&#97;&#98;&#46;&#99;&#111;&#46;&#117;&#107;
            </a>
          </span>
          <span>
            <img className="social" src="/static/twitter.png"></img>
            <a href="https://twitter.com/cleverclauds">
            &#64;&#99;&#108;&#101;&#118;&#101;&#114;&#99;&#108;&#97;&#117;&#100;&#115;
            </a>
          </span>
         
         <span>
           <img className="social" src="/static/github.png"></img>
           <a href="https://github.com/klodya/CSS-Grid-Next.js">github.com/klodya/CSS-Grid-Next.js</a>
         </span>
        </div>
      </div>
    </Layout>
)
