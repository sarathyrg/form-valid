const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const phonenumber =  document.querySelector('#phonenumber')

form.addEventListener('submit',(e)=>{

    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailval = email.value.trim();
    const password = password.value.trim();
    const cpassword = cpassword.value.trim();
    const phonenumber = phonenumber.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailval===''){
           success = false;
           setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal ===''){
        success = false;
        setError(password,'password is required')
    }
    elseif(passwordVal.length<8){
        success = false;
        setError(password,'password must be atleast 8 characters long')
    }
    if(cpasswordVal ===''){
        success = false;
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!==passwordval){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

}

//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        
    )
}