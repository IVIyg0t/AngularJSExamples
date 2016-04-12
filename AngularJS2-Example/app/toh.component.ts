import {Component}      from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent}   from './app.component';
import {AppService}     from './app.service';

@Component({
    select: 'my-toh',
    template: `<h1>ToH Component</h1>`,
    directive: [AppComponent],
    providers: [
        HTTP_PROVIDERS,
        AppService,
    ]
})

export class ToHComponent { }