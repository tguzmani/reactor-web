import React from 'react'
import '../styles/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './../components/Navigation'

import Home from './HomePage'
import Portfolio from './PortfolioPage'
import AboutUs from './AboutUsPage'
import Services from './ServicesPage'
import ContactUs from './ContactUsPage'
import NotFoundPage from './404'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <Router>
      <>
        <Navigation />

        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Router component={NotFoundPage} />
          </Switch>
        </div>

        <Footer />
      </>
    </Router>
  )
}

export default IndexPage
