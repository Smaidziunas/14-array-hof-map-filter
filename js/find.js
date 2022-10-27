"use strict";
console.log("find.js");

// grazina nuoroda i ta elementa (nera kopija)

const nums = [1, -5, 2, 10, 1, -4, 3];

// surasti sk 2

const sk2 = nums.find((sk) => sk === 10);
//ar radom
if (sk2 !== undefined) {
  // radom
  console.log("sk2 ===", sk2);
}

const arrayOfObjects = [
  {
    title: "HTML",

    author: "James B.",

    year: 2022,
  },

  {
    title: "CSS",

    author: "Mike T.",

    year: 2012,
  },

  {
    title: "JS",

    author: "Jane D.",

    year: 2020,
  },
];

//surasti obj kurio title lygu CSS

// su for of loop'u:
// {
// let foundPost;
// for (let post of arrayOfObjects) {
//   // console.log('post ===', post);
//   // console.log('  post.title ===',   post.title);
//   // console.log('iteracija');
//   if (post.title === 'CSS'){
//     foundPost = post;
//     return true;
//     //graziname tai ko iesko funkcija, o funkcija iesko true ar false
//   }
// }
// // console.log('foundPost ===', foundPost);

// }

//su find:
{
let foundPost = arrayOfObjects.find((postObj) => postObj.title === 'CSS');

// console.log('foundPost ===', foundPost);

}


// surasti array of objects posta kurio autoriaus reiksmej yra 'Ja'; su find
{
/*
let foundJAPost = arrayOfObjects.find((postObj) => postObj.author.slice(0,2) === 'Ja');
console.log('foundJAPost ===', foundJAPost);

let foundJAPost = arrayOfObjects.find((postObj) => postObj.author.includes('Ja'));
console.log('foundJAPost ===', foundJAPost);
*/
}
// atlikti ta pati panaudojant filtra;

let filterJAPost = arrayOfObjects.filter((postObj) => postObj.author.slice(0,2) === 'Ja');
console.log('filterJAPost ===', filterJAPost);

