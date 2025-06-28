// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";


// function App() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/profile")
//       .then((response) => {
//         setProfile(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-sky-300 via-cyan-200 to-emerald-200 flex items-center justify-center p-6">
//       <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-extrabold text-emerald-600">👩‍💻 Project Saya</h1>

//         </div>

//         {loading ? (
//           <div className="text-center text-gray-500">Sedang memuat data...</div>
//         ) : profile ? (
//           <div className="space-y-4">
//             <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-xl shadow-sm">
//               <span className="font-medium text-gray-700">📛 Nama</span>
//               <span className="text-gray-900 font-semibold">{profile.name}</span>
//             </div>
//             <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-xl shadow-sm">
//               <span className="font-medium text-gray-700">🎓 NIM</span>
//               <span className="text-gray-900 font-semibold">{profile.nim}</span>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center text-red-500">Ups! Gagal mengambil data.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/profile")
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-yellow-600 flex items-center justify-center px-4 py-8">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md transition-transform duration-300 hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">📘 Profil Mahasiswa</h1>
          <p className="text-blue-600 mt-2 text-sm">Web Programming STMIK Widya Utama</p>
        </div>

       <div className="space-y-5">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg flex justify-between items-center">
            <span className="text-blue-700 font-medium">Nama</span>
            <span className="font-semibold text-gray-800">Amal Subekti</span>
          </div>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg flex justify-between items-center">
            <span className="text-green-700 font-medium">NIM</span>
            <span className="font-semibold text-gray-800">STI202202787</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
