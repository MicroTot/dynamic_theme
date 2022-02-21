import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  room_template:string = "room2"

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getRoom()
  }

  getRoom(){
    this.http.get("http://127.0.0.1:8000/api/get")
    .subscribe((res:any)=>{
      // console.log(res)
      this.room_template = res.projects[0].carousel
    })
  }
}
