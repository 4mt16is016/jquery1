$(function(){
                 if(localStorage.getItem("students")==null){
                     localStorage.setItem("students",JSON.stringify([]));
                 }
  showRegisteredStudents();
    dialog=$("#dialog").dialog({
        autoOpen:false,
        height:500,
        width:500,
        modal:true,
    });
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    $("#dob").datepicker({
        changeYear:true,
        changeMonth:true,
        maxDate:"0d"
        
    });
             
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
            },
            
            dob:{
                required:true
            }
        },
        messages:{
            usn:{
                required:"USN can't be empty",
                minlength:"USN have atleast 10 charecters",
                maxlength:"USN have  10 charecters"
            },
            
            name:{
                required:"Name can't be empty",
                minlength:"Name have atleast 5 charecters"
            },
            
            email:{
                required:"Email can't be empty"
            },
            
            mobile:{
                required:"Mobile number cannot be empty",
                minlength:"Mobile number must have 10 characters"
            },
            
            course:{
                required:"Course cannot be empty"
            },
            
            percentage:{
                    required:"percentage cannot be empty",
                min:"not eligible",
              max:"eligible"
            },
            
            dob:{
                required:"dob cannot empty"
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
            var dob=$("#dob").val();
            $(".reset").click();
            student={
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage,
                "dob":dob,
        
            }
            var students=getDataFromlocalStorage();
            students.push(student);
            updatelocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }
    });
        function showRegisteredStudents(){
            var students=getDataFromlocalStorage();
            var data="";
            if(students.lenghth==0){
                data="<h3>notstudents registered</h3>";
            }
            else{
                data+="<table id='regstudents'><thead><tr>";
                data+="<th>#</th>";
                data+="<th>usn</th>";
                data+="<th>name</th>";
                data+="<th>email</th>";
                data+="<th>mobile</th>";
                data+="<th>course</th>";
                data+="<th>percentage</th>";
                data+="<th>dob</th>";
                data+="</tr></thead>";
                for(var i=0;i<students.length;i++)
                    {
                        var j=i+1;
                        data+="<tr>";
                        data+="<td>"+j+"</td>"
                        data+="<td>"+students[i].usn+"</td>";
                         data+="<td>"+students[i].name+"</td>";
                         data+="<td>"+students[i].email+"</td>";
                         data+="<td>"+students[i].mobile+"</td>";
                         data+="<td>"+students[i].course+"</td>";
                         data+="<td>"+students[i].percentage+"</td>";
                         data+="<td>"+students[i].dob+"</td>";
                        data+="</tr>";
                    }
                data+="</table>"
            }
            $("#content").html(data);
            $("#regstudents").dataTable({
                "pagelength":2
                
            });
        }
           
            function getDataFromlocalStorage(){
                var students=JSON.parse(localStorage.getItem("students"));
                return students;
            }
            function updatelocalStorageData(updatedStudentsArr){
                localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
            }
 

});
            
      

           