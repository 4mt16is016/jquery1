$(function(){
    
    $(".submit").click(function(){
        var isValid = $("#regform").validate({
        
        rules:{
            usn:{
                required:true,
                minlength:10,
                maxlength:10,
            },
            
            name:{
                required:true,
                minlength:5,
            },
            
            email:{
                required:true,
                email:true,
               
            },
            
            mobile:{
                required:true,
                minlength:10,
            },
            
            course:{
                required:true,
            },
            
            percentage:{
                required:true,
                min:60,
                max:100,
            }
        },
        messages:{
            usn:{
                required:"USN can't be empty",
                minlength:"USN have atleast 10 charecters",
                maxlength:"USN have  10 charecters",
            },
            
            name:{
                required:"Name can't be empty",
                minlength:"Name have atleast 5 charecters",
            },
            
            email:{
                required:"Email can't be empty",
            },
            
            mobile:{
                required:"Mobile number cannot be empty",
                minlength:"Mobile number must have 10 characters",
            },
            
            course:{
                required:"Course cannot be empty",
            },
            
            percentage:{
                    required:"percentage cannot be empty",
                min:"not eligible",
              max:"eligible",
            }
        }
    }).form();
        if(isValid){
            var usn = $("#usn").val();
            var name=$("#name").val();
            var email=$("#email").val();
            var mobile=$("#mobile").val();
            var course=$("#course").val();
            var percentage=$("#percentage").val();
            $(".reset").click();
            student={
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage
                
            }
            console.log(student);
            
            
            return false;
        }

    });
});
            
      

           