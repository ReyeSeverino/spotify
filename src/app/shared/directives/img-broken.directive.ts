import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string  | boolean = false
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('😡 Esta imagen revento --->', this.elHost);
    if (this.customImg) {
      elNative.src = this.customImg
    } else [
      elNative.src = 'https://media.istockphoto.com/vectors/music-symbol-headphone-icon-vector-illustration-vector-id850986820?k=6&m=850986820&s=612x612&w=0&h=PKI-reNY8KnTpQnNm1LzLDmoHaCth1ARMKrfVjv02EM='
    ]
  }

  constructor(private elHost: ElementRef) {
    
  }

}
