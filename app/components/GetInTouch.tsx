import React from 'react'
import GetLeftSection from './GetLeftSection'
import GetRightSection from './GetRightSection'

const GetInTouch = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-22">
      
        <GetLeftSection/>
        <GetRightSection/>
        </div>
        </section>
  )
}

export default GetInTouch
