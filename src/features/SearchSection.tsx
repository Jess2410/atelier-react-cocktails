import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const SearchSection = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailSelected, setCocktailSelected] = useState("");

  const getCocktails = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const dataCocktails = await res.json();
    setCocktails(dataCocktails.drinks);
  };

  const handleChange = (e) => {
    setCocktailSelected(() => e.target.value);
  };
  console.log("cocktail selected", cocktailSelected);

  const filteredCocktails = cocktails.filter((cocktail) => {
    const lowCocktailTitle = cocktail.strDrink.toLowerCase();
    const lowCocktailSelectedTitle = cocktailSelected.toLowerCase();
    return lowCocktailTitle.includes(lowCocktailSelectedTitle);
  });

  useEffect(() => {
    getCocktails();
  }, []);

  console.log("cocktails", cocktails);
  return (
    <div>
      <h1>Cocktails Bar</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Saisissez un nom de cocktail pour trouver sa recette : </p>
        <input onChange={handleChange} type="text" />
      </div>
      <br />
      <Cards
        cocktails={filteredCocktails}
        cocktailSelected={cocktailSelected}
      />
    </div>
  );
};

export default SearchSection;
