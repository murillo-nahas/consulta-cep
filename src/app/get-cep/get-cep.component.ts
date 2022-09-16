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

  cep: string = '17347-240';

  ngOnInit(): void {
    this.getCepByCode(this.cep);
  }

  getCepByCode(cep: string): void {
    this.cepService.getCep(cep).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
