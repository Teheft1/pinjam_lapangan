// import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { env } from "~/env";

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

const Index = () => {
  const router = useRouter();

  const { data: sessionData } = useSession();
  useEffect(() => {
    if (!sessionData) {
      router.push(`/pesan`).catch((err) => console.error(err));
    }
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey =
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ??
      "SB-Mid-client-47eAjJDhYQ6uYuiF";

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [sessionData, router]);
  const [Pesan, setPesan] = useState({
    Nama: "",
    NoHP: "",
    tanggal: "",
    jam: "",
    durasi: "",
    catatan: "",
  });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { id } = router.query;
  console.log(parseInt(id as string));
  const checkinvoice = api.data.getoneInvoice.useQuery();

  const ids = parseInt(id as string);
  const { data: getlap } = api.post.getlapid.useQuery({
    id: ids,
  });
  // const getToken = api.data.getToken.useQuery();
  // const { data: getTokenize } = api.tokenize.getToken.useQuery({
  //   id_invoice: createInvoice(),
  //   harga: getlap?.harga,
  // });
  const addPesan = api.post.createPesan.useMutation();
  // console.log(getTokenize);
  const invoice = createInvoice();
  const { data: getTokenize } = api.tokenize.getToken.useQuery({
    id_invoice: invoice,
    harga: getlap?.harga ?? 0,
  });

  const handlepesan = (e: React.FormEvent) => {
    const invoice = createInvoice();

    // console.log(invoice)
    e.preventDefault();
    addPesan.mutate(
      {
        id_lapangans: ids,
        catatan: Pesan.catatan,
        jam: Pesan.jam,
        durasi: Pesan.durasi,
        subtotal: getlap?.harga ?? 0,
        grand_total: getlap?.harga ?? 0,
        id_invoice: invoice,
      },
      {
        onError: (err) => {
          console.log(err);
        },
        onSuccess: () => {
          window.snap.pay(getTokenize ?? "");
          // router.push(`/pesan`).catch((err) => console.error(err));
        },
      },
    );

    setPesan({
      Nama: "",
      NoHP: "",
      tanggal: "",
      jam: "",
      durasi: "",
      catatan: "",
    });
  };

  function createInvoice() {
    // const checkinvoice = api.data.getoneInvoice.useQuery();
    const date = new Date();
    const strdate = date.toISOString().split("T")[0]?.replace(/-/g, "");
    let kode;
    const nosplit = checkinvoice?.data?.id_invoice.split("-")[1];
    console.log(nosplit);
    if (nosplit) {
      kode = (parseFloat(nosplit) + 1).toString().padStart(3, "0");
    } else {
      kode = "001";
    }

    const invoice = strdate + "-" + kode;

    return invoice;
  }
  return (
    <form>
      <div>
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          id="nama"
          // value={Pesan.Nama}
          onChange={(e) => setPesan({ ...Pesan, Nama: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="no_hp">No Hp</label>
        <input
          type="number"
          id="no_hp"
          // value={Pesan.NoHP}
          onChange={(e) => setPesan({ ...Pesan, NoHP: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="tanggal">Tanggal</label>
        <input
          type="date"
          id="tanggal"
          // value={Pesan.tanggal}
          onChange={(e) => setPesan({ ...Pesan, tanggal: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="jam">Jam</label>
        <input
          type="time"
          id="jam"
          // value={Pesan.jam}
          onChange={(e) => setPesan({ ...Pesan, jam: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="durasi">Durasi</label>
        <input
          type="number"
          id="durasi"
          // value={Pesan.durasi}
          onChange={(e) => setPesan({ ...Pesan, durasi: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="catatan">Catatan</label>
        <input
          type="text"
          id="catatan"
          // value={Pesan.catatan}
          onChange={(e) => setPesan({ ...Pesan, catatan: e.target.value })}
        />
      </div>
      <button type="submit" onClick={handlepesan}>
        Submit
      </button>
    </form>
  );
};

export default Index;
