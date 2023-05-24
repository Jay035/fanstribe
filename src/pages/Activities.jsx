import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Items } from "../data/data";
import Transition from "../components/Transition";

export default function Activities() {
  return (
    <>
      <Navbar />
      <Transition />
      <main className="text-center mt-10 pb-20 px-[9.5vw] w-full">

        <h2 className="text-center text-3xl md:text-[42px] leading-[100px] tracking-tight capitalize mb-5">
          Our activities{" "}
          <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
        </h2>
        <section className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {Items?.map((item, index) => (
            <div key={index} className="relative max-w-sm mx-auto">
              <img
                className="min-h-[240px] max-h-[250px] mx-auto w-[340px] object-center object-cover"
                src={item.imgUrl}
                alt={item.title}
              />
              <div className="mt-3 text-white">
                <h1 className="text-2xl">{item.title}</h1>
              </div>
            </div>
          ))}
        </section>
        
      </main>
      <Footer />
    </>
  );
}
