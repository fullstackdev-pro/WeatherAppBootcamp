import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth({ setCheck }: any) {
  // Password validation
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("focus:ring focus:outline-none focus:ring-green-400");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("focus:ring focus:outline-none focus:ring-red-400");
      }
    }
  }, [cPassword, password, isCPasswordDirty]);

  const handleCPassword = (e: any) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  //server
  const [email, setEmail] = useState("");

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  async function Register() {
    if (email && password && password === cPassword) {
      await axios
        .post(`https://reqres.in/api/users`, {
          email: email,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem("weatherAppBootcamp", response.data.id);
          setCheck((prew: boolean) => prew = !prew)
          navigate("/");
        })
        .catch(function (error) {
          console.log(error.response.data);
          navigate("/signup");
        });
    }
  }

  return (
    <div className="bg-blue-400 p-10 pt-[4.5rem] h-[100vh] sm:px-40 md:px-[16rem] lg:px-[23rem] lg:pt-[4rem] xl:px-[30rem] xl:pt-[5.5rem]">
      <form className="p-8 pb-0 border-[1px] border-b-0 bg-white rounded-t-xl">
        <p className="block text-center text-3xl font-semibold">Sign Up</p>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border-[1px] mt-4 py-2 px-3 rounded-sm"
          placeholder="Enter Email"
          required
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          className="w-full border-[1px] mt-4 py-2 px-3 rounded-[4px]"
          placeholder="Enter Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          name="cpassword"
          id="confirmPassword"
          value={cPassword}
          className={`w-full border-[1px] mt-4 py-1 px-3 rounded-[4px] ${cPasswordClass} py-2`}
          placeholder="Confirm Password"
          required
          onChange={handleCPassword}
        />
        {/* Input validate message */}
        {showErrorMessage && isCPasswordDirty ? (
          <div> Passwords did not match </div>
        ) : (
          ""
        )}
        <button
          type={"button"}
          className="my-8 py-2 w-full text-center text-white bg-blue-500 rounded-[4px]"
          onClick={() => {
            Register();
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
