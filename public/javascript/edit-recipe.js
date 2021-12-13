async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  const ingredients = document.querySelector('#ingredients').value;
  const recipe_text = document.querySelector(
    'textarea[name="recipe-text"]'
  ).value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/recipes/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-recipe-form')
  .addEventListener('submit', editFormHandler);
