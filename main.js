//declaration
var plusBtn = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtn = Array.from(document.querySelectorAll(".fa-minus-circle"));
var trashBtn = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var likeBtn =  Array.from( document.querySelectorAll(".fa-heart"));

//plus button

for (let plus of plusBtn){
    plus.addEventListener("click", function(){
        plus.nextElementSibling.innerHTML++
        total();
    });
}

//minus button

for (let minus of minusBtn){
    minus.addEventListener("click", function(){
        minus.previousElementSibling.innerHTML>0
        ? minus.previousElementSibling.innerHTML--
        : null
        total();
    });
}

//trash button


for (let i in trashBtn){
    trashBtn[i].addEventListener("click",function(){
        cards[i].remove();
        total();
    })
}

//like button

likeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.style.color = 'red';
        total();
    }); 
});

//price

function total(){
    let q = Array.from(document.querySelectorAll(".qute"));
    let up = Array.from(document.querySelectorAll(".unitt-price"));
    let s = 0 ;

        for(let i = 0; i< up.length; i++){
            s= s + q[i].innerHTML *up[i].innerHTML;
        }
        document.getElementById("total-price").innerHTML = s;
        
}