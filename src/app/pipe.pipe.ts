import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

 transform(value: number, exponent = 1): number {
     return Math.pow(value, exponent);
   }

}
