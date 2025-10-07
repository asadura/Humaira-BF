// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CircleSlider from "../components/Circularimg"; // ✅ import your slider
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const CLIENT_URL = import.meta.env.VITE_CLIENT_URL;


// const API_URL = `${BACKEND_URL}/api/initiatives`;

// const AdminInitiatives = () => {
//   const [initiatives, setInitiatives] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     image: null,
//     attachment: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [attachmentPreview, setAttachmentPreview] = useState(null);

//   useEffect(() => {
//     fetchInitiatives();
//     return () => {
//       if (imagePreview) URL.revokeObjectURL(imagePreview);
//     };
//   }, []);

//   const fetchInitiatives = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setInitiatives(res.data);
//     } catch (err) {
//       console.error("Failed to fetch initiatives:", err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     if (!file) return;

//     if (name === "image") {
//       if (imagePreview) URL.revokeObjectURL(imagePreview);
//       setImagePreview(URL.createObjectURL(file));
//     }

//     if (name === "attachment") {
//       setAttachmentPreview(file.name);
//     }

//     setFormData({ ...formData, [name]: file });
//   };

//   const addInitiative = async () => {
//     if (!formData.title || !formData.subtitle || !formData.image) {
//       alert("Please fill Title, Subtitle, and upload Image");
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("subtitle", formData.subtitle);
//       data.append("image", formData.image);
//       if (formData.attachment) data.append("attachment", formData.attachment);

//       await axios.post(API_URL, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setFormData({ title: "", subtitle: "", image: null, attachment: null });
//       setImagePreview(null);
//       setAttachmentPreview(null);
//       fetchInitiatives();
//     } catch (err) {
//       console.error("Failed to add initiative:", err);
//     }
//   };

//   const deleteInitiative = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchInitiatives();
//     } catch (err) {
//       console.error("Failed to delete initiative:", err);
//     }
//   };

//   // ✅ Map initiatives for CircleSlider
//   const sliderProjects = initiatives.map((item) => ({
//     img: item.image, // make sure this is a URL
//     title: item.title,
//   }));

//   return (
//     <section className="min-h-screen bg-gradient-to-r from-[#00111a] via-[#002a40] to-[#00111a] flex flex-col items-center py-12">
//       <h1 className="text-4xl font-bold text-yellow-400 mb-8">
//         Admin – Add Initiatives
//       </h1>

//       {/* Add Form */}
//       <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
//         <input
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Title"
//           className="w-full p-3 rounded bg-gray-900 text-white outline-none"
//         />
//         <input
//           name="subtitle"
//           value={formData.subtitle}
//           onChange={handleChange}
//           placeholder="Subtitle"
//           className="w-full p-3 rounded bg-gray-900 text-white outline-none"
//         />
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="w-full text-gray-200"
//         />
//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt="Preview"
//             className="w-full h-40 object-cover rounded mt-2 border border-yellow-400"
//           />
//         )}
//         <input
//           type="file"
//           name="attachment"
//           onChange={handleFileChange}
//           className="w-full text-gray-200"
//         />
//         {attachmentPreview && (
//           <p className="text-sm text-gray-300 mt-1">📎 {attachmentPreview}</p>
//         )}
//         <button
//           onClick={addInitiative}
//           className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition"
//         >
//           Add Initiative
//         </button>
//       </div>

//       {/* List of Initiatives */}
//       <div className="mt-10 w-full max-w-3xl">
//         <h2 className="text-2xl text-gray-200 mb-4">Current Initiatives</h2>
//         <ul className="space-y-3">
//           {initiatives.map((item) => (
//             <li
//               key={item._id}
//               className="bg-gray-800 p-3 rounded-lg text-gray-300"
//             >
//               <div className="flex justify-between items-center">
//                 <span>
//                   <strong>{item.title}</strong> – {item.subtitle}
//                 </span>
//                 <div className="flex items-center space-x-4">
//                   {item.attachment && (
//                     <a
//                       href={item.attachment}
//                       download={item.attachmentName || "file"}
//                       className="text-yellow-400"
//                     >
//                       Download File
//                     </a>
//                   )}
//                   <button
//                     onClick={() => deleteInitiative(item._id)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               {item.image && (
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-32 object-cover rounded mt-2"
//                 />
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>


      
//     </section>
//   );
// };

// export default AdminInitiatives;
