class Timetable {
    tId
    tName
    tTime
    tSubjects;
    setup(tId,tName,tTime, tSubjects){

        this.tId = tId

        this.tName = tName
        this.tTime = tTime
        this.tSubjects=tSubjects

}
 _loadtrainee(){
     // local storage

    localStorage.setItem(this.tId,JSON.stringify({

        tId : this.tId,

        tName: this.tName,

        
        tTime: this.tTime,
        tSubjects: this.tSubjects

    }));

}
_filltrainee(){

    const details = [];

    // fill up Array

    Object.keys(localStorage).forEach((storeKey)=>{

        details.push(JSON.parse(localStorage.getItem(storeKey)));

    });
    

    return details;

}

}
 load_Trainee = () =>{ 

   

    // create trainee Object

    const tra = new Timetable();

    tra.setup(

        document.getElementById('tId').value,

        document.getElementById('tName').value,

        document.getElementById('tTime').value,
        document.getElementById('tSubjects').value

        

        );

    tra._loadtrainee();
    tra._filltrainee();
     fetchAlltrainee();
     _gettrainee();


}
const fetchAlltrainee = ()=>{
    // fetching details

    const tra = new Timetable();

    const trainee = tra._filltrainee();

    buildTimeTable(trainee);

    

}
const buildTimeTable =(trainee) =>{
    //building table

     const tra=new Timetable();
    const traBody = document.getElementById('tra-details');

    let rows = '';

    trainee.forEach((tra)=>{

        rows += `<tr>
                   
                    <td>
                    <td>${tra.tId}

                       ${tra.tName}
                       
                       </td>

                

                </tr>`

    });

    traBody.innerHTML = rows;

    

}
const _gettrainee=()=>{
    //getting compared details
    
    const trainee1= _comparing(

        document.getElementById('tTime').value
        
    );
     console.log(trainee1);
}
const _comparing=(tTime) =>{
    //comparing
    let details=[];
    if(tTime==8)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });

       }
       else if (tTime==9)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });


       }
       else if (tTime==10)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });

           
       }
       else if (tTime==11)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });

           
       }
       else if (tTime==1)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });

           
       }
       else if (tTime==2)
       {
        Object.keys(localStorage).forEach((e)=>{

            const _tr = JSON.parse(localStorage.getItem(e));


                details.push(_tr);


       });

           
       }
       


     return details;


}
