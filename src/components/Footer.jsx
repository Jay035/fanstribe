import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// import { BsTwitter } from "react-icons";
export default function Footer() {
  return (
    <section className="py-12 px-[9.5vw] text-center flex flex-col gap-6 border-t border-[#7a7c8670]">
      {/* footer logo */}
      <h1 id="logo" className="text-2xl">
        <Link to="/">Fanstribe</Link>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/aboutUs">About us</Link>
        <Link to="/partnerships">Partnerships</Link>
        <HashLink smooth to="/#contact">
          Contact us
        </HashLink>
      </div>

      {/* (Facebook, Instagram and Twitter logos)  */}
      {/* <BsTwitter /> */}
      <div className="flex items-center justify-center gap-4">
        <i className="ri-twitter-fill text-2xl"></i>
        <i className="ri-facebook-circle-fill text-2xl"></i>
        <a href="https://www.instagram.com/fanstribenigeria/">
          <i className="ri-instagram-fill text-2xl"></i>
        </a>
      </div>

      <p className="font-medium mt-3">
        © 2023 – Fanstribe. All rights reserved
      </p>
    </section>
  );
}
