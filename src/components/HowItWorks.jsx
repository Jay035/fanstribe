import userIcon from "../assets/user-icon.svg";
import zap from "../assets/zap.svg";
import briefcase from "../assets/briefcase.svg";

export function HowItWorks() {
  return (
    <div className="mt-4 py-6 px-6 md:px-14 xl:px-[130px]">
      <h2 className="text-3xl leading-[100px] md:leading-[120px] text-[#EAECF0] text-center mb-2">
        HOW IT WORKS{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
      </h2>
      <div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-start md:items-center justify-center py-10 mx-6 rounded-lg">
        {/* card 1 */}
        <div className=" text-center flex items-center flex-col py-8 md:py-0 md:px-8 w-full">
          <img src={zap} alt="" />
          <h2 className="text-white mt-8 mb-2">Explore</h2>
          <p className="text-[#D0D5DD] text-base">
            Explore events and get a ticket
          </p>
        </div>
        {/* card 2 */}
        <div className="text-center flex items-center flex-col w-full py-8 md:py-0 md:px-8 border-t border-[#344054] md:border-t-0 md:border-l">
          <img src={briefcase} alt="" />
          <h2 className="text-white mt-8 mb-2">
            {" "}
            Access our events and activities
          </h2>
          <p className="text-[#D0D5DD] text-base">
            Get access to curated events and have unlimited fun
          </p>
        </div>
      </div>
    </div>
  );
}
