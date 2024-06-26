import { Link } from "react-router-dom";

export function GetInvolved() {
  return (
    <section className="py-12 px-6 md:px-24 xl:px-20 text-center flex flex-col gap-8">
      <div className="flex flex-col max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[32px] uppercase leading-[100px] text-[#EAECF0] text-center">
          Get Involved{" "}
          <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
        </h2>
        <p className="text-lg md:text-xl text-[#D0D5DD] mb-6">
          We are looking to build fan culture and take fan experiences to a
          different level. Meet other fans, build friendships and have fun as
          well as other perks.
        </p>
        <Link
          to="/activities"
          className="my-10 border text-center w-fit mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
        >
          EXPLORE OUR ACTIVITIES
        </Link>
      </div>
    </section>
  );
}
