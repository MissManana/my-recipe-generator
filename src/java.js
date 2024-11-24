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
    "You are an amazing recipe expert and you makes great and delicious cuisines. Your mission is to generate well detailed recipe in basic HTML without showing the word html. Limit the instructions to 10 steps. The recipe should not take more than 1 and half hour long to prepare. Sign the recipe with 'SheCodes AI' in <strong> at the end and NOT at the beginning. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a short recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for you containing ${instructionsInput.value} please wait..</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
