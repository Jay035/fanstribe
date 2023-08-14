import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import Transition from "../components/Transition";
import { db } from "../config/config";
import { toast } from "react-toastify";

export default function JoinOurCommunity() {
  const [nameOfIndividual, setNameOfIndividual] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [favSport, setFavSport] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const communityRef = collection(db, "community-members");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(communityRef, {
        name: nameOfIndividual,
        email: email,
        phoneNo: phoneNo,
        country: country,
        favSport: favSport,
        stateOfResidence: stateOfResidence,
      });
      toast.success(
        "Congratulations, you have submitted the form. You should receive an email soon."
      );
      resetForm();
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
    setFavSport("");
    setStateOfResidence("");
  };

  return (
    <main className="px-[9.5vw] max-w-5xl mx-auto pb-12 h-fit min-h-[90vh] text-center">
      <Transition />
      <h2 className="text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-3">
        Join Our Community
        <span className="p-[3px] text-[1px] ml-[4px] mb-[1px] bg-[#6EE755]"></span>
      </h2>
      <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
        Join the biggest community for sports fans and enjoy access to exclusive
        experiences.
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
                console.log(nameOfIndividual);
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
                console.log(email);
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
              type="number"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => {
                e.preventDefault();
                setPhoneNo(e.target.value);
                console.log(phoneNo);
              }}
              required
            />
          </label>
          <label htmlFor="stateOfResidence" className="flex flex-col gap-3">
            <p>
              State of residence<span className="text-[#F04438]">* </span>
            </p>
            <input
              id="stateOfResidence"
              type="text"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="stateOfResidence"
              value={stateOfResidence}
              onChange={(e) => {
                e.preventDefault();
                setStateOfResidence(e.target.value);
                console.log(stateOfResidence);
              }}
              required
            />
          </label>
        </div>
        <div className="grid lg:grid-cols-2 gap-3 gap-x-8 text-left">
          <label htmlFor="country" className="flex flex-col gap-3">
            <p>
              Country<span className="text-[#F04438]">* </span>
            </p>
            <input
              id="country"
              type="text"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="country"
              value={country}
              onChange={(e) => {
                e.preventDefault();
                setCountry(e.target.value);
                console.log(phoneNo);
              }}
              required
            />
          </label>
          <label htmlFor="fav-sport" className="flex flex-col gap-3">
            <p>
              Favorite sport<span className="text-[#F04438]">*</span>
            </p>
            <input
              id="fav-sport"
              type="text"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="fav-sport"
              value={favSport}
              onChange={(e) => {
                e.preventDefault();
                setFavSport(e.target.value);
                console.log(favSport);
              }}
              required
            />
          </label>
        </div>

        <button
          disabled={
            (nameOfIndividual === "") |
            (email === "") |
            (phoneNo === "") |
            (favSport === "") |
            (country === "") |
            (stateOfResidence === "")
          }
          type="submit"
          className="w-fit mx-auto text-lg text-[#0e200a] font-medium mt-6 bg-[#6de755d0] disabled:bg-[#6de755d0]/50 hover:bg-[#6de755d0]/90 px-12 py-3 rounded-lg"
        >
          Submit form
        </button>
      </form>
    </main>
  );
}
