import { dist } from "./math.js"

export class ObjectBounds {
    constructor(pos, r){
        this.pos = pos;
        this.r = r;
        this.proximity = false;
    }

    overlaps(other){
        const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < (this.r + other.r)){
            this.proximity = true;
            return true;
        }
        return false;
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = this.proximity ? 'orangered' : 'orange';
        context.lineWidth = 1;
        context.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
        context.stroke();
    }
}