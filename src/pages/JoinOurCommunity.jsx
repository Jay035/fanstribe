import { useEffect, useRef, useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../config/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function JoinOurCommunity() {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameOfIndividual, setNameOfIndividual] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("Abuja");
  const [country, setCountry] = useState("");
  const dropdownRef = useRef(null);
  const communityRef = collection(db, "community-members");

  const locations = [
    {
      id: 1,
      state: "Abuja",
    },
    {
      id: 2,
      state: "Lagos",
    },
    {
      id: 3,
      state: "Port Harcourt",
    },
    {
      id: 4,
      state: "Owerri",
    },
    {
      id: 5,
      state: "Aba",
    },
  ];

  const handleOptionClick = (value) => {
    setLocation(value);
    setIsDropDownOpen(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(communityRef, {
        name: nameOfIndividual,
        email: email,
        phoneNo: phoneNo,
        location: location,
        country: country,
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      // toast.success(
      //   "Congratulations, you have submitted the form. You should receive an email soon."
      // );
      window.scrollTo(0, 0);
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const resetForm = () => {
    setNameOfIndividual("");
    setEmail("");
    setPhoneNo("");
    setCountry("");
  };

  return (
    <main className="flex justify-center items-center px-[9.5vw] max-w-5xl mx-auto pb-12 h-fit min-h-[90vh] text-center">
      {isSubmitted ? (
        <div className="bg-green-200 p-4 rounded-md ">
          <p className="text-green-800 font-bold">
            Success! You've joined the community.
          </p>
        </div>
      ) : (
        <div className="">
          <h2 className="text-3xl md:text-[42px] md:leading-[120px] tracking-tight capitalize mb-3">
            Join Our Community
            <span className="p-[3px] text-[1px] ml-[4px] mb-[1px] bg-[#6EE755]"></span>
          </h2>
          <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
            Join the biggest community for sports fans and enjoy access to
            exclusive experiences.
          </p>
          <form
            className="flex flex-col justify-center gap-4"
            onSubmit={submitForm}
          >
            <div className="grid lg:grid-cols-2 gap-3 gap-x-8 text-left">
              <label htmlFor="name" className="flex flex-col gap-2">
                <p>
                  Name<span className="text-[#F04438]">* </span>
                </p>
                <input
                  id="name"
                  type="text"
                  className=" border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
                  name="name"
                  value={nameOfIndividual}
                  onChange={(e) => {
                    e.preventDefault();
                    setNameOfIndividual(e.target.value);
                  }}
                  required
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-3">
                <p>
                  Email<span className="text-[#F04438]">* </span>
                </p>

                <input
                  id="email"
                  type="email"
                  className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  required
                />
              </label>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 gap-x-8 text-left">
              <label htmlFor="phoneNo" className="flex flex-col gap-3">
                <p>
                  Phone No<span className="text-[#F04438]">* </span>
                </p>
                <input
                  id="phoneNo"
                  type="text"
                  className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={(e) => {
                    e.preventDefault();
                    setPhoneNo(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="country" className="flex flex-col gap-3">
                <p>
                  Location<span className="text-[#F04438]">* </span>
                </p>
                <div className="cursor-pointer relative border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg pl-2 py-1 h-[33.3px] ">
                  <div className="relative">
                    <h3
                      onClick={() => {
                        setIsDropDownOpen(!isDropDownOpen);
                        console.log("clicked", isDropDownOpen);
                      }}
                      className="font-normal"
                    >
                      {location}
                    </h3>
                    <svg
                      className={`absolute top-0 right-1 transition-transform ${
                        isDropDownOpen && "rotate-180"
                      }`}
                      width="28"
                      height="28"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#A0A0AB"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isDropDownOpen && (
                    <ul className="absolute top-10 left-0 w-full text-white bg-[#1a1a1a] rounded-lg flex flex-col gap-1 py-2">
                      {locations?.map((option) => (
                        <li
                          key={option?.id}
                          className={`px-3 py-1 cursor-pointer ${
                            location === option?.state && "bg-white/10"
                          }`}
                          onClick={() => {
                            handleOptionClick(option.state);
                            // setIsDropDownOpen((prevState) => !prevState);
                          }}
                        >
                          {option.state}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </label>
            </div>
            <label
              htmlFor="country"
              className="flex flex-col items-start gap-3"
            >
              <p>
                Country<span className="text-[#F04438]">* </span>
              </p>
              <input
                id="country"
                type="text"
                className="border w-full outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
                name="country"
                value={country}
                onChange={(e) => {
                  e.preventDefault();
                  setCountry(e.target.value);
                }}
                required
              />
            </label>

            <button
              disabled={
                (nameOfIndividual === "") |
                (email === "") |
                (phoneNo === "") |
                (location === "") |
                (country === "")
              }
              type="submit"
              className="w-fit mx-auto text-lg text-[#0e200a] font-medium mt-6 bg-[#6de755d0] disabled:bg-[#6de755d0]/50 hover:bg-[#6de755d0]/90 px-8 sm:px-12 py-2 sm:py-3 rounded-lg"
            >
              Submit form
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
