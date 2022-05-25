import { Element } from '@angular/compiler/src/render3/r3_ast';
import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
// export class ModalComponent implements OnInit {
//   @Output() dismiss = new EventEmitter();

//   constructor(private el: ElementRef) {}

//   ngOnInit() {
//     document.body.appendChild(this.el.nativeElement);
//   }

//   ngOnDestroy() {
//     this.el.nativeElement.remove();
//   }

//   onDismissClick() {
//     this.dismiss.emit();
//   }
// }

// export class ModalComponent implements OnInit {
//   @Output() dismiss = new EventEmitter();

//   constructor(private el: ElementRef) {}

//   ngOnInit() {
//     document.body.append(this.el.nativeElement);
//   }

//   ngOnDestroy(): void {
//     this.el.nativeElement.remove();
//   }

//   onDismissClick() {
//     this.dismiss.emit();
//   }
// }
export class ModalComponent implements OnInit {
  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.append(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }
}
