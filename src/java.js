function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cb406485f9af8te461c95862f965oe3a";
  let context =
    "You are an amazing recipe expert and you makes great and delicious cuisines. Your mission is to generate a well detailed recipe in basic HTML without showing the word html. Limit the instructions to 12 steps. The recipe should not take more than 1 and half hour long to prepare. Sign the recipe with 'SheCodes AI' inside a <strong> at the end of the recipe and NOT at the beginning. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a short recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for you containing ${instructionsInput.value} please wait..</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
