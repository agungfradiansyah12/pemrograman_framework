import Link from "next/link";
import styles from "../../auth/register/register.module.scss";

const TampilanRegister = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register_title}>Halaman Register</h1>

      <form className={styles.register_form}>
        {/* Email */}
        <div className={styles.register_form_item}>
          <label htmlFor="email" className={styles.register_form_item_label}>
            Email
          </label>
          <input type="email" id="email" name="email" placeholder="Email" className={styles.register_form_item_input} />
        </div>

        {/* Full Name */}
        <div className={styles.register_form_item}>
          <label htmlFor="fullName" className={styles.register_form_item_label}>
            Full Name
          </label>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" className={styles.register_form_item_input} />
        </div>

        {/* Password */}
        <div className={styles.register_form_item}>
          <label htmlFor="password" className={styles.register_form_item_label}>
            Password
          </label>
          <input type="password" id="password" name="password" placeholder="Password" className={styles.register_form_item_input} />
        </div>

        {/* Button */}
        <button type="submit" className={styles.register_form_button}>
          Register
        </button>
        <br />
        <br />
        <p className={styles.register_text}>
          Sudah punya akun?
          <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </form>
      <br />
    </div>
  );
};

export default TampilanRegister;
