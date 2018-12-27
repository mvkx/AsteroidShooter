import { Shape } from './Shape.js';
import { randomInt } from './math.js'
import { ObjectCollider } from './ObjectCollider.js'

const canvas = document.getElementById("screen");
canvas.width = 1920;
canvas.height = 1080;

const context = canvas.getContext("2d");
context.fillStyle = 'rgb(0, 0, 19)';
context.fillRect(0,0,canvas.width, canvas.height);

const rocks = []

for(let i = 0; i < 2; i++) {
    let x = canvas.width / 2 + i * 200;
    let y = canvas.height / 2;
    let o = new Shape(x, y, randomInt(10, 100));
    rocks.push(o);
}
const objectCollider = new ObjectCollider(rocks);

function main(){
    context.fillStyle = 'rgb(0, 0, 19)';
    context.fillRect(0,0,canvas.width, canvas.height);
    
    rocks.forEach( rock => {
        rock.update();
        objectCollider.check(rock);
        rock.draw(context);
    });

    requestAnimationFrame(main);
}

requestAnimationFrame(main);
