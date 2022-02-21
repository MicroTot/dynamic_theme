import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'situ';
  blog:string = "false"
  font_color:any;

  show_amenities_nav:any  //brief-desc
  show_activities_nav:any;
  show_gallery_nav:string = "yes"
  show_blog_nav:string = "yes"

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.getHeader()
    this.getFontColor()
  }

  getHeader(){
    this.http.get("http://127.0.0.1:8000/api/get")
    .subscribe((res:any)=>{
      this.show_amenities_nav = res.projects[0].brief_desc
      this.show_activities_nav = res.projects[0].gallery
      // console.log(amenities_show, activities_show)
    })
  }

  getFontColor(){
    this.http.get("http://127.0.0.1:8000/api/get")
    .subscribe((res:any)=>{
      this.font_color = res.projects[0].font_color
      document.documentElement.style.setProperty("--font-color", this.font_color)
    })
  }

  print(){
    console.log(this.show_activities_nav)
  }
}
