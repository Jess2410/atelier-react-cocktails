import Card, { CardCocktail } from "./Card";

const Cards = ({ cocktails }: { cocktails: CardCocktail[] }) => {
  return (
    <section className="articles">
      {cocktails.map((cocktail, index) => (
        <Card key={index} cocktail={cocktail} />
      ))}
    </section>
  );
};

export default Cards;
