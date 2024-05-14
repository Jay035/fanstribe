import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import Contact from "../components/Contact";
import { GetInvolved } from "../components/GetInvolved";
import asset1 from "../assets/img-5.jpg";
import asset2 from "../assets/img-2.jpg";
import asset3 from "../assets/img-3.jpg";
import asset4 from "../assets/img-6.jpg";
import { Power3, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "firebase/database";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../config/config";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const [userEmail, setUserEmail] = useState("");
  const usersEmailRef = collection(db, "newsletter-subscription");

  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersEmailRef, { email: userEmail });
      toast.success("Congratulations, you have subscribed to our newsletter");
      setUserEmail("");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  useGSAP(() => {
    // const splitTypes = document.querySelectorAll(".reveal_type");

    // splitTypes.forEach((char, i) => {
    //   const text = new SplitType(char, { type: "char" });

    //   gsap.from(text.chars, {
    //     scrollTrigger: {
    //       trigger: char,
    //       start: "top 80%",
    //       end: "bottom 20%",
    //       scrub: true,
    //       markers: false,
    //     },
    //     scaleY: 0,
    //     y: -10,
    //     transformOrigin: "top",
    //     stagger: 0.1,
    //     duration: 2
    //   });
    // });

    // gsap.from(".benefit_text", {
    //   opacity: .2
    // })

    gsap.from(".text", {
      duration: 1,
      opacity: 0.3,
      scaleY: 0,
      y: -10,
      transformOrigin: "top",
      stagger: 0.4,
      ease: Power3,
    });

    gsap.from(".hero_subtext", {
      delay: 0.5,
    });

  });
  useGSAP(() => {

    let panels = gsap.utils.toArray(".card").forEach((wrapper, i) => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: '+=500',
        markers: true,
        snap: 1,
      });

      gsap.from(wrapper.children, {
        // scale: "1.1",
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
          end: "top top",
          toggleActions: "play none reverse reset",
        },
      });
    });
  })

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".card").forEach((wrapper, i) => {
  //       ScrollTrigger.create({
  //         trigger: wrapper,
  //         start: "top top",
  //         pin: true,
  //         pinSpacing: false,
  //         // end: '+=600',
  //         // snap: 1,
  //       });
  //       gsap.from(wrapper.children, {
  //         scale: "1.1",
  //         ease: Power3.easeOut,
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top center",
  //           end: "top top",
  //           toggleActions: "play none reverse reset",
  //         },
  //       });
  //     });
  //   }, container);
  //   return () => ctx.revert();
  // }, []);
  return (
    <main className="flex flex-col gap-6">
      <HeroSection />
      <section
        ref={container}
        className="text-center overflow-hidden py-6 sm:py-14 mx-auto "
      >
        <div className="px-[9.5vw] mb-20">
          <h2 className="text-3xl lg:text-[64px] leading-[100px] md:leading-[120px] text-[#EAECF0] capitalize mb-2">
            Bringing Fans Together{" "}
            <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
          </h2>
          <p className="text-[#D0D5DD] text-lg lg:text-2xl mb-8">
            Connect with sports fans across the globe who share the same passion
            and interests as you. Stay updated with the latest sports news,
            attend events in your area, connect, party, enjoy live match viewing
            experiences, play games, banter and enjoy being a fan at a premium
            level.{" "}
          </p>
        </div>

        <div className="card card_2">
          <img
            className="h-screen object-cover w-full object-center"
            src={asset1}
            alt="people having fun"
          />
        </div>
        <div className="card card_3">
          <img
            className="h-screen object-cover w-full object-center"
            src={asset2}
            alt="people having fun"
          />
        </div>
        <div className="card card_4">
          <img
            className="h-screen object-cover w-full object-center"
            src={asset3}
            alt="people having fun"
          />
        </div>
      </section>

      {/* What you get */}
      <Benefits />

      {/* Our events & activities */}
      {/* <div className="px-6 md:px-24 mb-28 "> */}

      {/* <Link
          to="/activities"
          className="mb-28 mt-16 border text-center w-fit mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
        >
          EXPLORE OUR ACTIVITIES
        </Link> */}
      {/* </div> */}

      {/* How it works */}
      {/* <HowItWorks /> */}
      {/* Get Involved */}
      <GetInvolved />

      {/* Testimonials */}
      <Testimonials />

      <form onSubmit={submitEmail} className="pt-28 px-[9.5vw] text-center">
        <h2 className="text-center text-3xl md:text-[42px] md:leading-[100px] tracking-tight capitalize mb-6">
          Subscribe to our newsletter!
        </h2>
        <p className="text-base md:text-xl text-[#D0D5DD] mb-6">
          Get refreshing updates from Fanstribe delivered to your inbox
        </p>
        <input
          type="email"
          value={userEmail}
          id="email"
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Your email address"
          className=" w-full max-w-[360px] mx-auto outline-none text-[#475467] placeholder:text-[#475467] bg-[#FEF3F2] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)] px-[14px] py-2 md:py-3 rounded-lg"
        />
        <button
          type="submit"
          disabled={userEmail === ""}
          className="px-[62.5px] block w-fit text-[#0e200a] mx-auto bg-[#6EE755] rounded-[30px] py-3 mt-8 shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)]"
        >
          Subscribe
        </button>
      </form>
      <Contact />
    </main>
  );
}
