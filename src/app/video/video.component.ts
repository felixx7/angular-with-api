import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "./../api.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  indonesia = [];
  video_1 : string;
  video_2 : string;
  video_3 : string;
  video_4 : string;
  video_5 : string;
  
  constructor(private apiService: ApiService,private http: HttpClient) { }

  ngOnInit() {
    this.apiService.getFronts().subscribe(data => {
     this.indonesia = data["Indonesia"];
    })
    this.apiService.getPlanes().subscribe(data => {
     this.video_1 = data[0].nameAirline+","+data[0].codeIataAirline;
    })
    this.apiService.getPlanes().subscribe(data => {
     this.video_2 = data[1].nameAirline+","+data[0].codeIataAirline;
    })
    this.apiService.getPlanes().subscribe(data => {
     this.video_3 = data[2].nameAirline+","+data[0].codeIataAirline;
    })
    this.apiService.getPlanes().subscribe(data => {
     this.video_4 = data[3].nameAirline+","+data[0].codeIataAirline;
    })   
    this.apiService.getPlanes().subscribe(data => {
     this.video_5 = data[4].nameAirline+","+data[0].codeIataAirline;
    })    
  }

}