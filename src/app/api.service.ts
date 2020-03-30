import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from "./model/api.response";
import { HttpClientModule } from '@angular/common/http';
import { FrontComponent } from './front/front.component';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  BASE_URL:string='https://pomber.github.io/covid19/timeseries.json';
  URL_PLANE:string='https://leopieters-iata-and-icao-v1.p.rapidapi.com/airlineDatabase?codeiataairline=AA&codeIso2Country=US&key=your_api_key';

  settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://leopieters-iata-and-icao-v1.p.rapidapi.com/airlineDatabase?codeiataairline=AA&codeIso2Country=US&key=your_api_key",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "leopieters-iata-and-icao-v1.p.rapidapi.com",
      "x-rapidapi-key": "6ebd7fe8bcmsh9ac6268d2abb2fcp109298jsn6870ec8c236b"
    }
  }

  headers = {
    "headers": {
      "x-rapidapi-host": "leopieters-iata-and-icao-v1.p.rapidapi.com",
      "x-rapidapi-key": "6ebd7fe8bcmsh9ac6268d2abb2fcp109298jsn6870ec8c236b"
    }
  }

  getFronts(): Observable<ApiResponse>  {
    return this.http.get<ApiResponse>(this.BASE_URL)
  }

  getPlanes(): Observable<ApiResponse>  {
    return this.http.get<ApiResponse>(this.URL_PLANE,this.headers)
  }
}