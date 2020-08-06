const ages=[12,13,25,14,58];
const ages2=[15,17,19,20,22];
const ages3=[20,25,30,40,25,50];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[...ages,...ages2,5,...allAges];
// console.log(allAges2);

const business=650;
const minister=450;
const sochib=250;
// const maximum=Math.max(business,minister,sochib);
const takaPoica=[650,450,250];
const maximum=Math.max(...takaPoica);
console.log(maximum);