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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'geo', component: GeoComponent },
  { path: 'map', component: MapComponent },
  { path: 'researches', component: ResearchesComponent },
  { path: 'detail/:id', component: ResearcheDetailComponent },
  { path: 'cidadao', component: CidadaoComponent },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'escolas', component: EscolasComponent },
  { path: 'matriculas', component: MatriculasComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'matricula-listar', component: MatriculaListarComponent },
  { path: 'matricula-detalhes', component: MatriculaDetalhesComponent },
  { path: 'manutencao', component: ManutencaoComponent },
  { path: 'iptu', component: IptuComponent },
  { path: 'iptu-listar', component: IptuListarComponent },
  { path: 'iptu-segundavia', component: IptuSegundaviaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
