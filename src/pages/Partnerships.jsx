import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import img from "../assets/partnership.jpg";
import Transition from "../components/Transition";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Transition />
      <main>
        <div className="px-6 sm:px-14 md:px-20 xl:px-[270px] mb-8">
          <section>
            <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
              Partnerships
              <span className="p-[3px] text-[1px] ml-[4px] mb-[1px] bg-[#6EE755]"></span>
            </h2>
            <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
              We look to work with brands that would like to partner or provide
              sponsorship to drive our vision of uniting sports fans across the
              world. Send an email to {" "}
              <a href="mailto:partnerships@fanstribe.co" className="font-bold">
                partnerships@fanstribe.co
              </a>{" "}
              and we’ll be glad to have you on board.
            </p>
          </section>
          <section>
            <img src={img} loading="lazy" alt="friends laughing" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
