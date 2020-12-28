import { Nav } from "grommet";
import Link from "next/link";

const allPosts = [
  {
    slug: "books/the_richest_man_in_babylon",
    title: "The Richest Man in Babylon",
  },
];
const PostsList = () => {
  return (
    <Nav gap="small">
      {allPosts.map(({ slug, title }) => (
        <Link key={slug} href={`/posts/${slug}`}>
          {title}
        </Link>
      ))}
    </Nav>
  );
};

export default PostsList;
