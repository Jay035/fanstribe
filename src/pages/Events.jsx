
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { events } from "../data/data";
import Transition from "../components/Transition";

export default function Events() {
  return (
    <>
      <Navbar />
      <Transition />
      <main className="text-center mt-10 pb-20 px-[9.5vw] h-fit min-h-[90vh]">
        <h2 className="text-center text-3xl md:text-[42px] leading-[100px] tracking-tight capitalize mb-5">
          Our Events{" "}
          <span className="p-[3px] text-[1px] ml-[4px] mb-[1px] bg-[#6EE755]"></span>
        </h2>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {events?.map((event, index) => (
              <a key={index} href={event?.link} className="" target="_blank" >
                <img className="hover:opacity-70" src={event.imgUrl} loading="lazy" alt="event image" />
              </a>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[50vh]">
            <p className="text-2xl md:text-3xl">
              Oops!! There are no events at the moment. Kindly check back later
            </p>
            <button className="mt-8">
              <Link
                to="/"
                className="bg-[#6EE755] hover:bg-[#6EE755]/80 py-2 md:py-3 md:px-6 px-4 text-base text-[#0e200a] rounded-[50px] md:text-xl"
              >
                {" "}
                GO HOME
              </Link>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
