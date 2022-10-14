var allProducts = document.querySelectorAll ("#buyNow")

var content = document.querySelector("#content")

var btn = document.querySelector("#addToCart")
var total = document.querySelector("#totalprice")

var totalPrice = 0;
var i=0
allProducts.forEach(function (item){
    item.onclick = function (){

      totalPrice +=  parseInt (item.getAttribute ("price"))
      content.innerHTML += (++i) + ('-') + item.getAttribute('name')  + " <br> " ;

      if (content.innerHTML != "" ) {
          btn.style.display = "block"
          total.style.display="block"
      }
    }
})
btn.onclick = function (){
  // console.log(totalPrice)
  total.innerHTML=totalPrice
}