import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dragndrop]'
})
export class DragndropDirective {

  @Output() dropped =  new EventEmitter<FileList>();

  @HostListener('drop', ['$event'])
  onDrop($event: any) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: any) {
    $event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: any) {
    $event.preventDefault();
  }

}
