import { useSession } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";

const StatusInvoice = ({ id_invoice }: { id_invoice: string }) => {
  const { data: getStatus } = api.tokenize.getStatus.useQuery({
    order_id: id_invoice,
  }) as { data: { transaction_status: string } };
  console.log(getStatus);
  return getStatus ? (
    <p>Status: {getStatus.transaction_status}</p>
  ) : (
    <p>Loading...</p>
  );
};

const Lapangan = () => {
  // const getcharge = () => {
  //   const url = fetch("https://api.sandbox.midtrans.com/v2/charge", {
  //     body: JSON.stringify({
  //       transaction_details: {
  //         order_id: "20240321-006",
  //       },
  //     }),
  //   });
  // };
  // const { data: sessionData } = useSession();
  const { data: getHistory } = api.data.getHistory.useQuery();
  // const { data: getStatus } = api.tokenize.getStatus.useQuery({
  //   order_id: getHistory?.id_invoice "",
  // })
  // as { data: { status: string } };
  return (
    <div>
      History
      <div className="flex flex-row gap-4">
        {getHistory?.map((lapangan) => {
          return (
            <div key={lapangan.id_trans}>
              <p>{lapangan.id_invoice}</p>
              <StatusInvoice id_invoice={lapangan.id_invoice} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lapangan;
