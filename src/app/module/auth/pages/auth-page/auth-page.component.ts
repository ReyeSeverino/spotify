import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@module/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
    //todo:200 < 400
    .subscribe(responseOk => { //todo: cuando el usuario entra correctamente la credenciales ✔✔
      console.log('Sesson iniciada correcta', responseOk);
      const { tokenSession, data } = responseOk
      this.cookie.set('token', tokenSession, 4, '/')
      this.router.navigate(['/', 'tracks'])
    },
      err => {//todo: error 400 >=
        this.errorSession = true
        console.log('Ocurrio un error con tu email o password');
      })

  }

}
