import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'




export default class MyApp extends App {

  render() {
    const { Component, router, pageProps } = this.props

    return (
      <Container>
          <TransitionGroup>
            <CSSTransition key={router.route} classNames="fade" timeout={1000}>
              <Component {...pageProps} />
            </CSSTransition>
          </TransitionGroup>
      </Container>
    )
  }

}
