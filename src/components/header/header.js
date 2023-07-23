import React from 'react'
import './header.css'

export default function Header({handleChoice}) {
  return (
    <header>
        <h1>
            POPULAR HORNED BEASTS IN THE WORLD
        </h1>
        <form className='forms'>
          <fieldset>
              <label htmlFor="selectName">Horn Number
              <select  id='selectName' className='selectName' onChange={handleChoice}>
                <option value="all" >All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </select>
              </label>
          </fieldset>
        </form>
    </header>
  )
}
