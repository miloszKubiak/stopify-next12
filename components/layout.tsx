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

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Container className="flex-col justify-between min-h-screen">
      <Header>
        <Navbar
          appearance="subtle"
          className="w-screen flex items-center bg-green-300 w-full text-black sm:px-20"
        >
          <Navbar.Brand className="flex gap-2 items-center text-black sm:mx-30">
            <PlayOutlineIcon className="text-3xl" />
            <p className="text-2xl">STOPIFY</p>
          </Navbar.Brand>
          <Nav className="w-full flex items-center justify-around">
            <Nav.Item as={NavLink as ReactNode} href="/artists/">
              Artists
            </Nav.Item>
            <Nav.Item as={NavLink as ReactNode} href="/albums/">
              Albums
            </Nav.Item>
            {pathname !== "/" && (
              <Button
                className="hover:bg-green-400"
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
        <p>&copy; STOPIFY 2023</p>
      </Footer>
    </Container>
  );
};
