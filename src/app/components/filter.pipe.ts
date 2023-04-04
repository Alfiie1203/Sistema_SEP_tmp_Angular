import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for (const post of value) {
      if (post.millName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post)        ;
      }else if (post.codEmpresa.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post)        ;
      }else if (post.departamento.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post)        ;
      }else if (post.ano.toString().indexOf(arg.toString()) > -1) {
        resultPost.push(post)        ;
      }else if (post.periodo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post)        ;
      }
    }
    return resultPost;
  }

}
