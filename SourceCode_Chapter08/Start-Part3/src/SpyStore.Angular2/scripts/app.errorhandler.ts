import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private _logger: LoggingService) {
    }

    handleError(error) {
        this._logger.logError("Unhandled error see console.", error);
    }
}