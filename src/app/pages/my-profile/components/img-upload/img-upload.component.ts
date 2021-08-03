import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImgUploadComponent {
  @Output() imgSrc: EventEmitter<any> = new EventEmitter();

  private file: File;

  public onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  public fileUpload() {
    this.imgSrc.emit(this.file);
  }
}
