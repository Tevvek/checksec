import { CustomException } from "./CustomException";

export class NotFoundException extends CustomException {

    constructor() {
        const name = 'NotFoundException',
              message = 'Nothing was found. Check the endpoint or the query.';
        super(name, message);
    }
}