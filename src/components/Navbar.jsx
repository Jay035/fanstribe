import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Power3, gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import navlogo from "../assets/logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  let logo = useRef(null);
  let hamburger = useRef(null);
  let nav = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".list_item", {
        opacity: 0,
        duration: 2,
        y: 80,
        stagger: {
          amount: 0.4,
        },
        ease: Power3,
      });
    }, nav);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={nav}
      className="flex justify-between items-center bg-[#06070B] tracking-tight w-full gap-x-12 py-6 px-[9.5vw]"
    >
      <Link to="/">
        <img src={navlogo} alt="logo" loading="lazy" className="w-12" />
      </Link>
      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out xl:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 xl:opacity-100 xl:left-0 transition-all duration-100 delay-75`
        } absolute top-0 bg-[#11141d] xl:bg-transparent xl:relative h-screen xl:h-fit w-full xl:w-fit ease-in-out flex flex-col xl:flex-row xl:gap-12 xl:justify-between xl:items-center text-base md:text-lg`}
      >
        <div className="flex flex-col items-center gap-6 mt-40 xl:mt-0 xl:flex-row uppercase font-medium">
          {/* <p
            className="list_item"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/"
              className=" text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
            >
              Home
            </NavLink>
          </p> */}
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
            className="list_item text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
          >
            {/* <NavLink
              to="/"
            > */}
            News
            {/* </NavLink> */}
          </p>
          <p
            className="list_item"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/aboutUs"
              className=" text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
            >
              About us
            </NavLink>
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
            className="list_item text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
          >
            {/* <NavLink
              to="/"
            > */}
            Shop
            {/* </NavLink> */}
          </p>
          <p
            className="list_item"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/events"
              className=" text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
            >
              Events
            </NavLink>
          </p>
          <p
            className="list_item"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/activities"
              className=" text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
            >
              Activities
            </NavLink>
          </p>

          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
            className="list_item text-[#EAECF0] w-fit transition-colors hover:text-[#FFC0B6]"
          >
            <NavLink to="/donate">Donations</NavLink>
          </p>

          <p
            className="list_item text-[#EAECF0] w-fit transition-colors hover:text-[#FFC0B6]"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {/* <NavLink
              to="/"
            > */}
            Blog
            {/* </NavLink> */}
          </p>

          {/* <p
            className="list_item"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/join"
              className=" text-[#EAECF0] w-fit transition-colors hover:text-[#5eb84c]"
            >
              Join our community
            </NavLink>
          </p>
           */}
        </div>

        {/* CTA buttons */}
        <button
          className="mt-6 xl:hidden"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          <HashLink
            smooth
            to="/#contact"
            className="list_item border border-[#6EE755] bg-[#6de755d0] text-center text-[#0e200a] px-[39.5px] py-[10px] rounded-[50px] hover:bg-transparent hover:text-white"
          >
            CONTACT US
          </HashLink>
        </button>
      </section>

      {/* CTA buttons */}
      <button
        className="hidden xl:flex list_item"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <HashLink
          smooth
          to="/#contact"
          className="list_item border border-[#6EE755] bg-[#6de755d0] text-center text-[#0e200a] px-[39.5px] py-[10px] rounded-[50px] hover:bg-transparent hover:text-white"
        >
          CONTACT US
        </HashLink>
      </button>
      <div
        ref={(el) => (hamburger = el)}
        className="z-50 flex flex-col gap-1 items-center cursor-pointer xl:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-5 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] translate-y-4 w-7` : ``
          }`}
        ></span>
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-5 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] translate-y-[10px] w-7` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
