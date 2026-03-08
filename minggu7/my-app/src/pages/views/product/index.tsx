import styles from "../../produk/product.module.scss";
// import styles from "../../produk/produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk_title}>Daftar Produk</h1>

      <div className={styles.produk_content}>
        {/* {products.map((products: ProductType) => (
          <div key={products.id} className={styles.produk_content_item}>
            <div className={styles.produk_content_item_image}>
              <img src={products.image} alt={products.name} width={200} />
            </div>

            <h4 className={styles.produk_content_item_name}>{products.name}</h4>

            <p className={styles.produk_content_item_category}>{products.category}</p>

            <p className={styles.produk_content_item_price}>Rp {products.price.toLocaleString()}</p>
          </div>
        ))} */}

        <div className={styles.produk_content_skeleton}>
          <div className={styles.produk_content_skeleton_image}></div>
          <div className={styles.produk_content_skeleton_name}></div>
          <div className={styles.produk_content_skeleton_category}></div>
          <div className={styles.produk_content_skeleton_price}></div>
        </div>
      </div>
    </div>
  );
};

export default TampilanProduk;
