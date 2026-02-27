let totalProtein = 0;
let mealData = {
  breakfast: 0,
  lunch: 0,
  snacks: 0,
  dinner: 0
};

function addFoodToMeal(meal, protein) {
  mealData[meal] += protein;
  totalProtein += protein;
  updateUI();
}

function updateUI() {
  let goal = parseInt(document.getElementById("goal").value);
  document.getElementById("totalProtein").innerText = totalProtein + "g";
  document.getElementById("remaining").innerText = Math.max(goal - totalProtein, 0);
  generateSuggestions(goal - totalProtein);
}

function generateSuggestions(remaining) {
  let suggestionsDiv = document.getElementById("suggestionsList");
  suggestionsDiv.innerHTML = "";

  let suggestions = [
    {name:"Paneer 100g", protein:20},
    {name:"Chicken Tikka 100g", protein:27},
    {name:"Soya Chunks 50g", protein:25}
  ];

  suggestions.forEach(item => {
    if(item.protein <= remaining + 10){
      suggestionsDiv.innerHTML += `<p>${item.name} (+${item.protein}g)</p>`;
    }
  });
}
