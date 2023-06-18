import navlogo from "../assets/logo.png";

export default function Loader() {
  return (
    <div
      id="loader"
      className="animate-pulse flex justify-center items-center min-h-screen bg-[#5eb84c94]"
    >
      {/* <h1 className="text-3xl md:text-5xl">Fanstribe</h1> */}
      <img src={navlogo} alt="logo" loading="lazy" className="w-12" />
    </div>
  );
}
