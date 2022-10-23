import { TestBed } from '@angular/core/testing';

import { InjectSesionInterceptor } from './inject-sesion.interceptor';

describe('InjectSesionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectSesionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectSesionInterceptor = TestBed.inject(InjectSesionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
