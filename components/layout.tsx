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
          <Navbar.Brand
            onClick={() => router.push("/")}
            className={styles.logoContainer}
          >
            <PlayOutlineIcon />
            <p>STOPIFY</p>
          </Navbar.Brand>
          <Nav className="flex items-center md:text-lg">
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
        </Navbar>
      </Header>
      <Content className="flex items-center justify-center">{children}</Content>
      <Footer className="bg-green-300 h-20 flex items-center justify-center">
        <Link className={styles.link} href="/about">
          <p>&copy; STOPIFY 2023</p>
        </Link>
      </Footer>
    </Container>
  );
};
