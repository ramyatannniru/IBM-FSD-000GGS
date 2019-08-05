function click2Me(){
    let messages = ['english','maths','science'];


    const name = document.getElementById('english');
    const name2 = document.getElementById('maths');
    const name3 = document.getElementById('science');
    

    
    

    

    let rows ,r2,r3;

    

    rows =`<tr><th>${name.value}</th><th>${messages[0]}</th></tr>`;

    r2 =`<tr><th>${name2.value}</th><th>${messages[1]}</th></tr>`;

    r3 =`<tr><th>${name3.value}</th><th>${messages[2]}</th></tr>`;

    

    let _table =`<table>

                <tr><th>marks</th><th>Message</th></tr>

                ${rows}
                ${r2}
                ${r3}

                </table>`;

    document.getElementById('msgs').innerHTML =_table;
    var total= name.value+name2.value+name3.value;
    if(total>100)
{
    alert("student is distinction");
}
else if(total>=45)
{
alert("student passed");
}
else{
    alert("fail");
}

    

}
