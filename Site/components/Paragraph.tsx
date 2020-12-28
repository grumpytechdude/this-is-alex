import { Heading, Main, Markdown, Paragraph as Para } from "grommet";

function Paragraph({ markdown = true, children }) {
  return (
    <Para fill>{markdown ? <Markdown>{children}</Markdown> : children}</Para>
  );
}

export default Paragraph;
