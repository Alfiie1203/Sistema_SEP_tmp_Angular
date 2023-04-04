import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { SepService } from './sep.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  adminUser = ["alfredo.1203@hotmail.com","alexandra@proforest.net"]

  constructor(private auth: AngularFireAuth, private sepService: SepService, private router: Router, private toastr: ToastrService) { }


 
  async login(email:string,pass:string){
    this.auth.signInWithEmailAndPassword(email,pass).then(value =>{

      if (email == "jose_morenoperalta@cargill.com") {
        this.router.navigate(['/listar-respuestas-admin']);
      }else if (email == "lourdes.hernandez@aak.com" ){
        this.router.navigate(['/listar-respuestas-admin']);
      }else if (email == "lilia.gonzalez@aak.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "carolina.lopez@aak.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "georgios_tolis@cargill.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "catalina_roman@cargill.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "santiago.cortes@ldc.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "lilia.gonzalez@aak.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "jonathan.escolar@aak.com"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "alexandra@proforest.net"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else if (email == "luis.rangel@proforest.net"){
        this.router.navigate(['/listar-respuestas-admin']);          
      }else{
        this.router.navigate(['/listar-respuestas-correo']);
      }
      
    })
    .catch (error =>  {
      console.log("Error en login", error);
      this.toastr.error("La contraseña o el usuario ingresados no son validos, verifique e intente nuevamente.",'Algo salio mal !',{
        timeOut: 10000,
        progressBar: true
      });
      return null
    })

  }

  async loginGoogle(email:string,pass:string){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(value =>{

      for (let i = 0; i < this.adminUser.length; i++) {
        const element = this.adminUser[i];
        if (email == this.adminUser[i]) {
          this.router.navigate(['/listar-respuestas']);
        }else{
          this.router.navigate(['/listar-respuestas-correo']);
        }
        
      }
      
    })
    .catch (error =>  {
      console.log("Error en login", error);
      this.toastr.error("La contraseña o el usuario ingresados no son validos, verifique e intente nuevamente.",'Algo salio mal !',{
        timeOut: 10000,
        progressBar: true
      });
      return null
    })

  }
  
  async resetPass(email:string){
    try{
      return this.auth.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error)}
  }

  async register(email:string,pass:string){    

    const act: any = {
      email: email,
    }
    this.auth.createUserWithEmailAndPassword(email,pass).then(value =>{
      
          this.sepService.agregarUser(act)
          if (email == "jose_morenoperalta@cargill.com") {
            this.router.navigate(['/listar-respuestas-admin']);
          }else if (email == "lourdes.hernandez@aak.com" ){
            this.router.navigate(['/listar-respuestas-admin']);
          }else if (email == "lilia.gonzalez@aak.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "carolina.lopez@aak.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "georgios_tolis@cargill.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "catalina_roman@cargill.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "santiago.cortes@ldc.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "lilia.gonzalez@aak.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "jonathan.escolar@aak.com"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "alexandra@proforest.net"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else if (email == "luis.rangel@proforest.net"){
            this.router.navigate(['/listar-respuestas-admin']);          
          }else{
            this.router.navigate(['/listar-respuestas-correo']);
          }
        
        
    })
    .catch (error =>  {
      console.log("Error en login", error);
      this.toastr.error(error,'Algo salio mal !',{
        timeOut: 10000,
        progressBar: true
      });
      return null
    })

  }

  obtenerUser(){
    return this.auth.authState;
  }

  logOut(){
    this.auth.signOut();
  }

}
