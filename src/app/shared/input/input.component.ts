import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() inputType: string;
  @Input() control: FormControl;
  @Input() controlType: string = 'input';

  constructor() {}

  ngOnInit() {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}

// export class InputComponent implements OnInit {
//   @Input() label: string;
//   @Input() inputType: string;
//   @Input() control: FormControl;
//   @Input() controlType: string = 'input';

//   constructor() {}

//   ngOnInit() {}

//   showErrors() {
//     const { dirty, touched, errors } = this.control;
//     return dirty && touched && errors;
//   }
// }

// export class InputComponent implements OnInit {
//   @Input() label: string;
//   @Input() control: FormControl;
//   @Input() inputType: string;
//   @Input() controlType = 'input';

//   constructor() {}

//   ngOnInit() {}

//   showErrors() {
//     const { dirty, touched, errors } = this.control;
//     return dirty && touched && errors;
//   }
// }
