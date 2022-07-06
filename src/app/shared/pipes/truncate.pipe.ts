import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: {end: number; dots:boolean} = {end: 10, dots: false}): string | undefined {
    const valueModified = value.substring(0,args.end);

    return args.dots? `${valueModified}...`: valueModified;
  }

}
