import { useState, useEffect } from 'react';

import { Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

import classNames from "classnames";
import Assets from "../assets/assets";

const navigation = [
  { name: "Home", to: "/", current: true, exact: true },
  { name: "About Us", to: "/aboutus", current: false },
  { name: "Contact", to: "/contact", current: false },
  { name: "Career", to: "/career", current: false },
];

const Navbar = () => {
  const [isSticky, setSticky] = useState(false)
  const [isDrop, setDrop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.innerWidth >= 768) {
        return
      }
      let navBar = document.querySelector(".main-layout>nav>div")
      if (navBar && navBar.getBoundingClientRect().height < window.pageYOffset) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
    window.document.body.addEventListener('click', (event) => {
      let navBar = document.querySelector(".main-layout>nav")
      let barRect = navBar?.getBoundingClientRect()
      if (!(barRect && barRect.left + barRect.width > event.x && barRect.top + barRect.height > event.y)) {
        setDrop(false)
      }
    })
  }, [])

  return (
    <nav className={classNames({"py-4 fixed w-full h-auto md:static z-50 bg-transparent":true, "bg-white":isSticky})}>
      <div className="relative ml-4 md:ml-20 lg:ml-25 h-10 md:h-16 z-50">
        <div className="flex items-center justify-between md:justify-start">
          <div className="flex-shrink-0">
            <NavLink className="flex items-center" to="/" onClick={() => setDrop(false)}>
              <img
                className="inline-block mr-4 w-16 md:w-20"
                src={Assets.images.svgLogo}
                alt="Nu Logo"
              />
            </NavLink>
          </div>
          <div className="hidden md:flex items-center md:ml-32 lg:ml-48 space-x-3 lg:space-x-8">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                exact={item.exact}
                to={item.to}
                activeClassName="font-mont-semibold bg-indigo"
                className={classNames({
                  "text-center text-gray-900 text-base lg:text-lg hover:font-bold":
                    true,
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <div onClick={() => setDrop(!isDrop)} className="disclosure-btn inline-flex items-center justify-center p-2 rounded-md text-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon className={classNames({"block h-6 w-6":true, "transform rotate-90":isDrop})} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      
      <Transition
        show={isDrop}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className=".disclosure-panel md:hidden static bg-white px-4 pt-4 w-full">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                exact={item.exact}
                to={item.to}
                activeClassName="font-mont-semibold"
                onClick={() => setDrop(false)}
                className={classNames({
                  "text-grey-900 hover:bg-gray-300 block px-1 py-2 rounded-md text-lg": true,
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
