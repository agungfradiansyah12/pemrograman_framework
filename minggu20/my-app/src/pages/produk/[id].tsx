import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  {
    /digunakan client-side rendering/;
  }
  // // const Router = useRouter();
  // // console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(`/api/products/${query.id}`, fetcher);
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

{
  /digunakan server-side rendering/;
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.id}`);
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      product: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}

// {
//   /digunakan static-site generation/;
// }

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/produk");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       id: String(product.id), // WAJIB string & nama harus "id"
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
