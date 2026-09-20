import React, { useEffect, useState } from 'react'
import Router from './router/Router'
import Footer from './components/Footer'
import ScrollToTop from '../src/hooks/ScrollToTop'
import { useLocation } from 'react-router'
import PrivacyModal from './components/common/PrivacyModal'

const App = () => {
  const location = useLocation()
  const [privacyOpen, setPrivacyOpen] = useState(false)

  useEffect(() => {
    const titles = {
      "/": "Ana səhifə", "/menu": "Menu", "/offers": "Kampaniyalar", '/about/faq': "Sual-Cavab", '/about/allergens': 'Allergenlər',
      "/papaBonus": "Papa Bonus", "/papaTalk": "PapaTalk", '/about': 'Haqqımızda', '/about/restaurants': "Restoranlar", '/about/ingredients': 'İnqrediyentlər'
    }
    document.title = "Papa John's - " + (titles[location.pathname] || "Ən yaxşı təklif və Kampaniyalar")
  }, [location.pathname])

  useEffect(() => {
    setTimeout(() => {
      setPrivacyOpen(true)  
    }, 5000)
  }, [])

  const isNotFound = location.pathname === '/404'

  return (
    <div>
      <ScrollToTop />
      <Router />
      {!isNotFound && location.pathname !== '/offers/welcome/download' && <Footer />}

      {privacyOpen && (<PrivacyModal setOpen={setPrivacyOpen} />)}
    </div>
  )
}

export default App
