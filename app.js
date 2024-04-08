const container = document.querySelector('.container')
var currentIndex = 0;
const next = document.querySelector("#next-button")
const prev = document.getElementById('prev-button');
const section = document.querySelector("section")
const mySlides=document.querySelector(".mySlides")


let images=[]
// Data from api 
let data = [];
const showData = () => {
    
  data.map((a )=> {
    // const section = document.createElement('section')
    // container.append(section)
    // const mySlides = document.createElement('div')
    // mySlides.className = "mySlides"
    // section.append(mySlides)
    const photo = document.createElement('img')
    photo.classList.add("photo")
    photo.src = a.image
    images.push(a.image)
    mySlides.append(photo)
    
    
  });
}

console.log(images);

var incrementIndex = function(){
     console.log(currentIndex)
    currentIndex += 1; 
    if(currentIndex > images.length - 1){  
      currentIndex = 0;
    }
    return currentIndex;
  }
  
  var decrementIndex = function(){
    currentIndex -= 1; 
    console.log(currentIndex)
    if(currentIndex < 0){ 
      currentIndex = images.length - 1;
    }
    return currentIndex; 
  }
  
//     next.onclick = function(){
//     photo.setAttribute("src", images[incrementIndex(currentIndex)]);
//   }
  
  prev.onclick = function (){
      photo.setAttribute("src", images[decrementIndex(currentIndex)])
  }


next.addEventListener("click",()=>{
    photo.setAttribute("src", images[incrementIndex(currentIndex)]);
})





// API FETCHING
fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((responseData) => {
    data = responseData;
    showData()
    // console.log(data)
  });

  