export class Vec2 {
    constructor(x, y, mag = 1){
        this.x = x;
        this.y = y;
        this.mag = mag;
    }

    add(a){
        return this.x += a.x, this.y += a.y;
    }

    sub(a){
        return this.x -= a.x, this.y -= a.y;
    }

    mult(a){
        return this.x *= a, this.y *= a;
    }

    div(a){
        return this.x /= a, this.y /= a;
    }

    static div(a, b){
        return new Vec2(a.x/b, a.y/b);
    }

    static rand() {
        const a = Math.random() * Math.PI * 2;
        const r = 1; // TODO: take in the magnitude as a parameter, but use unit vectors for now
        return new Vec2(r*Math.cos(a), r*Math.sin(a));
    }
}

export function randomInt(a, b){
    return b ? Math.floor(Math.random() * (b - a + 1) + a) : Math.floor(Math.random() * (a - 0 + 1) + 0);
}

export function toRadians(a){
    return a * Math.PI / 180;
}

export function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
}