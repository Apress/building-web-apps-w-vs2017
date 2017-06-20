import {Injectable} from '@angular/core';


@Injectable()
export class LoggingService {

    constructor() { }

    logError(message : string, err : any) {
        this.showPopup(message);
        console.log(err);
    }

    showPopup(message: string) {
        alert(message);
    }

    log(message: string) {
        console.log(message);
    }
}
