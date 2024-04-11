export default function Contact() {
  return (
    <div
      className="py-24 max-w-5xl mx-auto px-6 md:px-14 xl:px-[130px] text-center"
      id="contact"
    >
      <h2 className="text-3xl md:text-[32px] leading-[100px] md:leading-[120px] text-[#EAECF0] text-center mb-2">
        CONTACT US{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#6EE755]"></span>
      </h2>
      <p className="text-base md:text-xl  text-[#D0D5DD] mb-8">
        For queries, comments, feedback, advertising, business opportunities or
        an interest in becoming part of the Fanstribe team
      </p>
      <a
        href="mailto:support@fanstribe.co"
        className="mb-28 mt-16 border text-center w-fit mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
      >
        Email Us
      </a>
    </div>
  );
}
