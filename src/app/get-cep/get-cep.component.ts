import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-get-cep',
  templateUrl: './get-cep.component.html',
  styleUrls: ['./get-cep.component.scss'],
})
export class GetCepComponent implements OnInit {
  @ViewChild('cepValue') cepValue!: ElementRef;

  constructor(private cepService: CepService, private fb: FormBuilder) {}

  passCep: string = '';

  cep: any;

  formCep!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  getCepByCode(cep: any): void {
    this.cepService.getCep(cep).subscribe({
      next: (res: any) => {
        this.cep = Object.keys(res).map((key: any) => res[key]);
      },
      error: (err) => console.log(err),
    });
  }

  createForm() {
    this.formCep = this.fb.group({
      cep: ['', Validators.required],
      logradouro: [''],
      bairro: [''],
      localidade: [''],
      uf: [''],
    });
  }

  updateForm() {
    this.formCep.patchValue({
      logradouro: this.cep[1],
      bairro: this.cep[3],
      localidade: this.cep[4],
      uf: this.cep[5],
    });
  }
}
