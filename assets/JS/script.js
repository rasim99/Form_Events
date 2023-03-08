let Username=document.getElementById("username");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let SubmitPassword=document.getElementById("submit-password");
let Form=document.getElementById("form");

 let SubmitBtn=document.querySelector(".btn");

// let iconCheck=document.querySelector(".fa-circle-check");
 let iconCheckUser=document.getElementById("usericon")
 let iconCheckEmail=document.getElementById("emailicon")
 let iconCheckPassword=document.getElementById("passwordicon")
 let iconCheckSubPassword=document.getElementById("subpasswordicon")


// let iconEX=document.querySelector(".fa-circle-exclamation")
let iconEXUser=document.getElementById("userex")
let iconEXEmail=document.getElementById("emailex")
let iconEXPassword=document.getElementById("passwordex")
let iconEXSubPassword=document.getElementById("subpasswordex")

let iconRemove;
let borderColor;
let errSpaan;
function Check() {
    borderColor?borderColor.style.borderColor="":""
    iconRemove?iconRemove.classList.add("d-none"):""
    errSpaan?errSpaan.classList.add("d-none"):""
}
 Username.addEventListener("change",function () {
     Check();
    

    if (Username.value!="") {
        iconCheckUser.classList.remove("d-none");
        this.style.borderColor="green";
        iconRemove=iconCheckUser;
        borderColor=this
    }
    else{
        iconEXUser.classList.remove("d-none")
        iconRemove=iconEXUser;
        this.style.borderColor="red";
        borderColor=this;
        let errorSpanUser=document.getElementById("spanuser");
        errorSpanUser.classList.remove("d-none");
        errSpaan=errorSpanUser;
    }  
 })
 Email.addEventListener("change",function() {
    Check();
    if (Email.value!="") {
        iconCheckEmail.classList.remove("d-none");
        this.style.borderColor="green";
        iconRemove=iconCheckEmail;
        borderColor=this
    }
    else{
        iconEXEmail.classList.remove("d-none")
        iconRemove=iconEXEmail;
        this.style.borderColor="red";
        borderColor=this;
        let errorSpan=document.getElementById("spanemail");
        errorSpan.classList.remove("d-none");
        errSpaan=errorSpan;
    }
 })

Password.addEventListener("change",function() {
    Check();
    if (Password.value!="") {
        iconCheckPassword.classList.remove("d-none");
        this.style.borderColor="green";
        iconRemove=iconCheckPassword;
        borderColor=this
    }
    else{
        iconEXPassword.classList.remove("d-none")
        iconRemove=iconEXPassword;
        this.style.borderColor="red";
        borderColor=this;
        let errorSpan=document.getElementById("spanpassword");
        errorSpan.classList.remove("d-none");
        errSpaan=errorSpan;
    }
})
SubmitPassword.addEventListener("change",function () {
    Check();
    if (SubmitPassword.value==Password.value &&SubmitPassword.value!="") {
        iconCheckSubPassword.classList.remove("d-none");
        this.style.borderColor="green";
        iconRemove=iconCheckSubPassword;
        borderColor=this
    }
    else
    {
        iconEXSubPassword.classList.remove("d-none")
        iconRemove=iconEXSubPassword;
        this.style.borderColor="red";
        borderColor=this;
        let errorSpanUser=document.getElementById("spansubpassword");
        errorSpanUser.classList.remove("d-none");
        errSpaan=errorSpanUser;
    }  
})
Form.addEventListener("submit",function (e) {
    e.preventDefault();
    
    if (Username.value!=""&&Email.value!=""&&Password.value!=""&&SubmitPassword.value!="") {
        
    }
    else{
        // alert("nooo")
    }
})
