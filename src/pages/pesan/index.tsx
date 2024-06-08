// import React from "react";
// import { api } from "~/utils/api";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// const Pesan = () => {
//   // interface DataLap {
//   //   id_lapangan: number;
//   //   nama_lapangan: string;
//   //   harga: number;
//   // }

//   const router = useRouter();

//   const { data: sessionData } = useSession();

//   const handlePesan = async (id: number) => {
//     if (!sessionData) {
//       await router.push(`/api/auth/signin?callbackUrl=/formpesan/${id}`);
//     } else {
//       await router.push(`/formpesan/${id}`);
//     }
//   };
//   const { data: Lapangan } = api.data.getLapangan.useQuery();

//   return (
//     <div>
//       <h1>Pesan</h1>
//       <div className="flex flex-row gap-4">
//         {Lapangan?.map((lapangan) => {
//           return (
//             <div key={lapangan.id_lapangan}>
//               <p>{lapangan.nama_lapangan}</p>
//               <Image
//                 src={`/${lapangan.foto}`}
//                 alt={lapangan.nama_lapangan}
//                 height={150}
//                 width={150}
//               />
//               <p>{lapangan.harga}</p>
//               <button onClick={() => handlePesan(lapangan.id_lapangan)}>
//                 Pesan
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Pesan;
