'use strict';
console.log('uzdToliau.js');

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];
const colors = ['red', 'green', 'blue', 'tomato'];

// ## lengvesni
{
// 1. atrinkti i nauja masyva skaicius didesnius uz 2

// const numberFilterEl = elements.filter((el) => typeof el === 'number');

const nums1 = nums.filter((el) => el > 2)

// console.log('nums1 ===', nums1);

// 2. grazinti nauja masyva kuriame reiksmes turetu 2 skaicius po kablelio.

const nums2 = nums.map((el) => el.toFixed(2));

// console.log('nums2 ===', nums2);


// 3. is colors array grazinti nauja masyva su visu spalvu raidziu kiekiais

const colors1 = colors.map((el) => el.length);

// console.log('colors1 ===', colors1);

// 4. is colors grazinti nauja masyva kuriame pries spalva butu prirasytas indexas.

const colors2 = colors.map((el, i) => ` index nb ${i}, nb of letters ${el.length};`);
// console.log('colors2 ===', colors2);

}

// ## Sunkesni:

// 1. atspausdinti html paragrafe visus skaicius

/* const nums = [-1, 5, 8, -20, 10, 12, -5, 14];
const colors = ['red', 'green', 'blue', 'tomato'];
*/

{ //old way: nesukuria skirtingu p

  /** 
  const pEl =  document.createElement('p');
  const divEl = document.querySelector('#container');
  divEl.append(pEl);

  let pArr = [];

  for (let element of nums){
    pArr.push(element);
  }
  console.log('pArr ===', pArr);

  pEl.innerHTML = pArr;
 */
}


{ //new way
  /**
let htmlEls = {
p :  document.createElement('p'),
div : document.querySelector('#container'),
}
htmlEls.div.append(htmlEls.p)

const numsLiArrFromMap = nums.map((sk) => {
  const liHtmlString = `<li>${sk}</li>`;
  return liHtmlString;
});

const numsToP = nums.map((el) => {
  const numsHtml = `<p class='test'>${el}</p>`;
  return numsHtml;
});

const stringLis = numsToP.join('');
htmlEls.p.innerHTML = stringLis;
  */
}

// 2. atspausdinti html h2 elemente visus padalintus is 10 -

// 3. gauti ir atspausdinti nauja masyva kuriame visos reiksmes butu padaugintos is 3

// 4. gauti ir atspausdinti nauja masyva kuriame visos reiksmes padaugintos is ju indexo.

// 5. grazinti nauja masyva kuriame butu reikmes didesnes uz 9

// 6. grazinti ir atspausdinti consoleje visas neigiamas reiksmes 
  // 6.1 is colors masyvo grazinti nauja masyva kuriame paskutine raide dizioji

// 7. sukurti nauja masyva kuriame turetume masyva su objektais [ {value: -1}, {value: 5}, {value: 8} {value: -20} ... ] 8 extra(nebutinai forEach) padaryti kad paspaudus mygtuka Daryk mes imptume spalvas is color masyvo ir su jomis dazytume musu .container spalva. Jei daejom iki galo tai pradedam is naujo nuo pirmos spalvos

// 9 extra is nums gauti objekta { teigiami: [...] neigiami: [...] }
