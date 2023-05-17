import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const Register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("successfully registered");
      console.log(auth.currentUser);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  return <FormContext.Provider value={{email, password, error, logIn, Register, signInWithGoogle}}>{children}</FormContext.Provider>;
}

export function FormAuth() {
  return useContext(FormContext);
}
