import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Script from "next/dist/client/script";
// import Script from "next/script";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbar_brand}>MyApp</div> */}

      <div className={styles.navbar_brand} id="title"></div>

      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = "MyApp"; `}
      </Script>

      <div className={styles.navbar_right}>
        {session && (
          <div className={styles.navbar_user}>
            <span>Welcome, {session.user?.name}</span>

            {session.user?.image && <Image width={50} height={50} src={session.user.image} alt={session.user.name || "User"} className={styles.navbar_user_image} />}
            {/* {session.user?.image && <img src={session.user.image} alt={session.user.name || "User"} className={styles.navbar_user_image} />} */}
          </div>
        )}

        {session ? (
          <button className={`${styles.navbar_button} ${styles["navbar_button-danger"]}`} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={`${styles.navbar_button} ${styles["navbar_button-primary"]}`} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
