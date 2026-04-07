import { data } from "autoprefixer";
import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>MyApp</div>

      <div className={styles.navbar_right}>
        {session && <span className={styles.navbar_user}>{session.user?.name}</span>}

        {session ? (
          <>
            <button className={`${styles.navbar_button} ${styles["navbar_button-danger"]}`} onClick={() => signOut()}>
              Sign Out
            </button>
          </>
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
