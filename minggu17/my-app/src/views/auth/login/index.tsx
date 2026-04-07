import Link from "next/link";
import styles from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  //  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   setError("");
  //   setIsLoading(true);
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(event.currentTarget);

  //   const email = formData.get("email") as string;
  //   const fullname = formData.get("fullName") as string;
  //   const password = formData.get("password") as string;

  //   //tugas
  //   if (!email) {
  //     setError("Email wajib diisi");
  //     return;
  //   }

  //   if (!password || password.length < 6) {
  //     setError("Password minimal 6 karakter");
  //     return;
  //   }

  //   const response = await fetch("/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, fullname, password }),
  //   });

  //   if (response.status === 200) {
  //     form.reset();
  //     setIsLoading(false);
  //     push("/auth/login");
  //   } else {
  //     setIsLoading(false);
  //     setError(response.status === 400 ? "Email already exists" : "An error occurred");
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const form = event.currentTarget;
      const email = (form.email as HTMLInputElement).value;
      const password = (form.password as HTMLInputElement).value;

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      console.log("signIn response:", res);

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res.error || "login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <>
      <div className={styles.login}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <h1 className={styles.login_title}>Halaman Login</h1>

        <form className={styles.login_form} onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.login_form_item}>
            <label htmlFor="email" className={styles.login_form_item_label}>
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Email" className={styles.login_form_item_input} />
          </div>

          {/* Password */}
          <div className={styles.login_form_item}>
            <label htmlFor="password" className={styles.login_form_item_label}>
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="Password" className={styles.login_form_item_input} />
          </div>

          {/* Button */}
          <button type="submit" className={styles.login_form_button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>

          <br />
          <br />

          <button onClick={() => signIn("google", { callbackUrl, redirect: false })} className={styles.login_form_item_button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign in with Google"}
          </button>

          <p className={styles.login_text}>
            tidak punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default TampilanLogin;
