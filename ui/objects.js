const emps = [];
class Sample
{
    
 loadEmployees (){

    this.rows = '';

    //1console.log(emps);

    
    emps.forEach((employee) =>{

        this.rows += empRow(employee);

    });

    empTable(rows);

}
 empRow(employee){

    return `<tr>

        <td>${employee.id}</td>

        <td>${employee.name}</td>

        <td>${employee.email}</td>

        <td>${employee.organization}</td>

    </tr> `

}

 empTable(rows){

    this.records = `<table>

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
}

const addData= () =>{

     var id=document.getElementById("adid");
    var hname=document.getElementById("adname");
    var email1=document.getElementById("admail");
    var org=document.getElementById("adorg");
   
   
      
   
   emps.push({id:id.value,name:hname.value,email:email1.value,organization:org.value});
    
   const sam=new Sample();
   sam.loadEmployees();

   localStorage.setItem("emps",JSON.stringify(emps));
  

       
   
   }