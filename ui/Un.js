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
const loadEmployees= ()=>{

    let rows = '';

    console.log(emps);

    // traverse the array

    emps.forEach((employee) =>{

        rows += empRow(employee);

    });

    empTable(rows);

}
const empRow = (employee)=>{

    return `<tr>

        <td>${employee.id}</td>

        <td>${employee.name}</td>

        <td>${employee.email}</td>

        <td>${employee.organization}</td>

    </tr> `

}

const empTable = (rows)=>{

    let records = `<table>function numone(){  
        if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
           
         document.lcdform.lcds.value = "1";  
             
        }  
        else //if(document.lcdform.lcds.value != "0")  
        {  
         documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "1";  
        }  
          
       }  

                    <tr>

                        <th><a href="#" onclick="sortEmployee('ID')">Id</a></th>

                        <th><a href="#" onclick="sortEmployee('NAME')">Name</a></th>

                        <th>Email</th>

                        <th><a href="#" onclick="sortEmployee('ORG')">Organization</a></th>

                    </tr>

                    ${rows}    

                </table>`;

    document.getElementById('div-emps').innerHTML = records;

}
const addData= () =>{

    id=document.getElementById("adid");
    hname=document.getElementById("adname");
    email1=document.getElementById("admail");
    org=document.getElementById("adorg");
   let rows = ''
   emps.forEach((employee) =>{

       rows += empRow(employee);

   });
   let check=0;
   if(emps.email==email1.value)
   {
       alert("already exist");
       check=1;     
   }
          if(check==0)
          {
   
   emps.push({id:id.value,name:hname.value,email:email1.value,organization:org.value});
    
  
          }
    else{
        emps.push({id:id.value,name:hname.value,email:email1.value,organization:org.value});
    
    }      
   

   empTable(rows);
   localStorage.setItem("emps",JSON.stringify(emps));
  

       
   
   }
   const localStore=()=>{

    

}

const sessionStore=()=>{

    sessionStorage.setItem("sessionMessage","Welcome to Session Storage");

}



const viewWebStore = () =>{

    if(localStorage.length > 0 ){

        Object.keys(localStorage)

        .forEach((key)=>{

            console.log(localStorage.getItem(key));

        })

    }

    if(sessionStorage.length > 0 ){

        Object.keys(sessionStorage)

        .forEach((key)=>{

            console.log(sessionStorage.getItem(key));

        })

    }

    // clear web stores

    localStorage.removeItem('message');

    sessionStorage.removeItem('sessionMessage');

}
const del= () =>{
    emps.pop();
    localStorage.setItem("emps",JSON.stringify(emps));
    loadEmployees();

}