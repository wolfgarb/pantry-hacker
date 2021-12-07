async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="recipe-title"]').value;
    const ing_1 = document.querySelector('input[name="ing-1"]').value;
    const ing_2 = document.querySelector('input[name="ing-2"]').value;
    const ing_3 = document.querySelector('input[name="ing-2"]').value;
    const recipe_text = document.querySelector('input[name="recipe-text"]').value;
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ing_1,
        ing_2,
        ing_3,
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
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);