import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  // pipes are pure by default
  pure: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: { id: number }[]): string {
    console.log("transformed: ", value);
    let result = value;

    args.forEach(el => {
      result = result.concat(" ", el.id.toString())
    });

    return result;
  }
}
