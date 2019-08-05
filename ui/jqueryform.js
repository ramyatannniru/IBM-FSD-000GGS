$(document).ready(()=>{

    console.log('jquery onload/ready called');
    $('#login').click(()=>{

        /*$('#frm-emp').slideToggle({
    
            easing: 'linear',
    
            duration: 1000
    
        },()=>{
    
            console.log('Show/hide form');
    
        }); */
    
        //
    
        $('#frm_reg').slideToggle('fast',()=>{
    
            console.log('Show/hide form');
    
        });
    });
    $('#signin').click(()=>{

    
        $('#frmm_reg').slideToggle('fast',()=>{
    
            console.log('Show/hide form');
    
        });
    });
    $('#save').click(()=>{

    
        $('#emp').slideToggle('fast',()=>{
    
            console.log('Show/hide form');
    
        });
    });
});