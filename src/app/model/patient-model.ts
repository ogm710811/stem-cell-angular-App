export class Patient {
    private pictureAddress  : String;
    private firstName       : String;
    private lastName        : String;
    private birthDate       : Date;
    private address         : Array<String>;
    private email           : String;
    private phoneNumber     : String;
    private condition       : String;
    private procedure       : String;
    private deliveryMethod  : String;
    private followUp        : String;

    constructor( pictureAddress: String, firstName: String, lastName: String, 
                 birthDate: Date, address: Array<String>, email: String,
                 phoneNumber: String, condition: String, procedure: String,
                 deliveryMethod: String, followUp: String) {

        this.pictureAddress = pictureAddress;
        this.firstName      = firstName;
        this.lastName       = lastName;
        this.birthDate      = birthDate;
        this.address        = address;
        this.email          = email;
        this.phoneNumber    = phoneNumber;
        this.condition      = condition;
        this.procedure      = procedure;
        this.deliveryMethod = deliveryMethod;
        this.followUp       = followUp;
    }

}