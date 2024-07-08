fetch('https://fakestoreapi.com/products').then(data => {
    //console.log(data);
    return data.json();
}).then((completedata =>{
    console.log(completedata);
    document.getElementById("first").innerHTML=completedata[2].title
    document.getElementById("1price").innerHTML=completedata[2].price
    document.getElementById("1dis").innerHTML=completedata[2].description

    document.getElementById("second").innerHTML=completedata[5].title
    document.getElementById("2price").innerHTML=completedata[5].price
    document.getElementById("2dis").innerHTML=completedata[5].description

    document.getElementById("third").innerHTML=completedata[3].title
    document.getElementById("3price").innerHTML=completedata[3].price
    document.getElementById("3dis").innerHTML=completedata[3].description
    
}))