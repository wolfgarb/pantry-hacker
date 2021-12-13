async function recipeSearch(event) {
  event.preventDefault();

  const ingredients = document.querySelector('#ingredients').value;
  const response = await fetch(`/api/recipes/${ingredients}`);
  console.log(response);

  if (response.ok) {
    document.location.replace(`/api/recipes/${ingredients}`);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}

document.addEventListener('submit', recipeSearch);

// // fetch call taking in params
// const response = await fetch(`/api/recipes/${ingList}`);
// // actual data coming back from query (if there is data)
// const searchData = await response.json();
// console.log(searchData);
// // if successful response...

// const recipes = await fetch(`/api/recipes/${ing1}`);
