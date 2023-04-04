import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-user-xavance',
  templateUrl: './listar-user-xavance.component.html',
  styleUrls: ['./listar-user-xavance.component.css']
})
export class ListarUserXavanceComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];

  constructor(private auth: AuthService, private sepService: SepService,private router: Router) { }

  ngOnInit(): void {    
    this.getUser()
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  getUser(){
    this.sepService.getUsers().subscribe(data=>{
      this.informacion = [];
      data.forEach((element: any) => {
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    });
  }


}
