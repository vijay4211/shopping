
  

  let arr = JSON.parse(localStorage.getItem("user")) || [];
function doOperation(){

    // console.log("hello")
    event.preventDefault();

   let form =  document.getElementById("form1").value;
   let name =   document.getElementById("name").value;
   let email =  document.getElementById("email").value;
   let address =   document.getElementById("address").value;
   let amount =  document.getElementById("amount").value;
// console.log(amount)

   let obj = {
       name:name,
       email:email,
       address:address,
       amount:amount,
   };


   arr.push(obj)

  localStorage.setItem("user",JSON.stringify(arr))


}