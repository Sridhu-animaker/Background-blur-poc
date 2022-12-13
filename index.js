const element = document.getElementById('canvas')
element.style.height = document.getElementsByTagName('body')[0].clientHeight;
element.style.width = document.getElementsByTagName('body')[0].clientWidth + 'px';
console.log(document.getElementsByTagName('body')[0])
initDraw(element);

let isBlur = false;

function initDraw(canvas) {
    window.addEventListener('scroll', (e) => {
        element.style.height = Math.max(document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)

    })
    function setMousePosition(e) {
        mouse.x = e.clientX + document.body.scrollLeft;
        mouse.y = e.clientY + document.body.scrollTop;
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var rectangleElement = null;

    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (rectangleElement !== null) {
            rectangleElement.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            rectangleElement.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            rectangleElement.style.left = /* (mouse.x - mouse.startX < 0) ? *//*  mouse.x + 'px' : */ mouse.startX + 'px';
            rectangleElement.style.top = /* (mouse.y - mouse.startY < 0) ?  *//* mouse.y + 'px' :  */mouse.startY + 'px';
        }
    }

    canvas.onmousedown = (e) => {
        mouse.startX = mouse.x;
        mouse.startY = mouse.y;
        rectangleElement = document.createElement('div');
        rectangleElement.className = 'rectangle'
        canvas.appendChild(rectangleElement)
        canvas.style.cursor = "crosshair";
    }

    canvas.onmouseup = (e) => {
        rectangleElement = null;
        canvas.style.cursor = "default";
    }
}

function clearBlur() {
    console.log(document.getElementsByClassName('rectangle').length);
    if (document.getElementsByClassName('rectangle').length) {
        element.innerHTML = ""
    }

}









// To blur the perticular div element

// window.addEventListener('mouseover', (e)=>{
//     console.log(e)
//     e.target.addEventListener('click', (ev)=>{
//     if(!isBlur){
//         isBlur = true;
//         e.target.className = 'test'
//     } else {
//         isBlur = false;
//         e.target.className =''
//     }
// }
//     )
// })