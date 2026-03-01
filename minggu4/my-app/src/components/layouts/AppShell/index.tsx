import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {/* <Navbar /> */}
      {children}
      {!disableNavbar.includes(pathname) && <Navbar />}
      {/* <footer className="footer">footer</footer> */}
    </main>
  );
};

export default AppShell;
