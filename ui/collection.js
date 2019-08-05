let qmap= new Map();
qmap.set('ty','hj');
qmap.set('tysj','hhj');
qmap.set('tys','ygh');

for(let value of qmap.values())
{

    console.log(`Value : ${value}`);

}
for(let key of qmap.keys())
{
    console.log(`value: ${key}`);

}
for(let  [key,value] of qmap.entries())
{
    console.log(`${key} , ${value}`);
}
