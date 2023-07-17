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
import { NavLink } from "./nav-link";
import { useRouter } from "next/router";
import Link from "next/link";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Container
      className="flex-col justify-between min-h-screen"
      style={{ width: "100vw" }}
    >
      <Header>
        <Navbar
          appearance="subtle"
          className="w-screen flex items-center bg-green-300 w-full text-black sm:px-20"
        >
          <Navbar.Brand
            onClick={() => router.push("/")}
            className="flex gap-2 items-center cursor-pointer sm:mx-30"
          >
            <PlayOutlineIcon className="text-3xl text-black" />
            <p className="text-2xl text-black">STOPIFY</p>
          </Navbar.Brand>
          <Nav className="w-full flex items-center justify-around sm:text-lg">
            <Nav.Item as={NavLink as ReactNode} href="/artists/">
              Artists
            </Nav.Item>
            <Nav.Item as={NavLink as ReactNode} href="/albums/">
              Albums
            </Nav.Item>
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
      <Content className="bg-zinc-100 flex items-center justify-center">
        {children}
      </Content>
      <Footer className="bg-green-300 h-10 flex items-center justify-center">
        <Link className="hover:no-underline hover:text-black" href="/about">
          <p>&copy; STOPIFY 2023</p>
        </Link>
      </Footer>
    </Container>
  );
};
