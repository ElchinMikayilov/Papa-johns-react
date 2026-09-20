import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Offers from '../pages/Offers'
import PapaBonus from '../pages/PapaBonus'
import PapaTalk from '../pages/PapaTalk'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Mukafatlar from '../pages/Mukafatlar'
import Order from '../pages/Order'
import OfferDetail from '../pages/offers/OfferDetail'
import PartyDetail from '../pages/offers/PartyDetail'
import WelcomeDetail from '../pages/offers/WelcomeDetail'
import DownloadApp from '../pages/offers/DownloadApp'
import CroissantDetail from '../pages/offers/CroissantDetail'
import Super5Detail from '../pages/offers/Super5Detail'
import BolBolDetail from '../pages/offers/BolBolDetail'
import StarPizzaDetail from '../pages/offers/StarPizzaDetail'
import Ingredients from '../pages/about/Ingredients'
import Allergens from '../pages/about/Allergens'
import Restaurants from '../pages/about/Restaurants'
import Faq from '../pages/about/Faq'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Contact from '../pages/Contact'
import Privacy from '../pages/Privacy'

export const paths = [
    { title: 'Təkliflər', path: '/offers', element: <Offers /> },
    { title: 'Papa Bonus', path: '/papaBonus', element: <PapaBonus /> },
    { title: 'Papa Talk', path: '/papaTalk', element: <PapaTalk /> },
    { title: 'Haqqımızda', path: '/about', element: <About /> },
]

const Router = () => {
    const [addressData, setAddressData] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu addressData={addressData} setAddressData={setAddressData} openModal={openModal} setOpenModal={setOpenModal} />} />
            {paths.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            <Route path='/order' element={<Order />} />
            <Route path='/offers/:id' element={<OfferDetail />} />
            <Route path='/offers/party/:id' element={<PartyDetail />} />
            <Route path='/offers/welcome' element={<WelcomeDetail />} />
            <Route path='/offers/welcome/download' element={<DownloadApp />} />
            <Route path='/offers/croissant' element={<CroissantDetail />} />
            <Route path='/offres/super5' element={<Super5Detail />} />
            <Route path='/offers/bol-bol-combo' element={<BolBolDetail />} />
            <Route path='/offers/star-pizza' element={<StarPizzaDetail />} />
            <Route path='about/ingredients' element={<Ingredients />} />
            <Route path='about/allergens' element={<Allergens />} />
            <Route path='about/restaurants' element={<Restaurants setAddressData={setAddressData} openModal={openModal} setOpenModal={setOpenModal} />} />
            <Route path='about/faq' element={<Faq />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
        </Routes>
    )
}

export default Router
