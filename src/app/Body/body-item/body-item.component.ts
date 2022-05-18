import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-item',
  templateUrl: './body-item.component.html',
  styleUrls: ['./body-item.component.css'],
})
export class BodyItemComponent {
  public studentName: string = '';
  public feeBalance: string = '';

  ngOnInit(): void {
    this.studentName = 'Student name';
    this.feeBalance = 'Fee balance';
  }

  public students: { name: string; amount: number }[] = [];

  isempty(): boolean {
    if (this.students.length > 0) {
      return true;
    }
    return false;
  }
  public selectedStudents: { name: string; amount: number }[] = this.students;

  public errMsg = '';

  constructor() {}
  addStudents(form: NgForm) {
    const nameInput = <HTMLInputElement>document.forms[0].elements[0];
    if (!nameInput.value.trim()) {
      this.errMsg = '* Please enter all details';
      setTimeout(() => {
        this.errMsg = '';
      }, 5000);
    } else {
      const value = form.value;
      console.log(value);
      this.students.push(value);
    }
  }

  showAllStudents() {
    this.selectedStudents = this.students;
    return this.selectedStudents;
  }

  getStudentWithBalance() {
    let filteredData = [];
    for (let student of this.students) {
      if (student.amount > 0) {
        filteredData.push(student);
      }
    }

    console.log('clicked');
    this.selectedStudents = filteredData;
    return this.selectedStudents;
  }

  getStudentWBalance() {
    let wbalance = [];
    for (let student of this.students) {
      if (student.amount === 0 || student.amount <= 0) {
        wbalance.push(student);
      }
    }

    console.log('I got clicked');
    this.selectedStudents = wbalance;
    return this.selectedStudents;
  }
}
