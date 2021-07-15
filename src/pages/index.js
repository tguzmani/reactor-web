import '../styles/main.scss'
import 'aos/dist/aos.css'

import React from 'react'
import { Router } from '@reach/router'

import Navigation from './../components/Navigation'

import Home from './HomePage'
import Portfolio from './PortfolioPage'
import AboutUs from './AboutUsPage'
import Services from './ServicesPage'
import ContactUs from './ContactUsPage'
import NotFoundPage from './404'
import Footer from '../components/Footer'
import useAOS from './../hooks/useAOS'

const IndexPage = () => {
  useAOS()

  return (
    <>
      <Navigation />
      <div className='content'>
        <Router>
          <Home path='/' />
          <Portfolio path='/portfolio' />
          <AboutUs path='/about-us' />
          <Services path='/services' />
          <ContactUs path='/contact-us' />
          <NotFoundPage default />
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
