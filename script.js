async function register(){

    const fullname = document.forms["register_form"]["fullname"].value;
    if(fullname == '')
    {
        alert('full name must be filled out');
        return false;
    }
    
    const password = document.forms["register_form"]["password"].value;
    if(password.length < 6 || password.length > 10 ){
        alert('Password not good');
    }

    const email = document.forms["register_form"]["email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()))
    {
        alert('ok');
    } 
    else 
    {
        alert('not');
    }

}