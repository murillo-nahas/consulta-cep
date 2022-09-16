import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  cep: string = '17347-240';

  getCep(): Observable<Cep> {
    return this.http.get<Cep>(`//viacep.com.br/ws/${this.cep}/json`);
  }
}
