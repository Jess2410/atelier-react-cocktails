import { useState } from "react";

type CardCocktail = {
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strInstructions: string;
};
const Card = ({ cocktail }: CardCocktail) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };
  return (
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={cocktail.strDrinkThumb} alt="" />
        </figure>
        <h2>{cocktail.strDrink}</h2>
        <div className="button-wrapper">
          <button onClick={onOpen}>Voir plus</button>
        </div>
        {open && (
          <div>
            <ul className="ingredients">
              <h3>Ingrédients</h3>
              {cocktail.strIngredient1 && <li>{cocktail.strIngredient1}</li>}
              {cocktail.strIngredient2 && <li>{cocktail.strIngredient2}</li>}
              {cocktail.strIngredient3 && <li>{cocktail.strIngredient3}</li>}
              {cocktail.strIngredient4 && <li>{cocktail.strIngredient4}</li>}
              {cocktail.strIngredient5 && <li>{cocktail.strIngredient5}</li>}
              {cocktail.strIngredient6 && <li>{cocktail.strIngredient6}</li>}
              {cocktail.strIngredient7 && <li>{cocktail.strIngredient7}</li>}
            </ul>
            <h3>Instructions</h3>
            <p className="instructions">{cocktail.strInstructions}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
