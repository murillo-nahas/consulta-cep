import { Component, OnInit } from '@angular/core';
import { Cep } from '../models/cep.model';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-get-cep',
  templateUrl: './get-cep.component.html',
  styleUrls: ['./get-cep.component.scss'],
})
export class GetCepComponent implements OnInit {
  constructor(private cepService: CepService) {}

  ngOnInit(): void {}

  getCepByCode(cep: any, form: any): void {
    this.cepService.getCep(cep).subscribe({
      next: (res) => this.fillForm(res, form),
      error: (err) => console.log(err),
    });
  }

  fillForm(res: any, form: any): void {
    form.setValue({
      cep: res.cep,
      logradouro: res.logradouro,
      bairro: res.bairro,
      localidade: res.localidade,
      uf: res.uf,
    });
  }
}
