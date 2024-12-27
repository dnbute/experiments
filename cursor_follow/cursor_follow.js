async function moveImg(e) {
    let x = e.clientX;
    let y = e.clientY;
    // let cursor = document.querySelector('div.cursor img');
    // cursor.style.left = x - 50 + 'px';
    // cursor.style.top = y - 50 + 'px';

    await new Promise(r => setTimeout(r, 100));
    let root = document.querySelector(':root');
    root.style.setProperty('--oldX', getComputedStyle(root).getPropertyValue('--newX'));
    root.style.setProperty('--oldY', getComputedStyle(root).getPropertyValue('--newY'));
    root.style.setProperty('--newX', x - 50 + 'px');
    root.style.setProperty('--newY', y - 50 + 'px');

    console.log(getComputedStyle(root).getPropertyValue('--newX'));
    console.log(getComputedStyle(root).getPropertyValue('--newY'));
}

function init() {
    let body = document.querySelector('html');
    body.onmousemove = moveImg;
}
