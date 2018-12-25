import { dist } from "./math.js"

export class ObjectBounds {
    constructor(pos, r){
        this.pos = pos;
        this.r = r;
    }

    overlaps(other){
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        // console.log(`distance: ${d}, threshold: ${this.r / 2 + other.r / 2}, overlap: ${d < this.r + other.r}`);
        return d < (this.r + other.r);
    }
}