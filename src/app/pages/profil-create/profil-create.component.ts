import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil-create',
  templateUrl: './profil-create.component.html',
  styleUrls: ['./profil-create.component.scss']
})
export class ProfilCreateComponent implements OnInit {

  inscription : FormGroup;

  submitted = false;

  constructor(private forms : FormBuilder) { 
    this.inscription = this.forms.group ({
      "nomsFamille" : ["", Validators.required],
      "prenoms" : ["", Validators.required],
      "sexe" : ["", Validators.required],
      "date" : ["", Validators.required],
      "adresse" : ["", Validators.required],
      "codePostal" : ["", Validators.required]
    })
  }

  get formControl():any {
    return this.inscription.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(inscription: FormGroup) {
    this.submitted = true;

    console.log(inscription)
  }
  
}
