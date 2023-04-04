import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarRespuestasComponent } from './components/listar-respuestas/listar-respuestas.component';
import { CreateRespuestaComponent } from './components/create-respuesta/create-respuesta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { ListarTodosComponent } from './components/listar-todos/listar-todos.component';
import { RegInfoCompaniaComponent } from './components/reg-info-compania/reg-info-compania.component';
import { ListarXCorreoComponent } from './components/listar-x-correo/listar-x-correo.component';
import { EditarInfoCompaniaComponent } from './components/editar-info-compania/editar-info-compania.component';
import { RegInfoGobernanzaComponent } from './components/reg-info-gobernanza/reg-info-gobernanza.component';
import { RegInfoTambientalesComponent } from './components/reg-info-tambientales/reg-info-tambientales.component';
import { RegInfoTsocialesComponent } from './components/reg-info-tsociales/reg-info-tsociales.component';
import { RegInfoTrazabilidadComponent } from './components/reg-info-trazabilidad/reg-info-trazabilidad.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegInfoTsocialesConComponent } from './components/reg-info-tsociales-con/reg-info-tsociales-con.component';
import { MenuComponent } from './components/menu/menu.component';
import { GuiaComponent } from './components/guia/guia.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ListarUserXavanceComponent } from './components/listar-user-xavance/listar-user-xavance.component';
import { AdminClientComponent } from './components/admin-client/admin-client.component';
import { VerInfoCompaniaComponent } from './components/ver-info-compania/ver-info-compania.component';
import { VerInfoTemasAmbientalesComponent } from './components/ver-info-temas-ambientales/ver-info-temas-ambientales.component';
import { VerInfoTemasSocialesComponent } from './components/ver-info-temas-sociales/ver-info-temas-sociales.component';
import { VerInfoTemasSocialesConComponent } from './components/ver-info-temas-sociales-con/ver-info-temas-sociales-con.component';
import { VerInfoTrazabilidadComponent } from './components/ver-info-trazabilidad/ver-info-trazabilidad.component';
import { VerInfoGobernanzaComponent } from './components/ver-info-gobernanza/ver-info-gobernanza.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './components/filter.pipe';
import { KoboComponent } from './components/kobo/kobo.component';
import { Kobo2Component } from './components/kobo2/kobo2.component';
import { FormsComponent } from './components/forms/forms.component';
import { WwfmenuComponent } from './components/wwfmenu/wwfmenu.component';
import { GetTrazabilidadComponent } from './components/get-trazabilidad/get-trazabilidad.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MenuPowerComponent } from './components/menu-power/menu-power.component';
import { TrazabilidadComponent } from './components/trazabilidad/trazabilidad.component';
import { AgriculturaRegenerativaComponent } from './components/agricultura-regenerativa/agricultura-regenerativa.component';
import { AgrovitaComponent } from './components/agrovita/agrovita.component';
import { DashboardAAKMexComponent } from './components/dashboard-aak-mex/dashboard-aak-mex.component';
import { DashboardAAKColComponent } from './components/dashboard-aak-col/dashboard-aak-col.component';
import { AdminFilesComponent } from './components/admin-files/admin-files.component';
import { ListarRespuestasAdminComponent } from './components/listar-respuestas-admin/listar-respuestas-admin.component';
import { ListarIrfComponent } from './components/listar-irf/listar-irf.component';
import { ListarTrazabilidadComponent } from './components/listar-trazabilidad/listar-trazabilidad.component';
import { RegInfoIrfsocialComponent } from './components/reg-info-irfsocial/reg-info-irfsocial.component';
import { RegInfoFuerzalaboralComponent } from './components/reg-info-fuerzalaboral/reg-info-fuerzalaboral.component';
import { ListarRespuestasAdminH1Component } from './components/listar-respuestas-admin-h1/listar-respuestas-admin-h1.component';
import { ListarTodoH1Component } from './components/listar-todo-h1/listar-todo-h1.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarRespuestasComponent,
    CreateRespuestaComponent,
    NavbarComponent,
    ListarTodosComponent,
    RegInfoCompaniaComponent,
    ListarXCorreoComponent,
    EditarInfoCompaniaComponent,
    RegInfoGobernanzaComponent,
    RegInfoTambientalesComponent,
    RegInfoTsocialesComponent,
    RegInfoTrazabilidadComponent,
    LoginComponent,
    RegisterComponent,
    RegInfoTsocialesConComponent,
    MenuComponent,
    GuiaComponent,
    ContactenosComponent,
    ResetPassComponent,
    ListarUserXavanceComponent,
    AdminClientComponent,
    VerInfoCompaniaComponent,
    VerInfoTemasAmbientalesComponent,
    VerInfoTemasSocialesComponent,
    VerInfoTemasSocialesConComponent,
    VerInfoTrazabilidadComponent,
    VerInfoGobernanzaComponent,
    FilterPipe,
    KoboComponent,
    Kobo2Component,
    FormsComponent,
    WwfmenuComponent,
    GetTrazabilidadComponent,
    MenuPowerComponent,
    TrazabilidadComponent,
    AgriculturaRegenerativaComponent,
    AgrovitaComponent,
    DashboardAAKMexComponent,
    DashboardAAKColComponent,
    AdminFilesComponent,
    ListarRespuestasAdminComponent,
    ListarIrfComponent,
    ListarTrazabilidadComponent,
    RegInfoIrfsocialComponent,
    RegInfoFuerzalaboralComponent,
    ListarRespuestasAdminH1Component,
    ListarTodoH1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    NgxPaginationModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
