
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {
   
  }

  /*
  *
  * @returns Devolver todas las canciones! molonas!😋😋
  */
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  /*
  *
  * @returns Devolver canciones random
  */
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        // tap(data => console.log('🙄🙄🙄', data)),
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => {//todo: aplicamos un filtro de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        // tap(data => console.log('🙄🙄🙄', data)),
        catchError((err) => {
          const { status, statusText } = err;
          console.log('Algo paso revisame 🔴⚠⚠', [status, statusText]);
          return of([])
        })
      )
  }
}