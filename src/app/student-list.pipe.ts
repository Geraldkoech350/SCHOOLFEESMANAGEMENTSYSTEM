import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentList'
})
export class StudentListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
