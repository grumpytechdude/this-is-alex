import { Box, Heading, Main, Markdown } from "grommet";
import Head from "next/head";
import Paragraph from "../../../components/Paragraph";
import { Star } from "grommet-icons";

function RichestManInBabylon() {
  return (
    <Box flex={true}>
      <Head>
        <title>The Richest Man in Babylon</title>
        <meta
          name="Description"
          content="Alex Sinclair's notes about the book 'The Richest Man in Babylon' by George Samuel Clason. Author: Alex Sinclair"
        />
      </Head>
      <Heading fill>Notes on The Richest Man in Babylon</Heading>
      <Paragraph>
        First released in 1926, _The Richest Man in Babylon_ by George S. Clason
        is a book about financial advice, told through conversations and stories
        set in ancient Babylon, the most prosperous city in the world.
      </Paragraph>
      <Paragraph>
        This book purports that the rules of wealth acquisition have not changed
        in the last 4000 years. There's no get-rich-quick schemes here, just
        simple advice everybody can benefit from.
      </Paragraph>
      <Heading level="3">
        Rating: <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Heading>
      <Heading level="3" margin="small">
        Axioms
      </Heading>
      <Paragraph markdown={false}>
        The start of the book makes these claims, which are generally upheld
        throughout the book. If these axioms are false, the rest of the book
        cannot be guaranteed.
        <ol>
          <li>Money is the medium by which earthly success is measured</li>
          <li>
            Money makes possible the enjoyment of the best the earth affords
          </li>
          <li>
            Money is plentiful for those who understand the simple laws which
            govern its acquisition
          </li>
          <li>
            Money is governed today by the same laws which controlled it four
            thousand years ago.
          </li>
        </ol>
      </Paragraph>
      <Heading level="3" margin="small">
        Preface
      </Heading>
      <Paragraph markdown={false}>
        <ul>
          <li>
            Money is not the same as wealth.{" "}
            <i>
              A fat purse quickly empties if there is no golden stream to refill
              it.
            </i>
          </li>
          <li>It costs nothing to ask wise advice from a good friend</li>
          <li>
            You cannot hide behind excuses.{" "}
            <i>
              If you have not acquired more than a bare existence since your
              youth, it is either because you have failed to learn the laws that
              govern the building of wealth, or else you have failed to observe
              them.
            </i>
          </li>
          <li>
            Things don't change as much as you'd think.{" "}
            <i>
              The sun that shines today is the sun that shon when your father
              was born, and will still be shining when your last grandchild
              passes into the darkness
            </i>
          </li>
        </ul>
      </Paragraph>
      <Heading level="3" margin="small">
        Saving Money
      </Heading>
      <Paragraph>
        **A part of all you earn is yours to keep.** It should be no less than a
        tenth, no matter how little you earn. It can be as much as you can
        afford.
      </Paragraph>
      <Paragraph>
        **Pay yourself first.** Consider what is truly essential, and do not buy
        what you cannot afford after paying yourself first. _Do not buy from the
        clothes-maker and the sandal-maker more than you can pay out of the rest
        and still have enough for food and charity and penance to the gods._
      </Paragraph>
      <Paragraph>
        **Savings grow like a tree.** Money can earn money, all on its own - so
        the sooner you can start saving, the sooner your savings can begin
        increasing by themselves. _Wealth, like a tree, grows from a tiny seed.
        The first copper you save is the seed from which your tree of wealth
        shall grow. The sooner you plant that seed, the sooner shall the tree
        grow. And the more faithfully you nourish and water that tree with
        consistent savings, the sooner you may bask in the contentment beneath
        its shade.
      </Paragraph>
      <Paragraph>
        **'Necessary expenses' will always grow to equal our incomes unless we
        protest to the contrary.** Without discipline, those on small incomes
        and those on large will suffer the same burden of an empty purse. _All
        men are burdened with more desires than they can gratify_
      </Paragraph>
      <Heading level="3" margin="small">
        Advice on advice
      </Heading>
      <Paragraph>
        **Advice is one thing that is freely given away, but watch that you only
        take what is worth having.** _He who takes advice about his savings from
        one who is inexperienced in such matters shall pay with his savings for
        proving the falsity of their opinions.
      </Paragraph>
      <Paragraph>
        **Ask advice from knowledgable people.** _If you would have advice about
        jewels, go to the jewel merchant. If you would know the truth about
        sheep, ask a shepherd._
      </Paragraph>
    </Box>
  );
}

export default RichestManInBabylon;
