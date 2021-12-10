async function recipeSearch(event) {
  event.preventDefault();

  const ingList = document.querySelector('#ing-list').value;
  console.log(ingList);
  // fetch call taking in params
  const response = await fetch(`/api/recipes/${ingList}`);
  // actual data coming back from query (if there is data)
  // const searchData = await response.json();
  // console.log(searchData);
  // if successful response...
  if (response.ok) {
    document.location.replace(`/api/recipes/${ingList}`);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.recipe-search-form')
  .addEventListener('submit', recipeSearch);

// const ing_1 = document.querySelector('input[name="ing-1"]').value.trim();
// const ing_2 = document.querySelector('input[name="ing-2"]').value.trim();
// const ing_3 = document.querySelector('input[name="ing-3"]').value.trim();

// console.log(ing_1 + ing_2 + ing_3);
