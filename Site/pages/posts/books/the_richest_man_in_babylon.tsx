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
      <Heading level="1" fill>
        Notes on The Richest Man in Babylon
      </Heading>
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
      <Heading level="2">
        Rating: <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Heading>
      <Heading level="2">Takeaways and Notes</Heading>
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
        Cures for a lean purse
      </Heading>
      <Paragraph markdown={false}>
        <ol>
          <li>Save one tenth of all you earn, no matter how small</li>
          <li>
            Budget your expenses to pay for necessities, enjoyments, and to
            gratify your worthwhile desires without spending more than
            nine-tenths of your earnings
          </li>
          <li>Make your savings grow and multiply by putting them to work</li>
          <li>Guard your investment from loss</li>
          <li>Own your own home</li>
          <li>
            Secure the future by providing in advance for the needs of your
            growing age and the protection of your family
          </li>
          <li>Increase your ability to earn</li>
        </ol>
      </Paragraph>
      <Heading level="3" margin="small">
        Saving Money
      </Heading>
      <Paragraph>
        **A part of all you earn is yours to keep.** If you pay yourself first,
        you'll watch your savings grow and it will feel great! _It should be no
        less than a tenth, no matter how little you earn. It can be as much as
        you can afford._
      </Paragraph>
      <Paragraph>
        **Pay yourself first.** Consider what is truly essential, and do not buy
        what you cannot afford after paying yourself first. _Do not buy from the
        clothes-maker and the sandal-maker more than you can pay out of the rest
        and still have enough for food and charity and penance to the gods._
      </Paragraph>
      <Paragraph>
        **Wealth is not the amount of money you have.** It is the income you
        build, _the golden stream that continually floweth into his purse and
        keepeth it always bulging_
      </Paragraph>
      <Paragraph>
        **Savings grow like a tree.** Money can earn money, all on its own - so
        the sooner you can start saving, the sooner your savings can begin
        increasing by themselves. _Wealth, like a tree, grows from a tiny seed.
        The first copper you save is the seed from which your tree of wealth
        shall grow. The sooner you plant that seed, the sooner shall the tree
        grow. And the more faithfully you nourish and water that tree with
        consistent savings, the sooner you may bask in the contentment beneath
        its shade._
      </Paragraph>
      <Paragraph>
        **'Necessary expenses' will always grow to equal our incomes unless we
        protest to the contrary.** Without discipline, those on small incomes
        and those on large will suffer the same burden of an empty purse. _All
        men are burdened with more desires than they can gratify_
      </Paragraph>
      <Paragraph>
        **Be clear and realistic about what you want.** Reducing your expenses
        includes working out what you want, so you can be specific and clear.
        _Desires must be simple and definite. They defeat their own purpose
        should they be too many, too confusing, or beyond a man's training to
        accomplish_
      </Paragraph>
      <Paragraph>
        **It's about the person you become, as much as the savings themselves.**
        Being a person who spends all of their money regardless of how high the
        income is not a person concerned for the future. For the risks and
        pitfalls within. If you can keep £100 and not spend it, you can probably
        keep £1000 and not spend it. If you can keep £1000, you can probably
        keep £10,000. _Gold cometh gladly and increasing quantity to any man who
        will put by not less than one-tenth of his earnings to create an estate
        for his future and that of his family._
      </Paragraph>
      <Paragraph>
        **Investing multiplies your money.** Investing here means "spending
        wisely with an aim to earn more". Perhaps you invest in a savings
        account, allowing the bank to use your money for some fixed rate of
        return. Perhaps you invest in a car, that you can get a better job or
        spend more time with family - thus enabling you to feel better, and be
        in a better place to work and learn. Perhaps you invest in yourself - a
        training course, or starting a business. Perhaps you invest in the stock
        market. _Gold laboreth diligently and contentedly for the wise owner who
        finds for it profitable employment, multiplying even as the flocks of
        the field._
      </Paragraph>
      <Paragraph>
        **Seek advice from experts in their fields.** _Gold clingeth to the
        protection of the cautious owner who invests it under the advice of men
        wise in its handling_
      </Paragraph>
      <Paragraph>
        **Don't invest in unknown or unwise investments.** Don't start a
        business when you know nothing about that industry. Don't buy an
        expensive car when a cheap one will do. Don't invest in a dying
        industry. Don't invest in a savings account that earns less than the
        rate of inflation. _Gold slippeth away from the man who invests it in
        businesses or purposes with which he is not familiar or which are not
        approved by those skilled in its keep._
      </Paragraph>
      <Paragraph>
        **Don't chase others' successes or chase impossible gains.** _Gold flees
        the man who would force it to impossible earnings or who followeth the
        alluring advice of tricksters and schemers or who trusts it to his own
        inexperience and romantic desires in investment_
      </Paragraph>
      <Paragraph>**Wealth that comes quickly goes the same way**</Paragraph>
      <Paragraph>
        **Wealth that stayeth to give enjoyment and satisfaction to its owner
        comes gradually, because it is a child born of knowledge and persistent
        purpose**
      </Paragraph>
      <Heading level="3" margin="small">
        Advice on advice
      </Heading>
      <Paragraph>
        **Advice is one thing that is freely given away, but watch that you only
        take what is worth having.** _He who takes advice about his savings from
        one who is inexperienced in such matters shall pay with his savings for
        proving the falsity of their opinions._
      </Paragraph>
      <Paragraph>
        **Ask advice from knowledgeable people.** _If you would have advice
        about jewels, go to the jewel merchant. If you would know the truth
        about sheep, ask a shepherd._
      </Paragraph>
      <Paragraph>
        **Not everybody is ready to receive the message and change.** _Some were
        silent because they had no imagination and could not understand. Some
        were sarcastic because they thought that one so rich should divide with
        old friends not so fortunate. But some had a new light in their eyes_
      </Paragraph>
      <Paragraph>
        **Wisdom is more valuable than money**. Wisdom is what enables us to
        improve our lot in life, and earn more. The Richest Man in Babylon cost
        me 75p, yet will reap dividends thousands of times over. A bag heavy
        with gold or a clay tablet carved with words of wisdom; if thou hast thy
        choice, which wouldst thou choose?_
      </Paragraph>
      <Heading level="3" margin="small">
        Investments
      </Heading>
      <Paragraph>
        Before you entrust your money to any investment, acquaint yourself with
        the dangers that may beset it
      </Paragraph>
      <Paragraph>
        **When an opportunity is good, don't let it get away.** It's easy to
        deliberate and delay until the opportunity is lost. _There is wisdom in
        making a payment immediately when we are convinced our bargain is wise._
      </Paragraph>
      <Paragraph>
        **So must every man master his own spirit of procrastination before he
        can expect to share in the rich treasures of Babylon**
      </Paragraph>
      <Paragraph>
        **Be aware of your limitations, and take them into account.** Restrain
        yourself from unnecessary action. If you are convinced an opportunity is
        good, don't deliberate and talk yourself out of it. Don't sabotage
        yourself. Consider your past mistakes, and check you're not committing
        them here. _If the bargain be good, then dost thou need protection
        against thy own weaknesses as much as against any other man_
      </Paragraph>
      <Heading level="3" margin="small">
        Debts
      </Heading>
      <Paragraph>
        It's a fact of life that many of us have already got ourselves into
        debt. The Richest Man in Babylon has plenty of advice for getting out of
        debt.
      </Paragraph>
      <Paragraph>
        **Interest is the Rent you pay on your debt.** Interest is a fact of
        life for those in debt, but this book refers to it by the name "rent".
      </Paragraph>
      <Paragraph>
        **Pay your debts promptly.** If you do this, you won't fall into
        long-term debt, wasting your money on renting that debt. _He must pay
        his debts with all promptness within his power, not purchasing that for
        which he is unable to pay._
      </Paragraph>
      <Heading level="3" margin="small">
        Other People
      </Heading>
      <Paragraph>
        **Take care of your family**, that they may think and speak well of you
      </Paragraph>
      <Paragraph>
        **Make a will**. _He must make a will of record that, in case the Gods
        call him, proper and honourable division of his property be
        accomplished_
      </Paragraph>
      <Paragraph>
        **Help others less fortunate than yourself**. Being wealthy comes with a
        social obligation to help those less fortunate. This is something we
        have forgotten in the age of shareholder value. _He must have compassion
        upon those who are injured and smitten by misfortune and aid them within
        reasonable limits._
      </Paragraph>
      <Paragraph>
        _He must do deeds of thoughtfulness to those dear to him_
      </Paragraph>
      <Heading level="3" margin="small">
        Luck
      </Heading>
      <Paragraph>
        **Good luck is the choices we make, the opportunities we find, the
        results we see.** It is not some short-term fleeting chance, like
        winning a bet or finding a bargain.
      </Paragraph>
      <Paragraph>
        **Improve yourself and improve your luck**. _Always do the affairs of
        man change and improve because keen-minded men seek greater skill that
        they may better serve those upon whose patronage they depend. Therefore,
        I urge all men to be in the front rank of progress and to not stand
        still, lest they be left behind. Many things come to make a man's life
        rich with gainful experiences._
      </Paragraph>
      <Paragraph>
        _To some men, good luck bespeaks but a chance happening that, like an
        accident, may befall one without purpose or reason. Others do believe
        that the instigator of all good fortune is our most bonteous goddess,
        Ashtar, ever anxious to reward with generous gifts those who please her_
      </Paragraph>
      <Paragraph>
        _What reason have we to feel the good goddess would take that much
        interest in any man's bet upon a horse race? To me she is a goddess of
        love and dignity whose pleasure it is to aid those who are in need and
        to reward those who are deserving. I look to find her, not at the gaming
        tables or the races where men lose more gold than they win, but in other
        places where the doings of men are more worthwhile and more worthy of
        reward._
      </Paragraph>
      <Paragraph>
        **Good luck can be within your grasp, and escape**. _If we take credit
        for our own industry and ability for our business success, why not
        consider the successes we almost enjoyed but which escaped us,
        happenings that would have been most profitable. They would have been
        rare examples of good luck if they had actually happened. Because they
        were not brought to fulfilment, we cannot consider them as our just
        rewards._
      </Paragraph>
      <Paragraph>
        **To take his first start to building an estate is as good luck as can
        come to any man**
      </Paragraph>
      <Paragraph>
        **Men of action are favoured by the goddess of good luck**
      </Paragraph>
      <Paragraph>
        _Action will lead thee forward to the successes thou dost desire_
      </Paragraph>
      <Paragraph>
        _I do see luck in a different light. I had thought of it as something
        most desirable that might happen to a man without effort upon his part.
        Now, I do realise such happenings are not the sort of thing one may
        attract to himself. From our discussion have I learned that to attract
        good luck to oneself, it is necessary to take advantage of
        opportunities. Therefore, in the future, I shall endeavour to make the
        best of such opportunities as do come to me. _
      </Paragraph>
    </Box>
  );
}

export default RichestManInBabylon;
