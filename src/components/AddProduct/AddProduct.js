import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function AddProduct() {
  const [counter,setCounter]=useOutletContext
  return (

    <div>AddProduct{counter}</div>
  )
}
