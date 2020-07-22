function validatelog()
{
    var email=document.getElementById("email");
    var pass=document.getElementById("pass");
    if(email.value.trim()=="")
    {
        email.focus();
        email.style.border="3px solid crimson";
        document.getElementById("lemail").style.visibility="visible";
        return false;
    }
    else if(pass.value.trim().length<10)
    {
        pass.focus();
        pass.style.border="3px solid crimson";
        document.getElementById("lpass").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }
}