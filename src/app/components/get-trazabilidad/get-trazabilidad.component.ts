import { Component, OnInit } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { async } from '@firebase/util';

@Component({
  selector: 'app-get-trazabilidad',
  templateUrl: './get-trazabilidad.component.html',
  styleUrls: ['./get-trazabilidad.component.css']
})
export class GetTrazabilidadComponent implements OnInit {

  images: String[];
  

  constructor(private storage: Storage) { 
    this.images = [];
  }

  ngOnInit(): void {
  }

  getImages(){
    const imagesRef = ref(this.storage, 'CarpetaTrazabilidad' )
    listAll(imagesRef)
    .then(async response => {
      this.images = [];
      for(let item of response.items){
        const url = await getDownloadURL(item);
        this.images.push(url);        
        this.downloadFile(url);
      }
      
    })
    .catch(error => console.log(error));
  }

  downloadFile(urls: string){  
    
    const downloadIstance = document.createElement('a');
    downloadIstance.href = urls;
    downloadIstance.target = "_blank"

    document.body.appendChild(downloadIstance)
    downloadIstance.click();
    
    
  }


}
