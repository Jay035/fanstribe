import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import friends from "../assets/friends.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>
        <div className="px-6 sm:px-14 md:px-20 xl:px-[270px] mb-8">
          <section>
            <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
              About Us
              <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
            </h2>
            <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
              The game has changed and the fans want more. Sports is a culture,
              a tradition that have become part of human existence and one that
              keeps evolving which is why fans keep adapting to enjoy the best
              experiences. Fans want to explore, get access to more content and
              action. Fanstribe gives fans a platform to enjoy their favorite
              sport, support their favorite teams and athletes while connecting
              with millions of fans just like them across the globe.
            </p>
          </section>
          <section>
            <img src={friends} alt="friends laughing" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
