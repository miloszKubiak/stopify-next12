import {
  Container,
  Navbar,
  Content,
  Footer,
  Header,
  Nav,
  Button,
} from "rsuite";
import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import { usePathname } from "next/navigation";
import ArrowBackIcon from "@rsuite/icons/ArowBack";
import { ReactNode } from "react";
// import { NavLink } from "./nav-link";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Container className="flex-col justify-between min-h-screen">
      <Header>
        <Navbar appearance="subtle" className={styles.navbar}>
          <div className="max-w-full flex">
            <Navbar.Brand
              onClick={() => router.push("/")}
              // className="flex items-center gap-2 cursor-pointer"
              className={styles.logoContainer}
            >
              <PlayOutlineIcon
              // className="text-3xl text-black"
              />
              <p
              // className="text-2xl text-black"
              >
                STOPIFY
              </p>
            </Navbar.Brand>
            <Nav className="w-full flex items-center justify-around sm:text-lg">
              <Nav.Item href="/artists/">Artists</Nav.Item>
              <Nav.Item href="/albums/">Albums</Nav.Item>
              {pathname !== "/" && (
                <Button
                  style={{ backgroundColor: "rgb(74 222 128)" }}
                  onClick={() => router.back()}
                >
                  <ArrowBackIcon />
                </Button>
              )}
            </Nav>
          </div>
        </Navbar>
      </Header>
      <Content className="flex items-center justify-center">{children}</Content>
      <Footer className="bg-green-300 h-20 flex items-center justify-center">
        <Link
          className={styles.link}
          // className="no-underline hover:no-underline text-black"
          href="/about"
        >
          <p>&copy; STOPIFY 2023</p>
        </Link>
      </Footer>
    </Container>
  );
};
