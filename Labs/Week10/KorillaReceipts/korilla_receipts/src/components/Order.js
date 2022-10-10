import React from 'react'
import { useState } from 'react'

function Order({ onOrder }) {
  
  const [person, setPerson] = useState('')
  const [main, setMain] = useState('')
  const [protein, setProtein] = useState('')
  const [rice, setRice] = useState('')
  const [sauce, setSauce] = useState('')
  const [toppings, setToppings] = useState('')

  
  const onSubmit = (e) => {
    e.preventDefault()

    onOrder({ person, main, protein, rice, sauce, toppings })
    
    setPerson('')
    setMain('')
    setProtein('')
    setRice('')
    setSauce('')
    setToppings('')
  }

  
  
  return (
    <div>
    <form className='addOrderForm' onSubmit={onSubmit}>

    <input type='text' placeholder='Name' value={person} onChange={(e) => setPerson(e.target.value)} />
    
    <select value={main} onChange={(e) => setMain(e.target.value)}>
      <option value="Burrito">Burrito</option>
      <option value="Rice Bowl">Rice Bowl</option>
      <option value="Salad">Salad</option>
    </select>
    <select value={protein} onChange={(e) => setProtein(e.target.value)}>
      <option value="Organic Tofu">Organic Tofu</option>
      <option value="Ginger Soy Chix">Ginger Soy Chix</option>
      <option value="Steak">Steak</option>
    </select>
    <select value={rice} onChange={(e) => setRice(e.target.value)}>
      <option value="Organic Tofu">Organic Tofu</option>
      <option value="Ginger Soy Chix">Ginger Soy Chix</option>
      <option value="Steak">Steak</option>
    </select>
    <select value={sauce} onChange={(e) => setSauce(e.target.value)}>
      <option value="Organic Tofu">Organic Tofu</option>
      <option value="Ginger Soy Chix">Ginger Soy Chix</option>
      <option value="Steak">Steak</option>
    </select>
    <select checkbox value={toppings} onChange={(e) => setToppings(e.target.value)}>
      <option value="Yuzu">Yuzu</option>
      <option value="Kimchi">Kimchi</option>
      <option value="Kale">Kale</option>
    </select>

    <input type='submit' value='Submit Order' />

    </form>
    </div>
  )
}

export default Order