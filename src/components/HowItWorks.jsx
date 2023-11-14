import userIcon from "../assets/user-icon.svg";
import zap from "../assets/zap.svg";
import briefcase from "../assets/briefcase.svg";

export function HowItWorks() {
  return (
    <div className="mt-4 py-6 px-6 md:px-14 xl:px-[130px]">
      <h2 className="text-3xl md:text-[32px] leading-[100px] md:leading-[120px] text-[#EAECF0] text-center mb-2">
        HOW IT WORKS{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
      </h2>
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-start lg:items-center justify-center py-10 mx-6 rounded-lg">
        {/* card 1 */}
        <div className=" text-center flex items-center flex-col py-8 md:py-0 md:px-8 w-full">
          <img src={zap} loading="lazy" alt="" />
          <h2 className="text-white text-2xl mt-8 mb-2">Join</h2>
          <p className="text-[#D0D5DD] text-lg md:text-xl">
            Join our community by filling the membership form
          </p>
        </div>
        {/* card 2 */}
        <div className="text-center flex items-center flex-col w-full py-8 lg:py-0 lg:px-8 border-t border-[#344054] lg:border-t-0 lg:border-l">
          <img src={briefcase} loading="lazy" alt="" />
          <h2 className="text-white text-2xl mt-8 mb-2">
            {" "}
            Access our events and activities
          </h2>
          <p className="text-[#D0D5DD] text-lg md:text-xl">
            Attend monthly meetups in your city, get access to curated
            events and have fun
          </p>
        </div>
      </div>
    </div>
  );
}
