import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Tu primer enuciado el cual debe asegurar lo siguiente
  //TODO: Debe de asegurarse que el formulario sea invalido cuando ingrese dato erroneos

  //TODO: patron AAA

  it('🔴 Deberia de retornar "invalido" el formulario', () => {

    //TODO: Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '11111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert

    expect(component.formLogin.invalid).toEqual(true);
  });


  it('✔✔ Deberia de retornar "valido" el formulario', () => {

    //TODO: Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert

    expect(component.formLogin.invalid).toEqual(false);
  });

  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  })
  
});
