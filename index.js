const element = document.getElementById('canvas')
initDraw(element);

let isBlur = false;

function initDraw(canvas) {

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
    let counter = 0;
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    var rectangleElement = null;
    var rect = null;

    window.addEventListener('mousedown', (e) => {
        if (e.target.className !== 'rectangle' && e.target.className !== 'innerRect' ) {
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            rectangleElement = document.createElement('div');
            rect = document.createElement('div');
            rectangleElement.className = 'rectangle';
            rect.className = 'innerRect';
            rectangleElement.id = `rect${counter++}`;
            rect.id = `irect${counter++}`;
            rectangleElement.appendChild(rect)
            canvas.appendChild(rectangleElement)
            canvas.style.cursor = "crosshair";
        } else if (e.target.className === 'innerRect') {
            rectangleElement = document.getElementById(e.target.offsetParent.id)
        }
    })

    window.addEventListener('mousemove', function (e) {
        if (e.target.className !== 'rectangle' && e.target.className !== 'innerRect' ) {
            setMousePosition(e);
            if (rectangleElement !== null) {
                rectangleElement.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                rectangleElement.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                rectangleElement.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                rectangleElement.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
            }
        } else if (e.target.className === 'innerRect'){
            setMousePosition(e);
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            if (rectangleElement !== null) {
                rectangleElement.style.top = `${rectangleElement.offsetTop - pos2}px`;
                rectangleElement.style.left = `${rectangleElement.offsetLeft - pos1}px`;
            }
        }
    })

    window.addEventListener('mouseup', (e) => {
        rectangleElement = null;
        canvas.style.cursor = "default";
    })
}

function clearBlur() {
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