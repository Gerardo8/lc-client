import {Component} from 'angular2/core';
import {CapturaCampoClinicoComponent} from './captura-campo-clinico.component';
import {CapturaGrupoComponent} from './captura-grupo.component';
import {RouteConfig} from 'angular2/router';
import {RouterOutlet} from 'angular2/router';
import {Router} from 'angular2/router';
import {CargarAlumnosComponent} from './cargar-alumnos.component';
import {CapturaAlumnoComponent} from './captura-alumno.component';
@Component({
    moduleId: module.id,
    templateUrl: './main.component.html',
    directives:[
        RouterOutlet
    ]
})

@RouteConfig([
    {
        path: '/campo-clinico',
        name: 'CampoClinico',
        component: CapturaCampoClinicoComponent,
        useAsDefault:true
    },
    {
        path: '/grupo',
        name: 'Grupo',
        component: CapturaGrupoComponent
    },
    {
        path: '/alumno',
        name: 'Alumno',
        component: CargarAlumnosComponent
    },
    {
        path: '/alumno/:id',
        name: 'CapturaAlumno',
        component: CapturaAlumnoComponent
    }
])

export class MainComponent {

    selectedTab:string;
    tabs:Object[] = [
        {
            title:'Campo Clinico',
            route:'CampoClinico'
        },
        {
            title:'Grupo',
            route:'Grupo'
        },
        {
            title:'Alumno',
            route:'Alumno'
        }
    ];

    constructor(
        private router:Router
    ) {
        this.selectedTab = 'CampoClinico';
    }

    selectTab(tab:string) {
        this.router.navigate([tab]);
        this.selectedTab = tab;
    }
}
