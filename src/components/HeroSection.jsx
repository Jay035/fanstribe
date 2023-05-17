import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import { useEffect, useRef } from "react";
import { Power3, gsap } from "gsap";
import { useLayoutEffect } from "react";

export function HeroSection() {
  let hero = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".text", {
        opacity: 0,
        duration: 2,
        y: 100,
        stagger: {
          amount: 0.4,
        },
        ease: Power3,
      });
    }, hero);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={hero} className="relative grid w-full md:items-center gap-16 h-screen">
      <img
        src={heroImg}
        className="hero-img h-screen z-[0] object-cover object-center w-full"
        alt="hero img"
      />
      {/* hero container */}
      <div className="hero-container absolute top-0 text-center h-screen px-6 sm:px-14 md:px-24 w-full mx-auto">
        <div className="max-w-4xl z-[99999999] mx-auto mt-20 lg:mt-32 tracking-wide flex flex-col items-center gap-4 ">
          <h1
            className="text text-5xl xl:text-[110.667px] leading-[1.2] md:text-5xl xl:text-6xl xl:leading-snug text-white"
          >
            Be more than a fan!{" "}
          </h1>
          <p
            className="text text-[17px] md:text-2xl leading-normal text-white/90"
          >
            Fanstribe brings together sports enthusiasts around the world. Express your passion, explore, connect and interact with others fans who share interest in the same sport or even support the same team as you.
            Our passion is our driving force and Fanstribe is home to fans of everything sports including football, basketball, baseball, cricket, American football, racing, rugby, tennis, hockey, golf, boxing, etc. 
          </p>
          {/* <p
            className="text text-[17px] md:text-[32px] leading-normal text-white/80"
          >
            Our passion is our driving force and Fanstribe is home to fans of everything sports including football, basketball, baseball, cricket, American football, racing, rugby, tennis, hockey, golf, boxing, etc.
          </p> */}
          <Link
            to="/events"
            className="text font-bold text-white px-8 bg-[#6EE755] py-2 text-lg rounded-[50px] md:text-2xl mt-4 hover:bg-[#6EE755]/75"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </section>
  );
}
