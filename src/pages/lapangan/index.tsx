// import React from "react";
// import { api } from "~/utils/api";
// import Image from "next/image";

// const Lapangan = () => {
//   const { data: getLap } = api.data.getLapangan.useQuery();
//   return (
//     <div>
//       Lapangan
//       <div className="flex flex-row gap-4">
//         {getLap?.map((lapangan) => {
//           return (
//             <div key={lapangan.id_lapangan}>
//               <p>{lapangan.nama_lapangan}</p>
//               <Image
//                 src={`/${lapangan.foto}`}
//                 alt={lapangan.nama_lapangan}
//                 height={150}
//                 width={150}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Lapangan;
