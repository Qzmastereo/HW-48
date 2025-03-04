const friends = ['Mango', 'Poly', 'Kivi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i++){
    string += friends[i];
    if (i < friends.length - 1) {
        string += ', '
    }
}

console.log(string);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const actions = [
  { type: "remove", index: 2 },
  { type: "add", index: 5, card: "Карточка-6" },
  { type: "update", index: 2, card: "Оновлена карта-4" },
];

for (const action of actions) {
  if (action.type === "remove") {
    cards.splice(action.index, 1);
  } else if (action.type === "add") {
    cards.splice(action.index, 0, action.card);
  } else if (action.type === "update") {
    cards.splice(action.index, 1, action.card);
  }
}

console.log(cards);