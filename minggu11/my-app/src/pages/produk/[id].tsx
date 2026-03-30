import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";

const HalamanProduk = () => {
  const { query, isReady } = useRouter();

  const { data, error, isLoading } = useSWR(query.id ? `/api/produk/${query.id}` : null, fetcher);

  console.log("ID:", query.id);
  console.log("DATA:", data);

  if (!isReady || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <DetailProduk products={data?.data} />
    </div>
  );
};

export default HalamanProduk;
