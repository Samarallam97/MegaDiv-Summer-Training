let openMenu=document.querySelector(".bars")
let closeMenu=document.querySelector(".closeMenu")
let menu=document.querySelector(".links")

openMenu.onclick=()=>menu.style.left="0"
closeMenu.onclick=()=>menu.style.left="-100%"
/////////////////////////////////////////////

let secImg=document.querySelectorAll(".secondary img")
let secImgBody=document.querySelectorAll(".body .secondary img")
let secImgLayer=document.querySelectorAll(".layer .secondary img")

let mainImg=document.querySelectorAll(".main img")



function applyAll(arr1,arr2) {
    arr1.forEach(function (ele,index) { 
        ele.onclick=function (e) { 

            mainImg[0].src=e.target.src
            mainImg[1].src=e.target.src
            secImg.forEach(function (ele){
            ele.classList.remove("active")
            })     
            e.target.classList.add("active")
            arr2[index].classList.add("active")

        }
     })
}

applyAll(secImgBody,secImgLayer)
applyAll(secImgLayer,secImgBody)



 /////////////////////////////////////////////

 
 let plus=document.querySelector(".plus")
 let count=document.querySelector(".count")
 let minus=document.querySelector(".minus")
 let i=1
 let j;

 plus.onclick=function () { 
    count.innerHTML=i
    i++
     j=count.innerHTML
}

minus.onclick=function () {    
    if (j>0) {
        count.innerHTML=j-1
        i=j
        j--
    }
}


////////////////////////////////////////////////////
let layer=document.querySelector(".layer")
let closeBtn=document.querySelector(".close")
mainImg[0].onclick=()=>{
    layer.style.display="block"
    layer.onclick=(e)=>{
        if (e.target.closest("img") || e.target.closest("i")){

        }
        else{
            layer.style.display="none"
            layer.style.cursor="pointer"
            e.stopPropagation()
        }
            
    }
}

closeBtn.onclick=()=>{
    layer.style.display="none"
}

// document.getElementById("list").addEventListener('click', (e) => {
// 	 {
//         console.log("IMAGE")
//     } else {
//         console.log("NOT IMAGE")
//     }
// })

//////////////////////////// sliding

let left=document.querySelector(".left")
let right=document.querySelector(".right")

left.onclick=(e)=>{
    for (let i = 0; i < 4; i++) {
      if(secImgLayer[i].classList.contains("active")){
        if (i==0) {
            i=4;
        }


        mainImg[1].src=secImgLayer[i-1].src
        secImg.forEach(function (ele) { 
            ele.classList.remove("active")
         })
         secImgLayer[i-1].classList.add("active")
         secImgBody[i-1].classList.add("active")
         mainImg[0].src=secImgLayer[i-1].src
      }      
    }
}



right.onclick=(e)=>{
    for (let i = 0; i < 4; i++) {
       
      if(secImgLayer[i].classList.contains("active")){
        if (i==3) {
            i=-1;
        }
        mainImg[1].src=secImgLayer[i+1].src
        secImg.forEach(function (ele) { 
            ele.classList.remove("active")
         })
         secImgLayer[i+1].classList.add("active")
         secImgBody[++i].classList.add("active")
         mainImg[0].src=secImgLayer[i+1].src
      }      
    }
}


/////////////////////////////////
let big=document.querySelector(".big img")

let rightSlide=document.querySelector(".rightSlide")
let leftSlide=document.querySelector(".leftSlide")
let n=1;
let p;

rightSlide.onclick=()=>{
    if(n<4){
        if(n==3){
            n=0
        }
    big.src=secImgBody[n].src
    p=n;
    n++;
    }
}
leftSlide.onclick=()=>{
    if(p>=1){
        if(p==1){
            p=4
        }
    big.src=secImgBody[p-1].src;
    n=p;
    p--;
    }
}


///////////////////////////

let cartIcon=document.querySelector(".cartIcon")
let myCart=document.querySelector(".myCart")
cartIcon.onclick=()=>{
    if(myCart.style.display=="none"){
        myCart.style.display="block"
        document.body.style.height="100vh"
        document.body.style.overflow="hidden"
    }
    else{
        myCart.style.display="none"
        document.body.style.overflow="auto"
    }
}

////////////////////////////////////

let btn=document.querySelector(".cart button")
let content=document.querySelector(".myCart .content")
let products;
if(localStorage.getItem('products')==null){
    content.innerHTML=`Your cart is empty`;
    content.style="display:flex;justify-content:center;align-items:center;"
}
else{
    products=localStorage.getItem('products') 
    content.innerHTML=products;
    content.style="display:flex"
}
btn.onclick=()=>{
    if (count.innerHTML>0) {
        products=`
<div class="product">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${count.innerHTML} <span>$${count.innerHTML*125}.00</span></p>
    </div>
    <i class="trash fa-solid fa-trash-can" onclick="del()"></i>
</div>
<button>Checkout</button>`
    
localStorage.setItem('products',products)
content.innerHTML=products;
content.style="display:flex"
    }
        
}

function del() {

content.innerHTML=`Your cart is empty`   
content.style="display:flex;justify-content:center;align-items:center;"
}