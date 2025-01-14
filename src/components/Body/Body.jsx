import React from 'react'

import Unlock from './Unlock'
import Achivement from './Achivement'
import Calender from './Calender'
import Customer from './Customer'
import Coumminty from './Coumminty'

const Body = () => {
  return (
    <section className='flex flex-col gap-12 mb-28'>
        <Unlock />
        <Achivement />
        <Calender />
        <Customer />
        <Coumminty />
    </section>
  )
}

export default Body
