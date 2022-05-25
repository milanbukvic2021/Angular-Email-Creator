import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.authForm.setErrors({ credentials: true });
        }
      },
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css'],
// })
// export class SigninComponent implements OnInit {
//   authForm = new FormGroup({
//     username: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//       Validators.maxLength(20),
//       Validators.pattern(/^[a-z0-9]+$/),
//     ]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(4),
//       Validators.maxLength(20),
//     ]),
//   });

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit() {}

//   onSubmit() {
//     if (this.authForm.invalid) {
//       return;
//     }

//     this.authService.signin(this.authForm.value).subscribe({
//       next: () => {
//         this.router.navigateByUrl('/inbox');
//       },
//       error: ({ error }) => {
//         if (error.username || error.password) {
//           this.authForm.setErrors({ credentials: true });
//         }
//       },
//     });
//   }
// }

// // import { Component, OnInit } from '@angular/core';
// // import { FormGroup, FormControl, Validators } from '@angular/forms';
// // import { Router } from '@angular/router';
// // import { AuthService } from '../auth.service';

// // // import { Component, OnInit } from '@angular/core';
// // // import { FormControl, FormGroup, Validators } from '@angular/forms';
// // // import { Router } from '@angular/router';
// // // import { AuthService } from '../auth.service';

// // @Component({
// //   selector: 'app-signin',
// //   templateUrl: './signin.component.html',
// //   styleUrls: ['./signin.component.css'],
// // })
// // export class SigninComponent implements OnInit {
// //   authForm = new FormGroup({
// //     username: new FormControl('', [
// //       Validators.required,
// //       Validators.minLength(3),
// //       Validators.maxLength(20),
// //       Validators.pattern(/^[a-z0-9]+$/),
// //     ]),
// //     password: new FormControl('', [
// //       Validators.required,
// //       Validators.minLength(4),
// //       Validators.maxLength(20),
// //     ]),
// //   });

// //   //authForm = new FormGroup({
// //   //  username: new FormControl('', [
// //   //    Validators.required,
// //   //    Validators.minLength(3),
// //   //    Validators.maxLength(30),
// //   //    Validators.pattern(/^[a-z0-9]+$/),
// //   //  ]),
// //   //  password: new FormControl('', [
// //   //    Validators.required,
// //   //    Validators.minLength(4),
// //   //    Validators.maxLength(20),
// //   //  ]),
// //   //});

// //   // authForm = new FormGroup({
// //   //   username: new FormControl('', [
// //   //     Validators.required,
// //   //     Validators.minLength(3),
// //   //     Validators.maxLength(20),
// //   //     Validators.pattern(/^[a-z0-9]+$/),
// //   //   ]),
// //   //   password: new FormControl('', [
// //   //     Validators.required,
// //   //     Validators.minLength(4),
// //   //     Validators.maxLength(20),
// //   //   ]),
// //   // });

// //   //constructor(private authService: AuthService, private router: Router) {}
// //   //constructor(private authService: AuthService, private router: Router) {}
// //   constructor(private authService: AuthService, private router: Router) {}

// //   //ngOnInit() {}
// //   ngOnInit() {}

// //   onSubmit() {
// //     if (this.authForm.invalid) {
// //       return;
// //     }
// //     this.authService.signin(this.authForm.value).subscribe({
// //       next: () => {
// //         this.router.navigateByUrl('/inbox');
// //       },
// //       error: ({ error }) => {
// //         if (error.username || error.password) {
// //           this.authForm.setErrors({ credentials: true });
// //         }
// //       },
// //     });
// //   }
// // }

// // //   onSubmit() {
// // //     if (this.authForm.invalid) {
// // //       return;
// // //     }

// // //     this.authService.signin(this.authForm.value).subscribe({
// // //       next: () => {
// // //         this.router.navigateByUrl('/inbox');
// // //       },
// // //       error: ({ error }) => {
// // //         if (error.username || error.password) {
// // //           this.authForm.setErrors({ credentials: true });
// // //         }
// // //       },
// // //     });
// // //   }
// // // }

// // /*
// //   onSubmit() {
// //     if (this.authForm.invalid) {
// //       return;
// //     } else {
// //       this.authService.signin(this.authForm.value).subscribe({
// //         next: () => {
// //           this.router.navigateByUrl('/inbox');
// //         },
// //         error: () => {
// //           if (
// //             this.authForm.value.error.username ||
// //             this.authForm.value.error.password
// //           ) {
// //             this.authForm.setErrors({ credentials: true });
// //           }
// //         },
// //       });
// //     }
// //   }
// // }
// // */
