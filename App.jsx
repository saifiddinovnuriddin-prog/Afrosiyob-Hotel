import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Services from './pages/Services'
import Nomers from "./pages/Nomers";
import Event from "./pages/Event";
import Spa from "./pages/Spa";
import Restaurants from "./pages/Restauronts";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import BookingRoom from "./pages/BookingRoom";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import Paynet from "./pages/Paynet";
import Chek from "./pages/Chek";


function App() {
  return (
    <>

      <Header />
      <ScrollTopButton />

      <Routes>
        <Route path="/bookingroom" element={<BookingRoom />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/paynet" element={<Paynet />} />
        <Route path="/chek" element={<Chek />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nomers" element={<Nomers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Event />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App