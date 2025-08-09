import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import registerAnime from "../../assets/lottie-react/register-anime.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser, googleLogin, setUser, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [errroMessage, setErrorMessage] = useState("");

  // Register User

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    // Validate Passowrd //
    const lowerCaseExp = /(?=.*[a-z])/;
    const upperCaseExp = /(?=.*[A-Z])/;
    const lengthExp = /.{6,}/;
    if (lowerCaseExp.test(password) === false) {
      setErrorMessage("Must have a Lowercase letter in the password!");
      return;
    } else if (upperCaseExp.test(password) === false) {
      setErrorMessage("Must have an Uppercase letter in the password!");
      return;
    } else if (lengthExp.test(password) === false) {
      setErrorMessage("Length must be at least 6 character in the password");
      return;
    }

    registerUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            // add user to db

            axios
              .post("https://talkademic-server.vercel.app/users", {
                email: user.email,
                role: 'user'
              })
              .then(() => {
                // console.log(res.data);
                toast.success("Regestered in successfully");
              });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.code);
      });
  };

  // Google Log in

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Logged in successfully");

        const user = res.user;
        // add user to db
        axios
          .post("https://talkademic-server.vercel.app/google-user", {
          email: user.email,
            role: 'user'
          })
          .then(() => {
            // console.log(res.data);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center flex-col lg:gap-20 lg:flex-row-reverse items-center my-16">
      <div className="text-center lg:text-left md:w-[40%]">
        <Lottie animationData={registerAnime} loop={true} />
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body w-full">
          <h2 className="text-3xl font-bold text-center py-5">Register now!</h2>
          <button
            onClick={handleGoogleLogin}
            className="btn rounded px-5 py-2.5 overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] text-base-100 hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300 border-[#e5e5e5]"
          >
            <span className="bg-white p-1 rounded-full">
              {" "}
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
            </span>
            Login with Google
          </button>
          <div className="divider">OR</div>
          <form className="fieldset" onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name"
              name="name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Photo URL"
              name="photo"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={`${showPass ? "text" : "password"}`}
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-3 md:right-6"
              >
                {" "}
                {showPass ? (
                  <FaEyeSlash size={18} className="text-gray-500"></FaEyeSlash>
                ) : (
                  <FaEye size={18} className="text-gray-500"></FaEye>
                )}
              </button>
            </div>
            <p className="text-red-500">{errroMessage}</p>
            <button
              type="submit"
              className="rounded mt-5 px-5 py-2.5 text-center text-white overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300 text-sm"
            >
              <Link>Register</Link>
            </button>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-500">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
