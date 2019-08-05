$(document).ready(()=>{

    console.log('jquery onload/ready called');
   
        $.validator.addMethod('emailValidator',(value,elem)=>{

            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            return regex.test(value);

    });
    $('#frm_reg').validate({

        rules:{

            name: 'required',

            phone: {

                required : true,

                min : 100,

                max: 1000

            },
            email:
            {
                emailValidator: true
            }

            
            

        },

        messages:{

            name : 'Name cannot be left blank',

            phone: {

                required : 'Phone cannot be left blank',

                min : 'Phone cannot be less than 100',

                max: 'Phone cannot be greater than 1000'

            },
            email:
            {
                emailValidator: 'invalid email'
            }

          

        }

    });






    $('#save').click(()=>{

        let name = $('#name').val();

        alert(`name is : ${name}`);

        //set textbox value

        $('#name').val('hello@mm.com');

        //set focus within textbox

        $('#name').focus();


        

    }); 
$('#save').click(()=>{

    /*$('#frm-emp').slideToggle({

        easing: 'linear',

        duration: 1000

    },()=>{

        console.log('Show/hide form');

    }); */

    //

    $('#frm-emp-slidetoggle').slideToggle('fast',()=>{

        console.log('Show/hide form');

    });
});
$('#reset').click(()=>{

    /*$('#frm-emp').slideToggle({

        easing: 'linear',

        duration: 1000

    },()=>{

        console.log('Show/hide form');

    }); */

    //

    $('#emp').slideToggle('fast',()=>{

        console.log('Show/hide form');

    });
});
$('#reset').click(()=>{

    $('#email').val('reset@mm.com');

});
$('#save').click(()=>{

    $('#emp').show();

});
$(':text').click(()=>{

    // explicit styling based on type of input

    // via id / css class

    // by id : :text#email2

    // by class : :text.email2

    $(':text#name').css({

        'background-color':'green',

        'border': '2px solid red'

    });

});

});