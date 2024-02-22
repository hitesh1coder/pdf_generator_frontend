import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

interface AuthUser {
  email: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ email, password }: AuthUser) => {
    const success = handleInputErrors({
      email,
      password,
    });
    if (!success) return;

    setLoading(true);
    console.log(email, password);
    setLoading(false);
    // try {
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //
    //       email,
    //       password,
    //           //     }),
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

  return { loading, login };
};
export default useLogin;

function handleInputErrors({ email, password }: AuthUser): boolean {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
