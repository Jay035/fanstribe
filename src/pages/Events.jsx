import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { events } from "../data/data";

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="text-center mt-10 pb-20 px-6 md:px-12 h-fit min-h-[90vh]">
        <h2 className="text-2xl capitalize mb-12 font-medium">
          Our Events{" "}
          <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
        </h2>
        {events.length > 0 ? (
          events?.map((event) => <div className=""></div>)
        ) : (
          <div className="flex flex-col justify-center items-center h-[50vh]">
            <p className="text-2xl md:text-3xl">
              Oops!! There are no events at the moment. Kindly check back later
            </p>
            <button className="mt-8">
              <Link
                to="/"
                className="bg-[#EF5B44] hover:bg-[#EF5B44]/80 py-2 px-4 text-base rounded-[50px] md:text-xl"
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

