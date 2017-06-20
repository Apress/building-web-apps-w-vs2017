import { OpaqueToken } from '@angular/core';

export interface AppConfig {
    apiEndpoint: string;
}
export let APP_CONFIG = new OpaqueToken('AppConfig');
export const SPYSTORE_CONFIG: AppConfig = {
    apiEndpoint: 'http://localhost:40001/api/'
};