import { NavLink } from 'react-router-dom'

import { Scroll, Timer } from '@phosphor-icons/react'
import { HeaderContainer } from './styles'

import logoIgnite from 'assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo ignite" />
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
