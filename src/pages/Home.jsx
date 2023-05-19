import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import Contact from "../components/Contact";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { GetInvolved } from "../components/GetInvolved";
import asset1 from "../assets/img-1.jpg";
import asset2 from "../assets/img-2.jpg";
import asset3 from "../assets/img-3.jpg";
import asset4 from "../assets/img-4.jpg";
import { Power3, gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".card").forEach((wrapper, i) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "top top",
          pin: true,
          pinSpacing: false,
          // end: '+=600',
          // snap: 1,
        });
        gsap.from(wrapper.children, {
          scale: "1.1",
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "top top",
            toggleActions: "play none reverse reset",
          },
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Navbar />
      <main className="home flex flex-col gap-6">
        <HeroSection />
        <section ref={container} className="text-center overflow-hidden py-6 sm:py-14 mx-auto grid gap-16 lg:gap-20">
          <div className="px-[9.5vw]">
            <h2 className="text-3xl lg:text-[64px] leading-[100px] md:leading-[120px] text-[#EAECF0] capitalize mb-2">
              Bringing Fans Together{" "}
              <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
            </h2>
            <p className="text-[#D0D5DD] text-lg lg:text-2xl mb-8">
              Connect with sports fans across the globe who share the same
              passion and interests as you. Get access to curated events where
              you connect, chill and socialize with other fans. Find events in
              your area, connect, party, enjoy live match viewing experiences,
              play games, banter and enjoy being a fan at a premium level.
            </p>
          </div>

          {/* <div className="card card_1">
            <img
              className="h-screen object-cover w-full "
              src={asset4}
              alt="people having fun"
            />
          </div> */}
          {/* <div className="card card_2">
            <img
              className="h-screen object-cover w-full object-center"
              src={asset1}
              alt="people having fun"
            />
          </div> */}
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
        <HowItWorks />
        {/* Get Involved */}
        <GetInvolved />

        {/* Testimonials */}
        <Testimonials />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="pt-28 px-6 md:px-14 xl:px-[130px] text-center"
        >
          <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
            Subscribe to our newsletter!
          </h2>
          <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
            Get news and updates delivered to your mailbox.
          </p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address"
            className="w-[360px] mx-auto outline-none text-[#475467] placeholder:text-[#475467] bg-[#FEF3F2] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)] px-[14px] py-3 rounded-lg"
          />
          <button
            type="submit"
            className="px-[62.5px] block w-fit text-[#0e200a] mx-auto bg-[#6EE755] rounded-[30px] py-3 mt-8 shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)]"
          >
            Subscribe
          </button>
        </form>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
