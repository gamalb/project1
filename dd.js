let arr=["image/1.jpg","image/2.jpg","image/3.jpg","image/images.jpg"];
let img=document.querySelector(".header-section1 img");
let i=0;
function gamal()
{
    img.setAttribute("src",arr[i]);
    if(i<arr.length-1)
    {
        i++;
    }
    else
    {
        i=0;
    }
    setTimeout(function(){
        gamal();
    },2000)

}

gamal();

