import React from 'react'
import Link from 'next/link'

type NavItemProps = {
  name: string;
  url: string;
}

const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <li>
      <Link href={url}>{name}</Link>
    </li>
  )
}

export default NavItem