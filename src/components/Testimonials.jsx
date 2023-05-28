import img1 from "../assets/testimonial-avatar-1.jpg";
import img2 from "../assets/testimonial-avatar-2.jpg";
import img3 from "../assets/testimonial-avatar-3.jpg";

export function Testimonials() {
  return (
    <section className="text-center pt-12 pb-20 px-6 md:px-14 xl:px-[130px]">
      <h2 className="text-2xl md:text-[32px] uppercase mb-6 leading-[100px] md:leading-[120px]">
        Testimonials{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
      </h2>
      <div className="grid gap-14 lg:gap-10 px-6 lg:grid-cols-3">
        <div className="text-left w-full flex flex-col lg:justify-between gap-6 lg:min-w-[260px]">
          <h2 className=" text-lg lg:text-2xl h-fit">
            “ Fanstribe gives me access to premium experiences as a football
            fan. I’ve been able to meet other fans that support the same team as
            me and I’ve also picked an interest in basketball after watching a
            couple of games. ”
          </h2>
          <div className="flex gap-3 items-center">
            <img
              className="w-14 h-14 object-cover rounded-full "
              src={img3}
              alt="img 1"
              loading="lazy"
            />
            <div className="">
              <h1 className="w-fit text-base">Chukwuebuka </h1>
              <p className="w-fit text-sm">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="text-left w-full lg:min-w-[260px] flex lg:justify-between flex-col gap-6 border-y border-[#344054] py-8 lg:border-y-0 lg:border-x lg:px-8 lg:py-0">
          <h2 className=" text-lg lg:text-2xl h-fit">
            “ Being a fan got more interesting with Fanstribe. I’ve had so much
            fun while connecting and vibing with other fans. ”
          </h2>
          <div className="flex gap-3 items-center">
            <img
              className="w-14 h-14 object-cover rounded-full"
              src={img2}
              alt="img 2"
              loading="lazy"
            />
            <div className="">
              <h1 className="w-fit text-base">Declan</h1>
              <p className="w-fit text-sm">London, UK</p>
            </div>
          </div>
        </div>
        <div className="text-left w-full flex flex-col justify-between gap-6 lg:min-w-[260px]">
          <h2 className=" text-lg lg:text-2xl h-fit">
            “ Fanstribe is all about entertainment. It unites fans in a special
            way and I’m proud to be a part of this unique community. ”
          </h2>
          <div className="flex gap-3 items-center">
            <img
              className="w-14 h-14 object-cover object-top rounded-full"
              src={img1}
              loading="lazy"
              alt="img 3"
            />
            <div className="">
              <h1 className="w-fit text-base">Annabelle</h1>
              <p className="w-fit text-sm">Florida, USA</p>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          “The power of engaging in social activities is real. It’s been a
          roller-coaster and I’m loving it.”
        </div> */}
      </div>
    </section>
  );
}
