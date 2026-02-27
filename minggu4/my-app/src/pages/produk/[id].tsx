import { useRouter } from "next/router";

const HalamanProduk = () => {
  // const router = useRouter();
  // console.log(router);
  const { query } = useRouter();
  console.log(query);
  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      <h1>Halaman Produk</h1>
      <p>Produk: {query.id}</p>
    </div>
  );
};

// const HalamanProduk = () => {
//   const router = useRouter();
//   console.log(router);
//   // const { query } = useRouter();
//   // console.log(query);
//   return (
//     <div style={{ minHeight: "100vh", padding: "20px" }}>
//       <h1>Halaman Produk</h1>
//       <p>Produk</p>
//     </div>
//   );
// };
export default HalamanProduk;
