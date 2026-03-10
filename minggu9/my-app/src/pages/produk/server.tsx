import TampilanProduk from "../views/product";
import { ProductType } from "../types/Product.type";
// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
// };

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses
// dan akan mengambil data produk dari API sebelum halaman dirender.

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  // console.log("Data produk yang diambil dari API:", response);

  return {
    props: {
      products: response.data,
    },
  };
}
