async function recipeSearch(event) {
  event.preventDefault();

  const ingList = document.querySelector('input[name="ing-list"').value;
  console.log(ingList);

  const response = await fetch(`/api/recipes/${ingList}`);

  if (response.ok) {
    document.location.replace('/');
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
