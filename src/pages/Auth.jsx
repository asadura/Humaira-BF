// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Nav from "../components/Navbar";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// // ✅ Firebase Config (your project settings)
// const firebaseConfig = {
//   apiKey: "AIzaSyDu4S8QUalEE19i3q0-Qbqn6Xk64Lfnsck",
//   authDomain: "humera-df.firebaseapp.com",
//   projectId: "humera-df",
//   storageBucket: "humera-df.appspot.com",   // ✅ fixed bucket
//   messagingSenderId: "611369374019",
//   appId: "1:611369374019:web:0ee48cd8cfee21bbfe9ff6",
//   measurementId: "G-72R9SYJMEL"
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default function Auth() {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   // ✅ Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("userEmail", user.email);
//       localStorage.setItem("userAvatar", user.photoURL);

//       toast.success("Logged in with Google!");
//       setTimeout(() => navigate("/Home"), 2000);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // ✅ Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // ✅ Submit (Register / Login via Firebase)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     const validationErrors = {};

//     if (!form.email) validationErrors.email = "Email is required";
//     if (!form.password) validationErrors.password = "Password is required";

//     if (!isLogin) {
//       if (!form.username) validationErrors.username = "Username is required";
//       if (!form.confirmPassword)
//         validationErrors.confirmPassword = "Confirm your password";
//       if (form.password !== form.confirmPassword) {
//         validationErrors.confirmPassword = "Passwords do not match";
//       }
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       if (isLogin) {
//         // ✅ Firebase Login
//         await signInWithEmailAndPassword(auth, form.email, form.password);
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("userEmail", form.email);
//         toast.success("Logged in successfully!");
//       } else {
//         // ✅ Firebase Register
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           form.email,
//           form.password
//         );
//         await updateProfile(userCredential.user, {
//           displayName: form.username,
//         });
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("userEmail", form.email);
//         toast.success("Account created successfully!");
//       }

//       // ✅ Redirect (admin check optional)
//       if (form.email.toLowerCase() === "admin@gmail.com") {
//         setTimeout(() => navigate("/admin"), 2000);
//       } else {
//         setTimeout(() => navigate("/Home"), 2000);
//       }
//     } catch (error) {
//       toast.error(error.message || "Something went wrong");
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <div className="h-screen w-screen bg-cover bg-center login-img flex items-center justify-center">
//         <div className="bg-black/40 h-auto min-h-screen w-screen relative flex items-center justify-center px-4">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="border border-amber-100 backdrop-blur-md bg-white/10 shadow-2xl p-8 mt-44 rounded-2xl w-full max-w-md"
//           >
//             <h1 className="text-white text-4xl font-bold text-center mb-8">
//               {isLogin ? "Login" : "Sign Up"}
//             </h1>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {!isLogin && (
//                 <div>
//                   <input
//                     type="text"
//                     name="username"
//                     value={form.username}
//                     onChange={handleChange}
//                     placeholder="Username"
//                     className="w-full p-3 rounded-md bg-white/80 text-black placeholder-gray-500 border border-gray-500"
//                   />
//                   {errors.username && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.username}
//                     </p>
//                   )}
//                 </div>
//               )}

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full p-3 rounded-md bg-white/80 text-black placeholder-gray-500 border border-gray-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   className="w-full p-3 rounded-md bg-white/80 text-black placeholder-gray-500 border border-gray-500"
//                 />
//                 <div
//                   className="absolute top-5 right-3 text-gray-600 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//                 )}
//               </div>

//               {!isLogin && (
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     value={form.confirmPassword}
//                     onChange={handleChange}
//                     placeholder="Confirm Password"
//                     className="w-full p-3 rounded-md bg-white/80 text-black placeholder-gray-500 border border-gray-500"
//                   />
//                   {errors.confirmPassword && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.confirmPassword}
//                     </p>
//                   )}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="w-full py-3 bg-blue-600 rounded-lg font-semibold text-lg text-white hover:bg-blue-700 transition duration-300"
//               >
//                 {isLogin ? "Log In" : "Sign Up"}
//               </button>
//             </form>

//             {/* Google Login */}
//             <div className="mt-6">
//               <button
//                 onClick={handleGoogleLogin}
//                 className="w-full py-3 flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-white text-black hover:bg-gray-100 transition"
//               >
//                 <img
//                   src="https://www.svgrepo.com/show/355037/google.svg"
//                   alt="Google"
//                   className="w-5 h-5"
//                 />
//                 Continue with Google
//               </button>
//             </div>

//             <div className="text-center mt-4 text-white">
//               {isLogin ? (
//                 <>
//                   Don’t have an account?{" "}
//                   <button
//                     onClick={() => setIsLogin(false)}
//                     className="text-green-400 hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   Already have an account?{" "}
//                   <button
//                     onClick={() => setIsLogin(true)}
//                     className="text-blue-400 hover:underline"
//                   >
//                     Log In
//                   </button>
//                 </>
//               )}
//             </div>
//             <ToastContainer />
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }
