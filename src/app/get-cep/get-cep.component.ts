import { Component, OnInit } from '@angular/core';
import { Cep } from '../models/cep';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-get-cep',
  templateUrl: './get-cep.component.html',
  styleUrls: ['./get-cep.component.scss'],
})
export class GetCepComponent implements OnInit {
  constructor(private cepService: CepService) {}

  cep: Cep | any;

  ngOnInit(): void {
    this.getCepByCode();
  }

  getCepByCode(): void {
    this.cepService.getCep().subscribe({
      next: (res) => {
        this.cep = res;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
