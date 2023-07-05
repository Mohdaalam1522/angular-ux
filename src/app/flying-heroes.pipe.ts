import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: any) {
        return null;
  }

}
