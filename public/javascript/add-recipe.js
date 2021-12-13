async function newRecipeHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value;
  const ing1 = document.querySelector('#ing1').value;
  const ing2 = document.querySelector('#ing2').value;
  const ing3 = document.querySelector('#ing3').value;
  const recipe_text = document.querySelector('#recipe-text').value;

  console.log(ing1);

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      ing1,
      ing2,
      ing3,
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
