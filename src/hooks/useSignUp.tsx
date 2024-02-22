import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

interface AuthUser {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    email,
    password,
    confirmPassword,
  }: AuthUser) => {
    const success = handleInputErrors({
      fullName,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);
    console.log(fullName, email, password, confirmPassword);
    setLoading(false);
    // try {

    //   const res = await fetch("/api/auth/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       fullName,
    //       email,
    //       password,
    //       confirmPassword,
    //     }),
    //   });

    //   const data = await res.json();
    //   if (data.error) {
    //     throw new Error(data.error);
    //   }
    //   localStorage.setItem("chat-user", JSON.stringify(data));
    //   setAuthUser(data);
    // } catch (error) {
    //   if (error instanceof Error && error.message) {
    //     toast.error(error.message);
    //   } else {
    //     toast.error("An error occurred");
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({
  fullName,
  email,
  password,
  confirmPassword,
}: AuthUser): boolean {
  if (!fullName || !email || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
