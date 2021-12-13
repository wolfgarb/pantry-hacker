async function newRecipeHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value;
  const ingredients = document.querySelector('#ingredients').value;
  const recipe_text = document.querySelector('#recipe-text').value;

  console.log(ingredients);

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      ingredients,
      recipe_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newRecipeHandler);
