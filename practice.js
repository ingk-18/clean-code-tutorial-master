


function createVegetableText(name) {
  return `${name}は洗って皮を剥き、食べやすい大きさにカットします。`;
}
function createFruitText(name) {
  return `${name}は皮を剥いてお皿に盛り付けます。`;
}
function createMeatText(name) {
  return `${name}は一口大に切り、炒めます。`;
}

function getRecipe(obj) {
  return obj.callback(obj.name)
}

class Vegetable{
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
}

const recipes = [];
recipes.push(getRecipe(new Vegetable('にんじん', createVegetableText )));
recipes.push(getRecipe(new Vegetable('ぶどう', createFruitText )));
recipes.push(getRecipe(new Vegetable('鶏肉', createMeatText)));
console.log(recipes);

