import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeoComponent} from './geo/geo.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from "./geo/map/map.component";
import {ResearchesComponent} from "./geo/researches/researches.component";
import {ResearcheDetailComponent} from "./geo/researches/researche-detail/researche-detail.component";
import {CidadaoComponent} from "./cidadao/cidadao.component";
import {EnsinoComponent} from "./cidadao/ensino/ensino.component";
import {EscolasComponent} from "./cidadao/ensino/escolas/escolas.component";
import {MatriculasComponent} from "./cidadao/ensino/matriculas/matriculas.component";
import {MatriculaComponent} from "./cidadao/ensino/matriculas/matricula/matricula.component";
import {MatriculaListarComponent} from "./cidadao/ensino/matriculas/matricula-listar/matricula-listar.component";
import {MatriculaDetalhesComponent} from "./cidadao/ensino/matriculas/matricula-detalhes/matricula-detalhes.component";
import {ManutencaoComponent} from "./manutencao/manutencao.component";
import {IptuComponent} from "./cidadao/iptu/iptu.component";
import {IptuListarComponent} from "./cidadao/iptu/iptu-listar/iptu-listar.component";
import {IptuSegundaviaComponent} from "./cidadao/iptu/iptu-segundavia/iptu-segundavia.component";
import {MainComponent} from './main/main.component';
import {
  AuthGuardService as AuthGuard
} from './service/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: '', component: MainComponent, children: [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'geo', component: GeoComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: 'researches', component: ResearchesComponent, canActivate: [AuthGuard] },
    { path: 'detail/:id', component: ResearcheDetailComponent, canActivate: [AuthGuard] },
    { path: 'cidadao', component: CidadaoComponent, canActivate: [AuthGuard] },
    { path: 'ensino', component: EnsinoComponent, canActivate: [AuthGuard] },
    { path: 'escolas', component: EscolasComponent, canActivate: [AuthGuard] },
    { path: 'matriculas', component: MatriculasComponent, canActivate: [AuthGuard] },
    { path: 'matricula', component: MatriculaComponent, canActivate: [AuthGuard] },
    { path: 'matricula-listar', component: MatriculaListarComponent, canActivate: [AuthGuard] },
    { path: 'matricula-detalhes', component: MatriculaDetalhesComponent, canActivate: [AuthGuard] },
    { path: 'manutencao', component: ManutencaoComponent, canActivate: [AuthGuard] },
    { path: 'iptu', component: IptuComponent, canActivate: [AuthGuard] },
    { path: 'iptu-listar', component: IptuListarComponent, canActivate: [AuthGuard] },
    { path: 'iptu-segundavia', component: IptuSegundaviaComponent, canActivate: [AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
