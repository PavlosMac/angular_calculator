import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator.component';

@Component({
    selector: 'my-app',
    template: `
                <div>
                  <my-calculator></my-calculator>
                    </div>
                      `
})
export class AppComponent { name = 'Angular'; }
