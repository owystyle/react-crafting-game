import ingredientsData from "../../data/ingredients";

export function findRecipe(output, storage) {
  let finalRecipe = {};

  output.forEach((recipeName) => {
    // Trage toate informatiile despre reteta curenta
    const { name, recipe } = ingredientsData.find(
      (item) => item.name === recipeName
    );

    // Vezi daca o poti crafta luand in calcul ce ai in storage
    // si ce costa reteta sa o craftezi
    const ingredients = Object.keys(recipe.ingredients);
    const ingredientsValues = Object.values(recipe.ingredients);
    const canBeCrafted = ingredients.reduce((acc, item, idx) => {
      const fromStorage = storage.find((itm) => itm.value === item);

      if (fromStorage && fromStorage.quantity >= ingredientsValues[idx]) {
        acc = true;
      } else {
        acc = false;
      }

      return acc;
    }, false);

    console.log("test", canBeCrafted);

    // Daca exista o reteta, scoate-o din loop
    // asignand-o lui finalRecipe
    if (!canBeCrafted) return;
    finalRecipe = { name, recipe };
  });

  return finalRecipe;
}
