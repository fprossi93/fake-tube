import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private httpc: HttpClient) { }

  getService(path : string  ){
    return this.httpc.get(`${environment.BASE_URL}${path}`);
  }
}
