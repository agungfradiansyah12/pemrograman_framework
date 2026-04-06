import Link from "next/link";
import styles from "../../auth/register/register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const fullname = formData.get("fullName") as string;
    const password = formData.get("password") as string;

    //tugas
    if (!email) {
      setError("Email wajib diisi");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });

    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(response.status === 400 ? "Email already exists" : "An error occurred");
    }
  };

  return (
    <div className={styles.register}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h1 className={styles.register_title}>Halaman Register</h1>

      <form className={styles.register_form} onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.register_form_button} disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

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
