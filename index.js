



var cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    }, 
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    }, 
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
 
];

const btn=document.querySelectorAll('.inner')
const image=document.querySelectorAll('img')



window.addEventListener("click",()=>{
    for(let i=0; i<cards.length;i++){
        image[i].src=cards[i].img
    }
})
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        // image[i].classList.add('show')
       for(let j=0; j<image.length; j++){
        if(image[i].src==image[j].src){
            image[i].classList.add('show')
            setTimeout(() => {
                image[i].classList.add('show')
            }, 1);
        }
        else{
            image[j].classList.remove('show')
        }
       }
        
    })
    
}
        // for(let j=0; j<image.length; j++){
            // if(image[i].src == image[j].src){
                // console.log(image[j])
                // image[i].style.display='block'
        //         image[i].classList.add('show')
        //         // image[j].classList.add('show')
            // }
        //     else if(image[i].src !==image[j].src){
        //         image[i].classList.add('show')
        //         // setTimeout(() => {
        //         //     image[i].style.display='none'
        //         // }, 500);
        //     }
        //     // else{
        //     //     image[j].classList.remove('show')
        //     // }
        // }

    //     setTimeout(() => {
    //         image[i].classList.remove('show')
    //         }, 1000);
      
    






// for(let j=0; j<btn.length; j++){
//     btn[j].addEventListener('click',()=>{
//         // image[j].classList.add('show')
//     })
//     for(let i=0; i<image.length; i++){

//         if(image[j].src==image[i].src){
//             // image[i].style.display='block'
//             image[j].classList.add('show')
//             // image[i].classList.add('show')
//         //    btn[j].removeEventListener('click',true);
//         //    btn[i].removeEventListener
//             // image[j].classList.add('inner-matched')
//         //    alert ('matched')
//         }
//         else{
//             // image[i].classList.add('show')
//             setTimeout(() => {
//                 image[i].classList.remove('show')
//                 image[j].classList.remove('show')
//             }, 1000);
            
//         }
//         // console.log(image[i]);
//         // console.log(image[j]);
//     }
// }




