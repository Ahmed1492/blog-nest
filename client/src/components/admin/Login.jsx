import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md-6 border border-[#bdb8f2] shadow-xl shadow-[#bbb7ef] rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="email"
                required
                placeholder="your email id"
                value={userData.email}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="password"
                required
                placeholder="your Password"
                value={userData.password}
              />
            </div>
            <button
              className="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer  transition-all"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
