import React from "react";

export const Login = () => {
  return (
    <div className="w-full h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-4 sm:p-20">
      <div className="bg-white flex sm:flex-row flex-col rounded-lg sm:w-[70%]">
        <div className="flex flex-col items-center justify-center sm:w-[15%]">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
          <button>Sign Up</button>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-[35%]">
          <h1>Create Account</h1>
          <p>Or use your email for registartion</p>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
