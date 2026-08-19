import React from 'react'
import NavItem from '../../atoms/navitem/NavItem'
import { NavLink } from '../../../lib/type/dtype'

type NavlistProps = {
  navLinks: NavLink[]
}

const Navlist = ({ navLinks }: NavlistProps) => {
  return (
    <ul className={"nav-links"}>
      {navLinks.map((link, index) => (
        <NavItem key={index} name={link.name} url={link.url} />
      ))}
    </ul>
  )
}

export default Navlist