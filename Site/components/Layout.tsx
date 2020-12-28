import {
  Anchor,
  Avatar,
  Box,
  Button,
  Header,
  Heading,
  Main,
  ResponsiveContext,
  Sidebar,
} from "grommet";
import { Help, Menu } from "grommet-icons";
import PostsList from "./PostsList";
import Link from "next/link";
import { useEffect, useState } from "react";

function SidebarHeader({ direction }) {
  return (
    <Box direction={direction}>
      <Link href="/" passHref>
        <Anchor
          label="Home"
          href="#"
          icon={
            <Avatar src="https://1.gravatar.com/avatar/7645d22b73724aa2003df23e72f41921" />
          }
        />
      </Link>
    </Box>
  );
}

function SidebarFooter() {
  return <Button icon={<Help />} label="About" hoverIndicator />;
}

function SmallHeader(props: { children: any }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    return () => setShowMenu(false);
  }, [props]);
  return (
    <Box direction="column">
      <Header background="light-3">
        <SidebarHeader direction={"column"} />
        <Button
          icon={<Menu />}
          hoverIndicator
          onClick={() => setShowMenu(!showMenu)}
        />
      </Header>
      {showMenu && (
        <Box background="light-3" pad={"medium"}>
          <Heading>All Posts</Heading>
          <PostsList />
        </Box>
      )}
      <Main pad="medium">{props.children}</Main>
    </Box>
  );
}

function BigHeader({ children }) {
  return (
    <Box direction="row" fill>
      <Sidebar
        flex={false}
        border="between"
        elevation="medium"
        background="light-3"
        header={<SidebarHeader direction={"row"} />}
        footer={<SidebarFooter />}
      >
        <PostsList />
      </Sidebar>
      <Main pad="medium" flex={true}>
        {children}
      </Main>
    </Box>
  );
}

function Layout({ children }) {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        typeof window === "undefined" ||
        size === "xxsmall" ||
        size === "xsmall" ||
        size === "small" ? (
          <SmallHeader children={children} />
        ) : (
          <BigHeader children={children} />
        )
      }
    </ResponsiveContext.Consumer>
  );
}

export default Layout;
