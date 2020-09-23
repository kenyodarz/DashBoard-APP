import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-widget-upload-thumbnail',
  templateUrl: './widget-upload-thumbnail.component.html',
  styleUrls: ['./widget-upload-thumbnail.component.css'],
})
export class WidgetUploadThumbnailComponent implements OnInit {
  @Output() sendPath: EventEmitter<string>;

  img: any;
  loadImg: boolean;

  constructor(private afs: AngularFireStorage) {
    this.sendPath = new EventEmitter<string>();
    this.loadImg = true;
  }

  uploadFile($event) {
    this.loadImg = false;
    const id = new Date().getTime().toString();
    const file = $event.target.files[0];
    const path = 'thumbnails/' + id;
    const ref = this.afs.ref(path);

    let self = this;

    this.afs.upload(path, file).then(
      () => {
        ref.getDownloadURL().subscribe(
          (url) => {
            self.img = url;
            self.sendPath.emit(url);
            this.loadImg = true;
          },
          (error) => {
            console.error('Error ' + error);
            this.loadImg = true;
          }
        );
      },
      (error) => {
        console.error('Error ' + error);
        this.loadImg = true;
      }
    );
  }

  ngOnInit(): void {}
}
