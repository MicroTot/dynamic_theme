import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallrey_template:string = "gallery2"

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getGallery()
  }

  getGallery(){
    this.http.get("http://127.0.0.1:8000/api/get")
    .subscribe((response:any)=>{
      // console.log(res)
      this.gallrey_template = response.projects[0].awards
    })
  }
}
