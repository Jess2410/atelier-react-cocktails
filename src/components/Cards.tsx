import Card from "./Card";

const Cards = ({ cocktails }) => {
  return (
    <section className="articles">
      {cocktails.map((cocktail, index) => (
        <Card key={index} cocktail={cocktail} />
      ))}
    </section>
  );
};

export default Cards;
