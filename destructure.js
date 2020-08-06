const Person={name:"Tareq",age:22,job:"web developer",gfNai:"single",address:"uttara",phone:"01700505086",friends:["iqram","sahu","anamul","fayejur"]};


const {phone,friends}=Person;

const compleObject={
    name:'abc',
    info:{
        address:"kola bagan",
        leader:"tiger leader"
    }
}
const {leader}=compleObject.info
// const gfNai=Person.gfNai;
// const phone=Person.phone;
// console.log(gfNai,phone,friends);


const friends=["sakib","tamim","musfiq","mominul","mustafiz","mashrafi","taskin","ashraful"];
const[chotovai,nextfriend,...restfriend]=friends;
console.log(restfriend);