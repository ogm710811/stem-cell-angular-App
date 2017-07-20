export class Condition {
    private condition  : String;
    private code       : String;
    private counts     : Number;

    constructor( condition: String, code: String, counts: Number ) {
        this.condition = condition;
        this.code      = code;
        this.counts    = counts;
    }

}