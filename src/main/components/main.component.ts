import {Component} from 'angular2/core';
import {CapturaCampoClinicoComponent} from './captura-campo-clinico.component';
import {CapturaGrupoComponent} from './captura-grupo.component';
import {RouteConfig} from 'angular2/router';
import {RouterOutlet} from 'angular2/router';
import {Router} from 'angular2/router';
import {CargarAlumnosComponent} from './cargar-alumnos.component';
import {CapturaAlumnoComponent} from './captura-alumno.component';
import {CapturaAcademiaComponent} from './captura-academia.component';
import {EditAcademiaComponent} from './edit-academia.component';
import {EditInduccionComponent} from './edit-induccion.component';
@Component({
    moduleId: module.id,
    templateUrl: './main.component.html',
    directives:[
        RouterOutlet
    ]
})

@RouteConfig([
    {
        path: '/academia',
        name: 'Academia',
        component: CapturaAcademiaComponent,
        useAsDefault:true
    },
    {
        path: '/campo-clinico',
        name: 'CampoClinico',
        component: CapturaCampoClinicoComponent
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
    },
    {
        path: '/academia/:id',
        name: 'EditAcademia',
        component: EditAcademiaComponent
    },
    {
      path: '/induccion/:id',
      name: 'EditInduccion',
      component: EditInduccionComponent
    }
])

export class MainComponent {

    selectedTab:string;
    tabs:Object[] = [
        {
            title:'Academia',
            route:'Academia'
        },
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
        this.selectedTab = 'Academia';
    }

    selectTab(tab:string) {
        this.router.navigate([tab]);
        this.selectedTab = tab;
    }
}
