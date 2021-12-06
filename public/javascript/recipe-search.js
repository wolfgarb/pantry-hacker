function recipeSearch(event) {
  event.preventDefault();

  const ing_1 = document.querySelector('input[name="ing-1"]').value.trim();
  const ing_2 = document.querySelector('input[name="ing-2"]').value.trim();
  const ing_3 = document.querySelector('input[name="ing-3"]').value.trim();

  console.log(ing_1 + ing_2 + ing_3);

  

document
  .querySelector('.recipe-search-form')
  .addEventListener('submit', recipeSearch);
