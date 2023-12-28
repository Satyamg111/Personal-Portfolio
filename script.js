// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navigation').addClass("sticky");
//         }else{
//             $('.navigation').removeClass("sticky");
//         }
        
//         // if(this.scrollY > 500){
//         //     $('.scroll-up-btn').addClass("show");
//         // }else{
//         //     $('.scroll-up-btn').removeClass("show");
//         // }
//     });
// });

window.onscroll = function(){
    myFunc()
};

function myFunc() {
    if(document.documentElement.scrollTop > 30) {
        document.getElementById('navigation').className = "sticky";
    }
    else {
        document.getElementById('navigation').className = "";
    }
}