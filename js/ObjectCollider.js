export class ObjectCollider {
    constructor(objects) {
         this.objects = objects;   
    }

    check(other) { 
        this.objects.forEach(candidate => {
            if (other === candidate) {
                // debugger;
                return;
            }
            if(other.bounds.overlaps(candidate.bounds)) {
                other.collides(candidate);
                candidate.collides(other);
            }
        });
    }
}