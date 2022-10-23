import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //todo: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
    const obsecable1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)

    this.listObservers$ = [obsecable1$]

    // const obsecable1$ = this.multimediaService.myObservable1$
    // .subscribe(
    //   (responseOk) => {
    //     //todo: next()
    //     console.log('👌 El agua llega perfecta!', responseOk);
    //   },
    //   (responseFail) => {
    //     //todo: error()
    //     console.log('🤬 Se tapo la tuberia', responseFail);

    //   }
    // )
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴🔴Boom!');
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }

}
