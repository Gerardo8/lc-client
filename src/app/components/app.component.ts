import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {RouterOutlet} from 'angular2/router';
import {MainComponent} from '../../main/components/main.component';

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    directives:[
        RouterOutlet
    ]
})

@RouteConfig([
    {
        path: '/...',
        name: 'Main',
        component: MainComponent,
        useAsDefault:true
    }
])

export class AppComponent {}
