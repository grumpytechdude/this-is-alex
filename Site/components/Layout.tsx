import { Anchor, Avatar, Box, Button, Main, Sidebar } from "grommet";
import { Help } from "grommet-icons";
import PostsList from "./PostsList";
import Link from "next/link";

function SidebarHeader() {
  return (
    <Box direction="row">
      <Link href="/" passHref>
        <Anchor
          icon={
            <Avatar src="http://1.gravatar.com/avatar/7645d22b73724aa2003df23e72f41921" />
          }
          href="#"
        />
      </Link>
    </Box>
  );
}

function SidebarFooter() {
  return <Button icon={<Help />} hoverIndicator />;
}

function Layout({ children }) {
  return (
    <Box direction="row" fill>
      <Sidebar
        flex={false}
        border="between"
        elevation="medium"
        background="light-3"
        header={<SidebarHeader />}
        footer={<SidebarFooter />}
      >
        <PostsList />
      </Sidebar>
      <Main pad="medium">{children}</Main>
    </Box>
  );
}

export default Layout;
