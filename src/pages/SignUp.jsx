import { Link } from "react-router-dom";
import googleIcon from "../assets/google-icon.png";
import FormValidation from "../formValidation/FormValidation";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
  const {
    email,
    name,
    password,
    loading,
    setName,
    setEmail,
    setError,
    setPassword,
    Register,
    signInWithGoogle,
  } = FormValidation();

  return (
    <>
      <Navbar />
      <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
        <h1 className="text-2xl font-semibold">Create an account</h1>

        {/* <div className="text-red-500 font-medium">error!</div> */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            Register();
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="">
              Name
            </label>

            <input
              id="name"
              type="text"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
                console.log(name);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="">
              Email
            </label>

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
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="password"
              value={password}
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
                console.log(password);
              }}
              required
            />
          </div>
          <button
            disabled={name === "" || email === "" || password === ""}
            type="submit"
            className="w-full mt-6 bg-[#ef5b44] disabled:bg-[#ef5b44]/50 hover:bg-[#ef5b44]/90 text-white px-4 py-2 rounded-lg"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          <p className="opacity-90 text-center font-medium">Or</p>
        </form>
        <button
          onClick={signInWithGoogle}
          className="flex justify-center items-center gap-4 mt-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
        >
          <img src={googleIcon} className="w-6 h-6" alt="google icon" />
          Sign Up With Google
        </button>
        <p className="text-center mt-10">
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold">
            Log in
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
