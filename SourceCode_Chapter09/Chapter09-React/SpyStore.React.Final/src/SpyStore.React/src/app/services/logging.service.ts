
export class LoggingService {


    logError(err) {
        console.error(err);
    }

    logMessage(msg) {
        console.log(msg);
    }

    warn(msg) {
        console.warn(msg);
    }
}
