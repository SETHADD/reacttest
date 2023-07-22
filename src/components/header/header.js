import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
        <h1>
            POPULAR HORNED BEASTS IN THE WORLD
        </h1>
        <form>
          <fieldset>
        
              <label for="selectName">Horn Number
              <select  id='selectName' name='selectName'>
                <option value="select one" disabled selected>select one</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              </label>
          </fieldset>
        </form>
    </header>
  )
}
