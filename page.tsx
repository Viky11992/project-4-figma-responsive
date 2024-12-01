import React from 'react'
import Header from './components/Header'
import Nev from './components/Nev'
import Find from './components/Find'
import Newarrival from './components/Newarrival'
import Topselling from './components/Topselling'
import Dressstyle from './components/Dressstyle'
import Happyclient from './components/happyclient'
import Footer from './components/footer'

function page() {
  return (
    <div>
      <Header />
      <Nev />
      <Find />
      <Newarrival />
      <Topselling />
      <Dressstyle />
      <Happyclient />
      <Footer />
    </div>
  )
}

export default page