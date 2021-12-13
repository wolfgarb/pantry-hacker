const FuzzySearch = require('fuzzy-search');
const recipes = require('api/recipes');

async function recipeSearch(event) {
  event.preventDefault();

  const ing1 = document.querySelector('#ing1').value;
  const ing2 = document.querySelector('#ing2').value;
  const ing3 = document.querySelector('#ing3').value;

  const searcher = new FuzzySearch(recipes, [ing1, ing2, ing3], {
    caseSensitive: false,
    sort: true
  });

  const result = searcher.search([ing1, ing2, ing3]);
  console.log(result);

  // if (response.ok) {
  //   document.location.replace(`/api/recipes/`);
  //   console.log(response);
  // } else {
  //   alert(response.statusText);
  // }
}

document
  .querySelector('.recipe-search-form')
  .addEventListener('submit', recipeSearch);

// // fetch call taking in params
// const response = await fetch(`/api/recipes/${ingList}`);
// // actual data coming back from query (if there is data)
// const searchData = await response.json();
// console.log(searchData);
// // if successful response...
