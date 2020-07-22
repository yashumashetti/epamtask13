function validatereg()
{
    var firstname=document.getElementById("fname");
    var lastname=document.getElementById("lname");
    var email=document.getElementById("email");
    var phnum=document.getElementById("phnnum");
    var date=document.getElementById("date");
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    if(firstname.value.trim()=="")
    {
        firstname.focus();
        firstname.style.border="3px solid crimson";
        document.getElementById("lfname").style.visibility="visible";
        return false;
    }
    else if(lastname.value.trim()=="")
    {
        lastname.focus();
        lastname.style.border="3px solid crimson";
        document.getElementById("llname").style.visibility="visible";
        return false;
    }
    else if(email.value.trim()=="")
    {
        email.focus();
        email.style.border="3px solid crimson";
        document.getElementById("lemail").style.visibility="visible";
        return false;
    }
    else if(phnum.value.trim().length<10 || phnum.value.trim().length>10)
    {
        phnum.focus();
        phnum.style.border="3px solid crimson";
        document.getElementById("lphn").style.visibility="visible";
        return false;
    }
    else if(date.value.trim()=="")
    {
        date.focus();
        date.style.border="3px solid crimson";
        document.getElementById("ldate").style.visibility="visible";
        return false;
    }
    else if(pass.value.trim().length<10)
    {
        pass.focus();
        pass.style.border="3px solid crimson";
        document.getElementById("lpass").style.visibility="visible";
        return false;
    }
    else if(cpass.value.trim()=="" || cpass.value!=pass.value)
    {
        cpass.focus();
        cpass.style.border="3px solid crimson";
        document.getElementById("lcpass").style.visibility="visible";
        return false;
    }
    else 
    {
        return true;
    }

}