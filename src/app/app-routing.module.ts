import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminClientComponent } from './components/admin-client/admin-client.component';
import { AdminFilesComponent } from './components/admin-files/admin-files.component';
import { AgriculturaRegenerativaComponent } from './components/agricultura-regenerativa/agricultura-regenerativa.component';
import { AgrovitaComponent } from './components/agrovita/agrovita.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { DashboardAAKColComponent } from './components/dashboard-aak-col/dashboard-aak-col.component';
import { DashboardAAKMexComponent } from './components/dashboard-aak-mex/dashboard-aak-mex.component';
import { EditarInfoCompaniaComponent } from './components/editar-info-compania/editar-info-compania.component';
import { FormsComponent } from './components/forms/forms.component';
import { GetTrazabilidadComponent } from './components/get-trazabilidad/get-trazabilidad.component';
import { KoboComponent } from './components/kobo/kobo.component';
import { Kobo2Component } from './components/kobo2/kobo2.component';
import { ListarRespuestasAdminH1Component } from './components/listar-respuestas-admin-h1/listar-respuestas-admin-h1.component';
import { ListarRespuestasComponent } from './components/listar-respuestas/listar-respuestas.component';
import { ListarTodosComponent } from './components/listar-todos/listar-todos.component';
import { ListarUserXavanceComponent } from './components/listar-user-xavance/listar-user-xavance.component';
import { ListarXCorreoComponent } from './components/listar-x-correo/listar-x-correo.component';
import { LoginComponent } from './components/login/login.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { RegInfoCompaniaComponent } from './components/reg-info-compania/reg-info-compania.component';
import { RegInfoGobernanzaComponent } from './components/reg-info-gobernanza/reg-info-gobernanza.component';
import { RegInfoTambientalesComponent } from './components/reg-info-tambientales/reg-info-tambientales.component';
import { RegInfoTrazabilidadComponent } from './components/reg-info-trazabilidad/reg-info-trazabilidad.component';
import { RegInfoTsocialesConComponent } from './components/reg-info-tsociales-con/reg-info-tsociales-con.component';
import { RegInfoTsocialesComponent } from './components/reg-info-tsociales/reg-info-tsociales.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { TrazabilidadComponent } from './components/trazabilidad/trazabilidad.component';
import { VerInfoCompaniaComponent } from './components/ver-info-compania/ver-info-compania.component';
import { VerInfoGobernanzaComponent } from './components/ver-info-gobernanza/ver-info-gobernanza.component';
import { VerInfoTemasAmbientalesComponent } from './components/ver-info-temas-ambientales/ver-info-temas-ambientales.component';
import { VerInfoTemasSocialesConComponent } from './components/ver-info-temas-sociales-con/ver-info-temas-sociales-con.component';
import { VerInfoTemasSocialesComponent } from './components/ver-info-temas-sociales/ver-info-temas-sociales.component';
import { VerInfoTrazabilidadComponent } from './components/ver-info-trazabilidad/ver-info-trazabilidad.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listar-respuestas-correo', component: ListarXCorreoComponent}, 
  {path: 'listar-respuestas-admin', component: AdminClientComponent},
  {path: 'listar-respuestas-admin-h1', component: ListarRespuestasAdminH1Component},
  
  {path: 'informacion-compania', component: RegInfoCompaniaComponent},
  {path: 'kobo', component: KoboComponent},
  {path: 'WWF-k', component: Kobo2Component},
  {path: 'trazabilidad', component: TrazabilidadComponent},
  
  {path: 'agrovita', component: AgrovitaComponent},

  
  
  {path: 'dashboard-AAK-Col', component: DashboardAAKColComponent},
  {path: 'dashboard-AAK-Mex', component: DashboardAAKMexComponent},
  
  {path: 'agricultura-regenerativa', component: AgriculturaRegenerativaComponent},
  {path: 'files', component: AdminFilesComponent},
  
  {path: 'WWF-f', component: FormsComponent},

  {path: 'ver-info-compania/:id', component: VerInfoCompaniaComponent},
  {path: 'edit-info-compania/:id', component: EditarInfoCompaniaComponent},

  {path: 'ver-info-gobernanza/:id', component: VerInfoGobernanzaComponent},
  {path: 'edit-info-gobernanza/:id', component: RegInfoGobernanzaComponent},

  {path: 'ver-info-temas-ambientales/:id', component: VerInfoTemasAmbientalesComponent},
  {path: 'edit-info-temas-ambientales/:id', component: RegInfoTambientalesComponent},


  {path: 'ver-info-temas-sociales/:id', component: VerInfoTemasSocialesComponent},
  {path: 'edit-info-temas-sociales/:id', component: RegInfoTsocialesComponent},

  {path: 'ver-info-temas-sociales-con/:id', component: VerInfoTemasSocialesConComponent},
  {path: 'edit-info-temas-sociales-con/:id', component: RegInfoTsocialesConComponent},

  {path: 'ver-info-trazabilidad/:id', component: VerInfoTrazabilidadComponent},
  {path: 'edit-info-trazabilidad/:id', component: RegInfoTrazabilidadComponent},

  {path: 'login', component: LoginComponent},
  {path: 'restablecer-contraseña', component: ResetPassComponent},
  {path: 'contacto', component: ContactenosComponent},
  {path: 'registro', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
