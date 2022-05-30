import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <main>
      {/* rendering the components for the home page */}
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Contact/>
    </main>
  );
}

export default HomePage
