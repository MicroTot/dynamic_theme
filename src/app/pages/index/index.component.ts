import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  template:string = "template1"

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getTemplate()
  }

  getTemplate(){
    this.http.get("http://127.0.0.1:8000/api/get")
    .subscribe((res:any)=>{
      console.log(res)
      this.template = res.projects[0].header
    })
  }
}
