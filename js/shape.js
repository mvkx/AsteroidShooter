import { Vec2, randomInt, toRadians } from "./math.js";
import { ObjectBounds } from "./ObjectBounds.js"

export class Shape {
    constructor(x, y, r, a) {
        this.pos = new Vec2(x, y);
        this.acc = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.mass = randomInt(1, 5);
        this.momentum = new Vec2(Math.random() * 0.5, Math.random() * 0.5);
        this.r = randomInt(75, 125);
        this.a = toRadians(randomInt(360));
        this.rspeed = Math.random() * 0.3 * (1 / this.r); 
        this.sides = {};
        this.bounds = new ObjectBounds(this.pos, this.r * 1.05);
        
        this.createShape();
        this.applyForce(this.momentum);
    }

    createShape(){
        const vertexCount = randomInt(3, 7);
        for (let i = 0; i < vertexCount; i++) {
            this.sides[i] = new Object;
            this.sides[i].r = this.r;
            let angleOffset = randomInt(-5, 5) * 0.01 * Math.PI * 2;
            this.sides[i].a = (Math.PI * 2 / vertexCount) * i + this.a + angleOffset;
        }
    }

    applyForce(f) {
        this.acc.add(Vec2.div(f, this.mass));
    }

    update() {
        this.a += this.rspeed;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    draw(context) {
        context.strokeStyle = 'rgba(255, 255, 255, 1)';
        context.fillStyle = 'white';
        
        // context.fillRect(this.pos.x,this.pos.y,2,2);

        // Draw shape
        context.beginPath();
        let tempx = this.sides[0].r * Math.cos(this.sides[0].a + this.a);
        let tempy = this.sides[0].r * Math.sin(this.sides[0].a + this.a);
        context.moveTo(this.pos.x + tempx, this.pos.y + tempy);
        
        for(let i = 1; i < Object.keys(this.sides).length; i++) {
            tempx = this.sides[i].r * Math.cos(this.sides[i].a + this.a);
            tempy = this.sides[i].r * Math.sin(this.sides[i].a + this.a);
            context.lineTo(this.pos.x + tempx, this.pos.y + tempy);
        }

        context.closePath();
        context.lineWidth = 2; 
        context.stroke();
        // Draw collider bounds
        this.bounds.draw(context);
    }

    collides(other) {
        // this.vel.mult(-1);
        // console.log('collision');
    }
}