
function imgslidder(pic)
{
    document.querySelector('.picture').src=pic;
}

function changeclr(color)
{
    let circle=document.querySelector('.circle');
    let star=document.querySelector('.span');
    let button=document.querySelector('#button');
    circle.style.background=color;
    star.style.color=color;
    button.style.background=color;

}