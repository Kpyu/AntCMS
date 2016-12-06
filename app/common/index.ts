import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService, UserService } from './api';
import * as pipes from './pipes';

const pipesArr: Array<any> = Object.keys(pipes);
pipesArr.forEach((val, index) => {
    pipesArr[index] = pipes[val];
});
console.log(pipesArr);
@NgModule({
    imports: [
        CommonModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    providers: [UserService],
    declarations: [
        // ...pipesArr,
    ],
    exports: [],
})
export class SelfCommonModule { };