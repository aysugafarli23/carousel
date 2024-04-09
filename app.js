const slider = document.getElementById("slider");

fetch("https://fakestoreapi.com/products").then((data) => {
    // console.log(data.json());
    return data.json();
})
    .then((jsondata) => {
        console.log(jsondata[0].image);
        //now using map method we will get all url
        jsondata.map((val) => {
            console.log(val.image);
            key = val.id;
            let img = document.createElement("img");
            //now we will call 2nd api for images
            img.src = val.image;
            slider.appendChild(img);
        })
    });
