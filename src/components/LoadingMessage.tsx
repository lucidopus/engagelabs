"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { PulseLoader } from "react-spinners"


function LoadingMessage() {

  const { pending } = useFormStatus();

  return (
    pending && (
      <p className='p-10 px-52 space-y-5'>
        <PulseLoader color='white' speedMultiplier={0.8}/>
      </p>
    )
  )
}
export default LoadingMessage