'use strict';
console.log('map.js');


// array.forEach(function(currentValue, index, arr){})

const nums = [1, 2, 3];

const rez = nums.map((sk, i, arr) => {
  console.log(i, 'sk ===', sk);
  return sk;
});
console.log('rez ===', rez);
// gauti tokia strukrura const numsO = [{ id: 1 }, { id: 2 }, { id: 3 }];

const numsObjs = nums.map((sk) => {
  const newObjForArr = { id: sk };
  return newObjForArr;
});
console.log('numsObjs ===', numsObjs);


// const numsLiArr = ['<li>1</li>', '<li>2</li>', '<li>3</li>'];
const numsLiArrFromMap = nums.map((sk) => {
  const liHtmlString = `<li>${sk}</li>`;
  return liHtmlString;
});

const list1El = document.getElementById('list1');

// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
console.log('numsLiArrFromMap ===', numsLiArrFromMap);
{
  /* 
<li>1</li>
<li>2</li>
<li>3</li> 
*/
}
const stringLis = numsLiArrFromMap.join('');
console.log(stringLis);
// list1El.innerHTML = stringLis;

// chain reaction
list1El.innerHTML = nums.map((sk) => `<li> skaicius ${sk}</li>`).join('');

{//  grazinti nauja masyva kuriam yra visos nums masyvo reiksmes pakeltos kvadratu;
// sk **
// const pakelta2 = nums.map((sk) => sk ** 2;
// console.log(pakelta2);}
}

