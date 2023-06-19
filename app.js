



// let user_choice=prompt("Please Enter Menu Code:");

let form=document.querySelector("#form");
let input_data=document.querySelector("#input_val");
let choice=document.querySelector("#choice");
let result=document.querySelector("#result");

let user_choice;

while (true){
    user_choice=prompt("Please Enter Menu Code:")
    if(user_choice=="1" || user_choice=="2" || user_choice=="3"){
        console.log(user_choice);
        break
    }
}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (input_data.value==""){
        alert("Field can not be empty");
        return false;
    }
    else{
        let val=input_data.value;
        switch(user_choice){
            case "1":
                if(emailCheck(val)){
                    result.innerHTML="<h4>Valid Email Address</h4>";
                }
                else{
                    result.innerHTML="<h4>Invalid Email Address</h4>";
                }
                break
            case "2":
                
                if(checkPhoneNumber(val)){
                    result.innerHTML="<h4>Valid Phone Number</h4>";
                }
                else{
                    result.innerHTML="<h4>Invalid Phone Number</h4>";
                }
                break;
            
            case "3":
                if(checkPostCode(val)){
                    result.innerHTML="<h4>Valid Post Code</h4>";
                }
                else{
                    result.innerHTML="<h4>Invalid Post Code</h4>";
                }

                break
            default:
                alert("Invalid statement")
        }
    }
})


function checkPhoneNumber(nbr){
    re=/^(\+)?(88)?[0-1]{2}[0-9]{9}$/
    return re.test(nbr)
    // console.log(re.test(nbr))

}

let email='jalis.tarif@leads-bd.com'
function emailCheck(email){
    re=/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z])?$/
    return re.test(email)
    console.log(re.test(email))
}

function checkPostCode(post_code){
    re=/^\d{4}$/
    return re.test(post_code)
}