import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Items } from "../data/data";

export default function Activities() {
  return (
    <>
      <Navbar />
      <main className="text-center mt-10 pb-20 px-6 md:px-12 w-full">
        <h2 className="text-2xl capitalize mb-8 font-medium">
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
