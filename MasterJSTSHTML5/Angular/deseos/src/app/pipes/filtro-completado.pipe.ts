import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(lista: Lista[], completada: boolean = true): Lista[] {
   return lista.filter(list=> list.terminada === completada);
  }

}
