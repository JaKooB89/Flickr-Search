import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit {
  photos: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  status: boolean = false;

  handleSuccess(data) {
    if (data.stat == 'ok') {
      this.status = true;
      this.imagesFound = true;
      this.photos = data.photos;
      console.log(data);
    } else {
      this.imagesFound = false;
      this.searching = false;
      this.status = false;
    }
  }
  handleError(error) {
    console.log(error);
    this.imagesFound = false;
    this.searching = false;
    this.status = false;
  }
  constructor(private _imageService : ImageService) { }

  searchImages(query: string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  ngOnInit() {
  }

}
