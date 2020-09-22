import { AfterViewChecked, Directive } from '@angular/core';
import { ElementRef, Input } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnChanges, AfterViewChecked {
  @Input('search') word: string;

  viewRendered: boolean;

  constructor(private el: ElementRef) {
    this.viewRendered = false;
  }

  highlightSearchTerm() {
    if (!this.word || this.word.length < 3) {
      if (this.viewRendered) {
        this.removeMarks();
      }
    } else {
      if (this.el.nativeElement) {
        this.removeMarks(); 
        this.putMarks();
      }
    }
  }

  putMarks() {
    const seachRegex = new RegExp(this.word, 'gmi');
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(
      seachRegex,
       (match) => `<mark>${match}</mark>`
    );
  }
  removeMarks() {
    this.el.nativeElement.querySelectorAll('*').forEach((element) => {
      const regex = new RegExp('<mark>|</mark>', 'gi');
      const cleanText = element.parentNode.innerHTML.replace(regex, '');
      element.parenNode.innerHTML = cleanText;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['word']) {
      this.highlightSearchTerm();
    }
  }
  ngAfterViewChecked(): void {
    this.viewRendered = true;
  }
}
