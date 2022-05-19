function verifyReg(){  
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if(password1!=password2){
        document.getElementById("error").innerHTML ="*Password entered is not the same.*";
        return false;
    }

    else if(password1 == "" || password2 =="" || name == "" || username == "" || email== "" ) {  
       document.getElementById("error").innerHTML = "*Please fill in all fields.*";  
       return false;  
    } 

    else if(password1.length < 8) {  
       document.getElementById("error").innerHTML = "*Password length must be at least 8 characters.*";  
       return false;  
    } 
    
    else if(password1.length > 15) {  
       document.getElementById("error").innerHTML = "*Password length must not exceed 15 characters.*";  
       return false;  

    }else {  
        alert("Registered successfully");
        window.location.href ="login_page.html";
            
    }  
  }  