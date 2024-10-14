import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie"
const OtpVerify = () => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
const navigate = useNavigate()
  const location = useLocation();
  const { Email } = location.state || {}; // Extract Email from location.state

  const handleChange = (index, value) => {
    if (value.length > 1) return;

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;

    if (value && index < otpDigits.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtpDigits(newOtpDigits);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < otpDigits.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otpDigits.join("");
    console.log("Entered OTP:", enteredOtp);

    try {
      const response = await axios.post("https://bookbazaarserver.onrender.com/validate-otp", {
        enteredOtp, // Send the entered OTP
        Email, // Send the email for validation
      });

      if (response.data.success) {
        toast.success(response.data.message);
        Cookie.set("userToken",response.data.token)
        setTimeout(()=>{
          navigate("/")
      },2000)
      } else {
        toast.error(response.data.message);
        
      }
    } catch (error) {
      toast.error("Invalid Otp");
      
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/resend-otp", {
        email: Email,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.success(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <form
        className="bg-custom-dark m-6 backdrop-blur-3xl p-6 rounded shadow-lg flex flex-col"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-lg mb-4 text-center">
          Enter OTP sent to {Email}
        </h2>

        <div className="flex justify-around">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 rounded-lg backdrop-blur-xl ml-2 h-12 text-center text-2xl border-2 border-spotify-accent bg-slate-400 placeholder:text-white ${
                digit ? "bg-main text-white" : ""
              }`}
              style={{
                borderColor: digit ? "transparent" : "rgba(255, 255, 255, 0.5)",
                backgroundColor: digit ? "black" : "transparent",
              }}
              placeholder=""
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-spotify-accent text-white rounded-lg w-full p-2 mt-6"
        >
          Verify OTP
        </button>

        <br />
        <hr />
        <br />

        <button
          type="button"
          onClick={handleResendOtp} // Call the resend function on click
          className="text-spotify-accent text-center mb-4 w-full"
        >
          Resend OTP?
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
