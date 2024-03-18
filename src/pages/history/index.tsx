import React from "react";
import { api } from "~/utils/api";

const Lapangan = () => {
  const { data: getHistory } = api.data.getHistory.useQuery();
  return (
    <div>
      History
      <div className="flex flex-row gap-4">
        {getHistory?.map((lapangan) => {
          return (
            <div key={lapangan.id_trans}>
              <p>{lapangan.id_invoice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lapangan;
