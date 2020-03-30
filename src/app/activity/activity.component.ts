import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "./../api.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  
  planes:any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPlanes().subscribe(data => {
      this.planes = data;
    })
  }

}