import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main className={roboto.className}>
      {/* <Navbar /> */}
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <footer className="footer">footer</footer> */}
    </main>
  );
};

export default AppShell;
