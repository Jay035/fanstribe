export default function Donate() {
  return (
    <main className="px-[9.5vw] mb-16 h-fit min-h-[90vh]">
      <h2 className="text-center text-3xl md:text-[42px] leading-[100px] tracking-tight capitalize mb-5">
        Fanstribe Development Fund
        {/* <span className="p-[3px] text-[1px] ml-[4px] mb-[1px] bg-[#6EE755]"></span> */}
      </h2>
      <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
        Thank you for considering supporting us! Your generosity helps us
        continue to provide valuable resources, events, and experiences for
        sports fans. Every contribution, big or small, makes a difference.{" "}
      </p>
      <div className="">
        <h3 className="text-2xl md:text-3xl mb-3 tracking-tight">
          Ways to Donate
        </h3>
        <ol className="text-white/80 list-decimal ml-6 sm:text-lg">
          <li>
            <span className="font-medium">
              One-Time or Recurring Donations:
            </span>{" "}
            Make a one-time or recurring donation to support our initiatives and
            programs.
          </li>
          <li>
            <span className="font-medium">Corporate Sponsorship:</span> Partner
            with us as a corporate sponsor and support our activities.
          </li>
        </ol>
      </div>
      <div className="my-5">
        <h3 className="text-2xl md:text-3xl mb-3 tracking-tight">
          Benefits of Donating
        </h3>
        <ul className="text-white/80 list-disc ml-6 sm:text-lg">
          <li>
            <span className="font-medium">Impact:</span> Your donation directly
            supports our growth, development, and well-being.
          </li>
          <li>
            <span className="font-medium">Recognition</span> We acknowledge our
            donors and sponsors on our website, social media, and at events,
            showcasing your commitment to our cause.
          </li>
        </ul>
      </div>

      <span>
        Your contribution, fuels our mission and empowers us to continue
        providing and creating amazing experiences for sports fans. Thank you
        for your support!
      </span>
      <button className="block mt-8 border w-fit mx-auto border-[#6EE755] bg-[#6de755d0] text-center text-[#0e200a] px-[39.5px] py-[10px] rounded-[50px] hover:bg-transparent hover:text-white"
        >DONATE TODAY</button>
    </main>
  );
}
