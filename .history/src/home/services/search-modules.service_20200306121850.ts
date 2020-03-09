import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchModulesService {
    findAllSearchModules(): any {
        return [
            {
                "ModuleName": "HOTEL"
            },
            {
                "ModuleName": "FLIGHT"
            },
            {
                "ModuleName": "CAR"
            },
            {
                "ModuleName": "SIGHTSEEN"
            },
            {
                "ModuleName": "BUS"
            }
        ];
    }
}
