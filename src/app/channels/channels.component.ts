import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "./../api.service";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  planes:any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPlanes().subscribe(data => {
	    this.planes = data;
    })
  }
}