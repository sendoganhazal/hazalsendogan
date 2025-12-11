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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks: NavLinksProps[] = headerData.navLinks;
  return (
    <header className="header">
      <nav aria-label="Global" className="navbar">
        <div className="navbar-brand-lg">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              width={100} height={100}
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="navbar-logo"
            />
          </Link>
        </div>
        <div className="mobile-menu-wrapper">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-menu-btn"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="popover-group">
          {
            navLinks.map((link) => (
              <Link key={link.id} href={link.slug} className='nav-link popover-link'>{link.label}</Link>
            ))
          }

        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="dialog">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="dialog-panel">
          <div className="dialog-header">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                width={100} height={100}
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="dialog-logo"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="dialog-close-btn"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="dialog-nav-root">
            <div className="dialog-nav-divide">
              <div className="dialog-nav">
                {
                  navLinks.map((link) => (
                    <Link key={link.id} href={link.slug} className='nav-link dialog-link'>{link.label}</Link>
                  ))
                }

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
