import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>MyApp</div>

      <div className={styles.navbar_right}>
        {session && (
          <div className={styles.navbar_user}>
            <span>Welcome, {session.user?.name}</span>

            {session.user?.image && <img src={session.user.image} alt={session.user.name || "User"} className={styles.navbar_user_image} />}
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
