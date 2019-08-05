$(document).ready(()=>{

    console.log('jquery onload/ready called');
    $('#login').click(()=>{

        /*$('#frm-emp').slideToggle({
    
            easing: 'linear',
    
            duration: 1000
    
        },()=>{
    
            console.log('Show/hide form');
    
        }); */
    
    
    
        $('#frm_reg').slideToggle('fast',()=>{
    
            console.log('Show/hide form');
    
        });
    });
    $('#save1').click(()=>{
        var value = $("#name").val();
        var value2 = $("#password").val();
        var value3 = $("#email").val();
        localStorage.setItem("ram",JSON.stringify({value,value2,value3}));




    });
});


