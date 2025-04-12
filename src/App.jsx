import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");

  const submithandler = (e) => {
    //form handling not re-render the page
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full ">
        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Create an account
          </h2>
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <div className="flex items-start space-x-2 text-sm text-gray-600">
              <input type="checkbox" defaultChecked className="mt-1" />
              <label>
                By registering your details, you agree with our{" "}
                <a href="#" className="text-blue-600">
                  Terms & Conditions
                </a>
                , and{" "}
                <a href="#" className="text-blue-600">
                  Privacy and Cookie Policy
                </a>
                .
              </label>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-violet-600 text-white text-sm px-4 py-2 rounded-md hover:bg-violet-700 transition"
              >
                Submit
              </button>
            </div>
            <div className="pt-4 text-sm text-center text-gray-500">
              <a href="#" className="hover:text-blue-600 mx-2">
                Facebook
              </a>
              |
              <a href="#" className="hover:text-blue-600 mx-2">
                LinkedIn
              </a>
              |
              <a href="#" className="hover:text-blue-600 mx-2">
                Google
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
