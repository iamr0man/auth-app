const login = document.getElementById('inputLogin')
const pass = document.getElementById('inputPass')
const okBtn = document.getElementById('ok-btn')

function validateEmail(login){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)
}

function validatePass(pass){
    return /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/.test(pass) && pass.length >= 8;
}

pass.addEventListener('blur', function(){
    if(validateEmail(login.value) && validatePass(pass.value)){
        okBtn.disabled = false;
    }
})

okBtn.addEventListener('click', function(){
    Login.auth().then(res => {
        window.location.replace(res.url);
    });
})