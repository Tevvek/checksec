export class CustomException {
    
    name:String;
    message:String;

    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}