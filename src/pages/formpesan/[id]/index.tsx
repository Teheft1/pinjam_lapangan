// import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";
import { date } from "zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  const { data: sessionData } = useSession();
  useEffect(() => {
    if (!sessionData) {
      router.push(`/pesan`).catch((err) => console.error(err));
    }
  }, [sessionData, router]);
  // if (!sessionData) {
  //   router.push(`/pesan`).catch((err) => console.error(err));
  // }
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

  const ids = parseInt(id as string);
  const { data: getlap } = api.post.getlapid.useQuery({
    id: ids,
  });

  const addPesan = api.post.createPesan.useMutation();

  const handlepesan = (e: React.FormEvent) => {
    const invoice = createInvoice();
    console.log(invoice);
    e.preventDefault();
    addPesan.mutate({
      id_lapangans: ids,
      catatan: Pesan.catatan,
      jam: Pesan.jam,
      durasi: Pesan.durasi,
      subtotal: getlap?.harga ?? 0,
      grand_total: getlap?.harga ?? 0,
      id_invoice: invoice,
    });

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
    const date = new Date();
    const strdate = date.toISOString();
    const strdate2 = strdate.replace(/:/g, "-");

    return strdate2;
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
