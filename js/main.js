const friends = ['Mango', 'Poly', 'Kivi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i++){
    string += friends[i];
    if (i < friends.length - 1) {
        string += ', '
    }
}

console.log(string);

console.log(friends.join(', '))

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

cards.splice(2, 1);

cards.splice(5, 0, 'Карточка-6');

cards.splice(2, 1, 'Оновлена карта-4');

console.log(cards);
