import AboutMe from '@/components/sections/AboutMe'
import HomeHero from '@/components/sections/HreoSection'
import MySkills from '@/components/sections/mySkills'
import React from 'react'

function Home() {
  return (
    <div className='overflow-y-auto'>
      <HomeHero />
      <AboutMe />
      <MySkills />
    </div>
  )
}

export default Home