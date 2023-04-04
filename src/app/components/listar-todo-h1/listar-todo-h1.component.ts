import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-todo-h1',
  templateUrl: './listar-todo-h1.component.html',
  styleUrls: ['./listar-todo-h1.component.css']
})
export class ListarTodoH1Component implements OnInit {
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];
  informacionCorreo: any[] = [];

  email = localStorage.getItem('email');
  
  fileName= 'RespuestasCompletas.xlsx';

  constructor(private auth: AuthService, private sepService: SepService,private router: Router) {

  }

  ngOnInit(): void {
    this.getInformacion();
    
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-com');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }



  getInformacion(){
    this.sepService.getInformacion2022h1().subscribe(data=>{
      this.informacion = [];
      data.forEach((element: any) => {
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

      this.informacionCorreo = this.sepService.filtrarPermisos(this.informacion,this.email);
      
    });
  }





  eliminar(id: string){
    this.sepService.eliminar(id).then(() =>{
      this.router.navigate(['/listar-respuestas'])
    });
  }

  buttonAgregar(){
    this.router.navigate(['/informacion-compania'])
  }

}
