import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "./../api.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

news = "Hello";
  
constructor(private apiService: ApiService) {}
  
  ngOnInit() {

  }

}
