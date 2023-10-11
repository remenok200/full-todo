// Ітератор - об'єкт, за допомогою якого можна перебирати структури, не знаючи їхнього внутрішнього влаштування

/*

Ітератор має метод next() - повертає наступний елемент колекції
Ітератор має властивість done (чи завершили ми обхід об'єкту чи ні)
Ітератор має властивість value - значення елемента

*/

const numbers = [1, 2, 3, 4, 5];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

for(const num of numbers) {
    console.log(num);
}