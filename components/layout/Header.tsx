/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { headerData } from '@/data/layout/header'
import Link from 'next/link'

interface NavLinksProps {
  id: number,
  label: string,
  slug: string
}



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks: NavLinksProps[] = headerData.navLinks;
  return (
    <header className="header">
      <nav aria-label="Global" className="navbar">
        <div className="navbar-brand-lg">
          <Link href="/" className="p-2">
            <Image
              width={100} height={100}
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="navbar-logo"
            />
          </Link>
        </div>

        {/*Desktop Menu */}
        <div className='navbar-nav'>
          <ul className="nav-list">
            {
              navLinks.map((link) => (
                <li className="nav-list-item" key={link.id}>
                  <Link href={link.slug} className='nav-link'>{link.label}</Link>
                </li>

              ))
            }

          </ul>
        </div>
        {/* Mobile Menu */}
        <div className='mobile-menu-wrapper'>
          <div className="lg:hidden">
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="mobile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div
            className={`mobile-nav ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="mobile-menu-header">
              <div className="navbar-brand">
                <Link href="/" className=" p-2">
                  <Image
                    width={100} height={100}
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="navbar-logo"
                  />
                </Link>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="close-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="nav-list">
              {
                navLinks.map((link) => (
                  <li className="nav-list-item" key={link.id}>
                    <Link href={link.slug} className='nav-link'>{link.label}</Link>
                  </li>

                ))
              }

            </ul>
          </div>
        </div>


      </nav>
    </header>
  )
}
