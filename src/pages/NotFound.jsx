import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center px-6 md:px-12 h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-6xl capitalize mb-8 font-medium flex items-center justify-center gap-4 md:text-8xl">
        4{" "}
        <span className="w-14 h-14 md:w-24 md:h-24 inline-block border border-white rounded-full shadow-2xl shadow-[#EF5B44]"></span>{" "}
        4
      </p>
      <p className="text-base md:text-xl">
        This page doesn't exist.{" "}
        <Link to="/" className="text-[#EF5B44] tracking-wide">
          GO HOME
        </Link>
      </p>
    </div>
  );
}
