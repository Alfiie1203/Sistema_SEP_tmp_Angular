import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {listAll} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SepService {

  constructor(private firestore: AngularFirestore) { }

  agregarInformacionCompania(informacionCompania: any): Promise<any>{
    return this.firestore.collection('RespuestasSEP2022H2').add(informacionCompania);
  }

  agregarUser(informacionUser: any): Promise<any>{
    return this.firestore.collection('usuarios').add(informacionUser);
  }

  agregarUserA(informacionUser: any): Promise<any>{
    return this.firestore.collection('usuariosAvance2023').add(informacionUser);
  }

  getInformacion(): Observable<any>{
    return this.firestore.collection('RespuestasSEP2022H2', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  getInformacion2022h1(): Observable<any>{
    return this.firestore.collection('RespuestasSEP', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  getUsers(): Observable<any>{
    return this.firestore.collection('usuariosAvance2023').snapshotChanges();
  }

  getInformacionById(id: string): Observable<any> {
    return this.firestore.collection('RespuestasSEP2022H2').doc(id).snapshotChanges();
  }

  editIformacion(id:string, data:any): Promise<any> {
    return this.firestore.collection('RespuestasSEP2022H2').doc(id).update(data);
  }

  editUser(id:string, data:any): Promise<any> {
    return this.firestore.collection('usuariosAvance2023').doc(id).update(data);
  }

  eliminar(id:string): Promise<any>{
    return this.firestore.collection('RespuestasSEP2022H2').doc(id).delete();
  }


  filtrarPermisos(informacion:any,email:any){


    let informacionCorreo = [];
    for (let i = 0; i < informacion.length; i++) {
          if (email == "lourdes.hernandez@aak.com" && informacion[i]["AAKMX"] == "SI") {
            informacionCorreo.push(informacion[i])   
          } else if (email == "lilia.gonzalez@aak.com" && informacion[i]["AAKMX"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if (email == "carolina.lopez@aak.com" && informacion[i]["AAKCO"] == "SI") {
            informacionCorreo.push(informacion[i])   
          } else if (email == "jose_morenoperalta@cargill.com" && informacion[i]["CARGIL"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if (email == "diego_munoz@cargill.com" && informacion[i]["CARGIL"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if (email == "catalina_roman@cargill.com" && informacion[i]["CARGIL"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if (email == "georgios_tolis@cargill.com" && informacion[i]["CARGIL"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if (email == "santiago.cortes@ldc.com" && informacion[i]["LDC"] == "SI") {
            informacionCorreo.push(informacion[i])
          } else if ((email == "jonathan.escolar@aak.com") && (informacion[i]["LDC"] == "SI" || informacion[i]["AAKMX"] == "SI")) {
            informacionCorreo.push(informacion[i])
          }else if ((email == "luis.rangel@proforest.net")) {
            informacionCorreo.push(informacion[i])
          }else if ((email == "alexandra@proforest.net")) {
            informacionCorreo.push(informacion[i])
          }else if ((email == "katherine.rengifo@proforest.net")) {
            informacionCorreo.push(informacion[i])
          }
        }



    return informacionCorreo;
  }



}
