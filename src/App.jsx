import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Editor from "./pages/editor/App";
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';
import Mainpage from './pages/Mainscreen/Mainpage';
import MyTemplates from './pages/MyTemplates/MyTemplates';
import Template1 from './pages/MyTemplates/Template1';
import Template2 from './pages/MyTemplates/Template2';
import Template3 from './pages/MyTemplates/Template3';
import Drag from './pages/drag/Drag';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  ArchiveBoxIcon,
  CubeTransparentIcon,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import SecondMainScreen from "./pages/SecondScreen/SecondMainpage";
import Hindi from './pages/SecondScreen/Features';
import Fuzzysuggestions from './pages/SecondScreen/fuzzysuggestions';
import Namesimilarity from './pages/SecondScreen/namesimilarity';
import Hinditransliteration from './pages/SecondScreen/hinditransliteration';
import Twoscript from './pages/SecondScreen/twoscript';

const user = {
  name: 'Whitney Francis',
  email: 'whitney.francis@example.com',
  imageUrl:
    'https://sc0.blr1.cdn.digitaloceanspaces.com/article/148255-biefdimdum-1601307203.jpg',
}



const navigation = [
  {
    name: 'Inboxes',
    href: '#',
    children: [
      { name: 'Technical Support', href: '#' },
      { name: 'Sales', href: '#' },
      { name: 'General', href: '#' },
    ],
  },
  { name: 'Reporting', href: '#', children: [] },
  { name: 'Settings', href: '#', children: [] },
]
const sidebarNavigation = [
  { name: 'Open', href: '/fuzzysuggestions', icon: InboxIcon, current: true },
  { name: 'Archive', href: '/namesimilarity', icon: ArchiveBoxIcon, current: false },
  { name: 'Flagged', href: '/twoscript', icon: FlagIcon, current: false },
  { name: 'Drafts', href: '/hinditransliteration', icon: PencilSquareIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import DraggerInit from "./pages/drag/DraggerInit";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="flex h-screen flex-col">
        {/* Top nav*/}
        <header className="relative flex h-16 flex-shrink-0 items-center bg-white">
          {/* Logo area */}
          <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
            <a
              href="/"
              className="flex h-16 w-16 items-center justify-center bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
            >
              <img
                className="h-auto w-auto"
                src="https://hindi.careerindia.com/img/2021/01/mppolicemppolicevacancy2021mppolicelastdatemppolicebhartimppolicevacancy2020mppolicesyllabusmppoliceheightmppolice2021mppolicevacancymppoliceagelimitmppoliceapplyonlinemppoliceage-1611836612.jpg?16092024100753"
                alt="Your Company"
              />  
            </a>
          </div>

          {/* Picker area */}
          <div className="mx-auto md:hidden">
            <div className="relative">
              <label htmlFor="inbox-select" className="sr-only">
                Choose inbox
              </label>
              <select
                id="inbox-select"
                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
                defaultValue={sidebarNavigation.find((item) => item.current).name}
              >
                {sidebarNavigation.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Menu button area */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav area */}
          <div className="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
                <label htmlFor="desktop-search" className="sr-only">
                  Search
                </label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search"
                  className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent focus:ring-0 sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
              <nav aria-label="Global" className="flex space-x-10">

              <a href="/" className="text-sm font-medium text-gray-900">
                  Home
                </a>
                <a href="/about" className="text-sm font-medium text-gray-900">
                  About
                </a>
                <a href="/features" className="text-sm font-medium text-gray-900">
                  Features
                </a>
                <a href="#" className="text-sm font-medium text-gray-900">
                  Demo
                </a>
              </nav>
              <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a href="#" className="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </span>

                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide this div based on menu open/closed state */}
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                  enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                  enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                  leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
                >
                  <Dialog.Panel
                    className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                    aria-label="Global"
                  >
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                      <a href="/">
                        <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                      </a>
                      <button
                        type="button"
                        className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                      <div className="relative text-gray-400 focus-within:text-gray-500">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search all inboxes
                        </label>
                        <input
                          id="mobile-search"
                          type="search"
                          placeholder="Search all inboxes"
                          className="block w-full rounded-md border-gray-300 pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                      {navigation.map((item) => (
                        <Fragment key={item.name}>
                          <a
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                            >
                              {child.name}
                            </a>
                          ))}
                        </Fragment>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                      <div className="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                        </div>
                        <div className="ml-3 min-w-0 flex-1">
                          <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                          <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                        </div>
                        <a href="#" className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </header>

        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800">
            <div className="relative flex w-20 flex-col space-y-3 p-3">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                    'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>

          {/* Main area */}
          <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            {/* React Router Code */}
            <div className="flex-1 min-w-0 bg-white lg:overflow-y-auto">
              <div className="p-4 sm:p-6 lg:p-8">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<SecondMainScreen />} />  
                  <Route path="/about" element={<h1>About</h1>} />  
                  {/* <Route path="/dragger" element={<Drag />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/Mainscreen" element={<Mainpage />} /> */}
                  <Route path="/SecondMainScreen" element={<SecondMainScreen />} />
                  <Route path="/features" element={<Hindi />} />
                  <Route path="/fuzzysuggestions" element={<Fuzzysuggestions />} />
                  <Route path="/namesimilarity" element={<Namesimilarity />} />
                  <Route path="/hinditransliteration" element={<Hinditransliteration />} />
                  <Route path="/twoscript" element={<Twoscript />} />
                  {/* <Route path="/MyTemplates" element={<MyTemplates />} />
                  <Route path="/Template1" element={<Template1 />} />
                  <Route path="/Template2" element={<Template2 />} />
                  <Route path="/Template3" element={<Template3 />} /> */}
                </Routes>
              </BrowserRouter>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}