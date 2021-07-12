const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
  
const arrOfLiItem = ingredients.map(liItem => {
  const liEl = document.createElement("li");
  liEl.textContent = liItem;
  return liEl;
  }
)
console.log(arrOfLiItem);

const ulElIngredients = document.querySelector("#ingredients");

ulElIngredients.append(...arrOfLiItem);
