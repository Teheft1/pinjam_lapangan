import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const Index = () => {
  // if (router.isFallback){
  //   return <div>loading ...</div>
  // }
  // const { id } = useParams<{ id: string }>();
  // console.log(parseInt(id));

  // const ids = parseInt(id);
  // const { data: getlap } = api.post.getlapid.useQuery({
  //   id: ids,
  // });

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { id } = router.query;
  console.log(parseInt(id as string));

  const ids = parseInt(id as string);
  const { data: getlap } = api.post.getlapid.useQuery({
    id: ids,
  });

  function handlepesan() {
    const addPesan = api.post.createPesan.useQuery({
      id_lapangan: ids,
      catatan: "galo",
      jam: new Date(),
      durasi: new Date(),
      subtotal: getlap?.harga ?? 0,
      grand_total: getlap?.harga ?? 0,
      id_invoice: "asdadw",
    });
  }

  return (
    <form>
      <div>
        <label htmlFor="nama">Nama</label>
        <input type="text" id="nama" />
      </div>
      <div>
        <label htmlFor="no_hp">No Hp</label>
        <input type="text" id="no_hp" />
      </div>
      <div>
        <label htmlFor="tanggal">Tanggal</label>
        <input type="date" id="tanggal" />
      </div>
      <div>
        <label htmlFor="jam">Jam</label>
        <input type="time" id="jam" />
      </div>
      <div>
        <label htmlFor="durasi">Durasi</label>
        <input type="number" id="durasi" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Index;
