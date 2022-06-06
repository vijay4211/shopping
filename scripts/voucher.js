//  20220606151347
// https://masai-vouchers-api.herokuapp.com/api/vouchers

  let list = JSON.parse(localStorage.getItem("user")) || [];

//   console.log(list)


  const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
//   console.log(url)

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)

    let data = res.vouchers;
    append(data)
})
.catch(function(err){
    console.log(err)
});


function append(data){

    console.log(data)
    data.map(function(el){
        let box = document.createElement("div");

        let image = document.createElement("img")
        image.innerText = el.vouchers.image;



        box.append(image)
        
    })
}


