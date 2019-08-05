let uMap = new Map();

uMap.set('one',"Hello");

uMap.set('two','Hi');

uMap.set('two','Hola');

uMap.set(null,'Null One');

uMap.set(null,'Null Two');



// flush the details out of the structure

//uMap.clear();



// delete using key

uMap.delete('two');



for(let [key,value] of uMap.entries()){

   // console.log(`${key} , ${value}`);

}

// keys

for(let key of uMap.keys()){

    console.log(`Key : ${key}`);

}



// values

for(let value of uMap.values()){

    console.log(`Value : ${value}`);

}




// get by key

//console.log('Get By Key ', uMap.get('one'));



const emps = [

    {

        id : 1,

        name : 'Ram',

        email: 'ram@gg.com',

        organization: 'IBM'

    },

    {

        id : 2,

        name : 'Shyam',

        email: 'shyam@gg.com',

        organization: 'IBM'

    },

    {

        id : 3,

        name : 'Gabbar',

        email: 'gabbar@gg.com',

        organization: 'CTS'

    },

    {

        id : 4,

        name : 'Adams',

        email: 'adam@gg.com',

        organization: 'LnT'

    },

    {

        id : 5,

        name : 'John',

        email: 'john@gg.com',

        organization: 'Target'

    }

];



const empMap = new Map();

emps.forEach((emp)=>{

    empMap.set(emp.email,JSON.stringify(emp));

});



empMap.forEach((value,key)=>{

    let _val =  JSON.parse(value);

    console.log(`${key} `,_val);

});



const uSet = new Set();

uSet.add("Set 1");

uSet.add("Set 2");

uSet.add("Sample 3");

uSet.add("Set 2");

uSet.add("Hello");



// delete value from Set

uSet.delete('Set 2');



for(let item of uSet){

    console.log(item);

}

const empSet = new Set();

emps.forEach((e)=>{

    empSet.add(JSON.stringify(e));

});

empSet.add(JSON.stringify(

    {

        id : 4,

        name : 'Adams',

        email: 'adam@gg.com',

        organization: 'LnT'

    }

))



empSet.forEach((emp)=>{

    console.log(JSON.parse(emp));

});



// get values from an object

const eVals = Object.values(emps[0]);

console.log(eVals);



let exists = uSet.has("Hello");

console.log(exists);



const mWeakMap = new WeakMap();

const obj1 = new String('wOne');

const obj2 = new String('wTwo');

const obj3 = new String('wThree');



mWeakMap.set(obj1,'Weak Hello');

mWeakMap.set(obj2,'Weak Hi');

mWeakMap.set(obj3,'Weak How r u');



console.log('WEAK MAP : ',mWeakMap.get(obj2));

// delete an item

//mWeakMap.delete(obj1);



const mWeakSet = new WeakSet();

mWeakSet.add(obj1);

mWeakSet.add(obj2);

mWeakSet.add(obj3);



//mWeakSet

console.log('Weak Set: ');



let newEmps = emps.map(e=>{

    return {

        user : {

                id: e.id,

                name :  e.name +', ' + e.email,

                organization: e.organization

        }

    }

});

newEmps.forEach(e=>console.log(e));





let msgs = [["How","Hola"],["Are"], ["You"], "Welcome"];



msgs.map(m=>{

    return m;

}).forEach(m=>console.log('Using MAP: ',m));





msgs.flatMap(m=>{

    return m;

}).forEach(m=>console.log('Using FLAT MAP: ',m));

const c=[1,2,3,4];
const ans=c.reduce((_prev,_cur) =>
{
    return _prev+_cur;
});
console.log(` value: ${ans}`);
const ca=["hello","hi","hey"];
const ansa=ca.reduce((_prev,_cur) =>
{
    return _prev+_cur;
});
console.log(` value: ${ansa}`);
document.write(ansa);
let cott= emps. reduceRight((acc,emp) =>
{
    let key=emp[`id`];
    if(!acc[key])
    {
        acc[key]=[];

    }
    acc[key].push(emp);
    return acc;
    },{}
    );
console.log(cott);
const employees = [

    {

        id: 1,

        name: 'Bob',

        salary : 100,

        designation: 'Programmer',
        
        place:`bangaore`

    },

    {

        id: 2,

        name: 'Steve',

        salary : 50,

        designation: 'Programmer',
        place:`bangaore`

    },

    {

        id: 3,

        name: 'John',

        salary : 75,

        designation: 'Developer',
        place:`bme`

    },

    {

        id: 4,

        name: 'John',

        salary : 80,

        designation: 'Tech Lead',
        place:`bme`

    }

];



const _totalSal = employees.reduce((emp1,emp2)=>{

    let t=emp2.salary;
    return emp1+t;

},
0
);



console.log(`Total Salary is : ${_totalSal}`);



let groupByOrg = emps.reduceRight((acc,emp)=>{

    let key = emp['organization']; 

    if(!acc[key]){

            acc[key]=[];

        }

    acc[key].push(emp);

    return acc;

},{});

console.log(groupByOrg);



const groupByDesignation = employees.reduce((results,employ)=>{

    let designation = employ['designation'];

    if(!results[designation]){

        results[designation] = [];

    }

    results[designation].push(employ);

    return results;

},{});

const placeBy =employees.reduce((results,emp =>
    {
        let place=employee[`place`];
        if()

    })) 

