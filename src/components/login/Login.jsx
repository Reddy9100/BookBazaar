import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [Otp, setOtp] = useState("");
  const navigate = useNavigate();

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://bookbazaarserver.onrender.com/login", {
        email,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setOtp(response.data.data);
        const emailData = response.data.mail;

        setTimeout(()=>{
          navigate("/otp", { state: { Otp: response.data.data, Email: emailData } });
      },2000)
    }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <Toaster />
        <form
          className=" bg-custom-dark m-6 shadow-lg border-[2px] backdrop-blur-3xl w-full drop-shadow-md border-s-white flex flex-col p-5 rounded justify-around"
          onSubmit={onFormSubmit}
        >
          <h1 className="text-gray-400 text-center">
            Welcome to <span className="text-spotify-accent">Celestia</span>
          </h1>
          <Link to="/login"><h1 className="text-white text-xl font-semibold text-center">
            Login
          </h1></Link>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            required
            className="p-2 text-white mt-6 text-sm bg-slate-400 placeholder:text-white placeholder:text-sm"
            onChange={OnChangeEmail}
          />
          <button
            type="submit"
            className="bg-main text-white rounded-lg w-36 p-2 mt-6"
          >
            Send Otp
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
