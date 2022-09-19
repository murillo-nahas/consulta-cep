import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CepService } from '../services/cep.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  standalone: true,
  selector: 'app-get-cep',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ClipboardModule,
  ],
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
      error: (err) => console.error('Something is wrong: ', err),
    });
  }

  createForm() {
    this.formCep = this.fb.group({
      cep: ['', Validators.required],
      logradouro: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      localidade: [{ value: '', disabled: true }],
      uf: [{ value: '', disabled: true }],
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

  resetForm() {
    this.formCep.reset();
  }
}
