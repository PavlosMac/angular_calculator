import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']

})
export class CalculatorComponent  {



  private runningTotal = 0;
  private newTotal = true;


  numberButtonClick(event) {
//I will be able to keep concatenating numbers to the first
    if(this.runningTotal == 0 || this.newTotal) {
            this.runningTotal = '';
            this.newTotal = false;
          }

    this.runningTotal = parseFloat('' + this.runningTotal + event.target.value);

  }

  operativeButtonClick(event) {

    if(event.target.value == 'AC'){
      this.runningTotal = 0;
    }
  }


}
