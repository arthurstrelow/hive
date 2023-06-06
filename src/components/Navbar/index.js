import React from 'react'
import './index.css'

export const Navbar = () => {
  return (
   
        <header>
        <nav class="navbar">
          <div class="navbar-logo">
            <a href="#"><img src="src/logo bruta.png" alt="Hive" /></a>
          </div>
          <div class="navbar-search">
            <input type="text" placeholder="Pesquisar"/>
            <button type="submit">Pesquisar</button>
          </div>
          <div class="navbar-buttons">
            <button class="navbar-button-account">Conta</button>
            <button class="navbar-button-login">Login</button>
          </div>
        </nav>
      </header>


  )
}
