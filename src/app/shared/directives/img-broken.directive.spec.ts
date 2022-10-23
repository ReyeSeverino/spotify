import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

//todo: Componente de prueba ✔
@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srckMock" >'
})

class TestComponent {
  public srckMock: any = null
}

//TODO la prueba de ImBroken es la siguiente

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('🤨🤨 TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy()
  })

  it('😁🤐 Directiva deberia de cambiar la imagen por un base64', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src //todo 👉 Tenemos la url antes de ser cambiada por la directiva
    component.srckMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src //todo 👉 Tenemos la url despues de ser cambiada por la directiva

      expect(afterImgSrc).toMatch(/\bmedia.istockphoto\b/) //todo data:image: 10101010101010101
      done()
    }, 3000)


  })

});
