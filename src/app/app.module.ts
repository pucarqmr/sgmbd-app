import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoComponent } from './geo/geo.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './geo/map/map.component';
import { ResearchesComponent } from './geo/researches/researches.component';
import { ResearcheDetailComponent } from './geo/researches/researche-detail/researche-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { CidadaoComponent } from './cidadao/cidadao.component';
import { EnsinoComponent } from './cidadao/ensino/ensino.component';
import { MatriculasComponent } from './cidadao/ensino/matriculas/matriculas.component';
import { EscolasComponent } from './cidadao/ensino/escolas/escolas.component';
import { MatriculaComponent } from './cidadao/ensino/matriculas/matricula/matricula.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatriculaListarComponent } from './cidadao/ensino/matriculas/matricula-listar/matricula-listar.component';
import { MatriculaDetalhesComponent } from './cidadao/ensino/matriculas/matricula-detalhes/matricula-detalhes.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { IptuComponent } from './cidadao/iptu/iptu.component';
import { IptuSegundaviaComponent } from './cidadao/iptu/iptu-segundavia/iptu-segundavia.component';
import { IptuListarComponent } from './cidadao/iptu/iptu-listar/iptu-listar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {JwtHelperService} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    GeoComponent,
    HomeComponent,
    HeadComponent,
    FooterComponent,
    MapComponent,
    ResearchesComponent,
    ResearcheDetailComponent,
    CidadaoComponent,
    EnsinoComponent,
    MatriculasComponent,
    EscolasComponent,
    MatriculaComponent,
    MatriculaListarComponent,
    MatriculaDetalhesComponent,
    ManutencaoComponent,
    IptuComponent,
    IptuSegundaviaComponent,
    IptuListarComponent,
    LoginComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [ JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
