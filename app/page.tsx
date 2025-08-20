import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
     <section className='home-section'>
      <CompanionCard
           id="123"
           name="Neura the Brainy Explorer"
           topic="Neural Network of the Brain"
           subject="science"
           duration="{45}"
           color="#ffda6e"
      />

      <CompanionCard
           id="456"
           name="Neura the Brainy Explorer"
           topic="Neural Network of the Brain"
           subject="science"
           duration="{45}"
           color="#ffda6e"
      />

      <CompanionCard
           id="789"
           name="Neura the Brainy Explorer"
           topic="Neural Network of the Brain"
           subject="science"
           duration="{45}"
           color="#ffda6e"
      />

     </section>

     <section className='home-section'>
      <CompanionList/>
      <CTA/>
     </section>

    </main>
  )
}

export default Page