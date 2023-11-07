import React from 'react'
import {BsGlobe} from "react-icons/bs"

export default function Footer() {
  return(
      <div className='Footer'>
      <div className='footer1'>
      <BsGlobe size="25"/>
      <p>English</p>
      </div>
      <div className='footer2'>
      <p>Conditions of Use</p>
      <p>Privacy Note</p>
      <p>Interested-Based Ads</p>
      </div>
      <p className='copyrights'>@2023  All Rights Reserved</p>
      </div>
  )
}
