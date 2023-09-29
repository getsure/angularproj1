import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string) {
     const words = value.split(" ")
     const titlecaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
     return titlecaseWords.join(" ")
  }

}
