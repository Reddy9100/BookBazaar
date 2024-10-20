import axios from "axios";
import React, { useState } from "react";
import login from "../../assets/login.json"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
const Login = () => {
  const[name,setName] = useState("")
  const [email, setEmail] = useState("");
  const[loading,setIsLoading] = useState(false)
  const [Otp, setOtp] = useState("");
  const navigate = useNavigate();

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onNameChange = (e) =>{
    setName(e.target.value)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    
    

    try {
      const response = await axios.post("https://bookbazaarserver.onrender.com/login", {name,email})
      if (response.status === 200) {
        toast.success(response.data.message);
        setOtp(response.data.data);
        localStorage.setItem("bookUser", JSON.stringify({ name : name, email:email }));
        setIsLoading(false)
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
            Welcome to <span className="text-spotify-accent">BookBazaar</span>
          </h1>
          <Lottie animationData={login} className="h-[150px]"/>
          <Link to="/login"><h1 className="text-white mt-2 text-xl font-semibold text-center">
            Login
          </h1></Link>
          <input
          type="text"
          value={name}
          onChange={onNameChange}
          className="p-2 text-white mt-6 text-sm bg-slate-400 placeholder:text-white placeholder:text-sm"
          placeholder="Enter your Name"
          required/>

          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            required
            className="p-2  text-white mt-6 text-sm bg-slate-400 placeholder:text-white placeholder:text-sm"
            onChange={OnChangeEmail}
          />
          {loading ? <button
            type="submit"
            className="bg-main animate-wiggle text-white rounded-lg w-36 p-2 mt-6"
          >
            Sending Otp
          </button> : <button
            type="submit"
            className="bg-main animate-wiggle text-white rounded-lg w-36 p-2 mt-6"
          >
            Send Otp
          </button>}
        </form>
      </div>
    </>
  );
};

export default Login;
