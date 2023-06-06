import React from 'react'
import './index.css'
export const Sidebar = () => {
  return (
    <>
            <div class="sidebar">
         <div class="sidebar-header">
          <button class="sidebar-toggle">Hive</button>
        </div> 
        <ul class="sidebar-menu">
          <li class="menu-item">Início</li>
          <li class="menu-item">Populares</li>
          <li class="menu-item">Novos</li>
          <li class="menu-item">Mensagens</li>
          <li class="menu-item">Perfil</li>
        </ul>
      </div>
    </>
  )
}
