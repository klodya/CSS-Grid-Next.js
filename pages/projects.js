import Layout from '../components/Layout.js'
import React, { Component } from 'react'

const images = [
  {
    path: "/static/images/broadcast.png",
    name: "Broadcast",
    desc: "Effects present letters inquiry no an removed or friends. "
  },
  {
    path: "/static/images/card.png",
    name: "Identify",
    desc: "Desire behind latter me though in. "
  },
  {
    path: "/static/images/document-paper.png",
    name: "Documentation",
    desc: "Supposing shameless am he engrossed up additions."
  },
  {
    path: "/static/images/gifts.png",
    name: "Gifts",
    desc: " My possible peculiar together to. "
  },
  {
    path: "/static/images/money.png",
    name: "Makin' Paper",
    desc: "Desire so better am cannot he up before points."
  },
  {
    path: "/static/images/network.png",
    name: "Networking",
    desc: "Remember mistaken opinions it pleasure of debating."
  },
  {
    path: "/static/images/protect.png",
    name: "Protection",
    desc: "Court front maids forty if aware their at."
  },
  {
    path: "/static/images/research.png",
    name: "Research",
    desc: "Chicken use are pressed removed"
  },
  {
    path: "/static/images/copywriting.png",
    name: "Copywriting",
    desc: "On am in nearer square wanted."
  },
]

export default class Gallery  extends Component {
  
  render () {
      return (
          <Layout>
             <div className="gallery-page">
                {images.map((img, idx) => {
                return (
                  <div key={idx}
                    className={`gallery-images`}>
                  <img className="gallery-image"  src={img.path}></img>
                  <h6 className="project-title">{img.name}</h6>
                  <p className="project-description">{img.desc}</p>
                  </div>
                )})
              }
          {/*  Randomised image gallery */}
          {/* {images.map((img, idx) => {
          return (
            <div  key={idx} className={`gallery-images p${Math.floor(Math.random() * 5)}`}
             >
            </div>
          )})
        } */}
           
         </div>
      </Layout>
    )
  }
}
  
