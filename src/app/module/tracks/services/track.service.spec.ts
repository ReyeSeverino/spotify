import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TrackService } from './track.service';

//TODO: 🔴🔴 Es el nombre del la prueba "Examen del Session Guard"
describe('TrackService', () => {
  let service: TrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TrackService);
  });

  //TODO La primera pregunta de ese gran examen!
  it('should be created', () => {
    expect(service).toBeTruthy(); //TODO 🤬🤬🤬
  });
});
