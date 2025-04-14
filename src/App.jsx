import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Users from "./components/Users";
function App() {
  const [formData, setFormdata] = useState({
    fullname: "",
    password: "",
    confirm: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submithandler = (e) => {
    //form handling, not re-render the page
    e.preventDefault();
    if (formData.password.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }
    if (formData.password !== formData.confirm) {
      setError("Password and confirm password must be same");
      return;
    }
    // THIS IS RIJEX
    if (!/[@#$%^&*()<>,."]/.test(formData.password)) {
      setError("Password must contain any special character");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain any capital letter");
      return;
    }
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      },
    ]);

    // console.log(fullname, email, password, confirm);
    setError("");
    setFormdata({
      fullname: "",
      email: "",
      password: "",
      confirm: "",
    });

    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
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
                required // fill the input field in given box.
                placeholder="Enter your name"
                name="fullname"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={formData.fullname}
                onChange={handleChanges}
              />
              <input
                type="email"
                required
                placeholder="Enter your email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={formData.email}
                onChange={handleChanges}
              />
              <input
                type="password"
                required
                placeholder="Enter Password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={formData.password}
                onChange={handleChanges}
              />
              <input
                type="password"
                required
                placeholder="Confirm Password"
                name="confirm"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={formData.confirm}
                onChange={handleChanges}
              />

              {error && (
                <p className="text-red-600 font-mediun text-sm text-center">
                  {error}
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-violet-600 text-white text-sm-bold px-4 py-2 rounded-md hover:bg-violet-700 transition w-full mt-3"
                >
                  Submit
                </button>
              </div>
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
              {/* <div className="pt-4 text-sm text-center text-gray-500">
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
            </div> */}
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
      {users.map(function (elem, idx) {
        return <Users key={idx} elem={elem} />;
      })}
    </>
  );
}

export default App;
