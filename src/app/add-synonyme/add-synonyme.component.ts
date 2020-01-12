import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SynonymsAttributeService} from '../synonyms-attribute.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-synonyme',
  templateUrl: './add-synonyme.component.html',
  styleUrls: ['./add-synonyme.component.css']
})
export class AddSynonymeComponent implements OnInit {

  hierarchyCode: FormControl;
  // roles: FormControl;
  validations: FormControl;
  required: FormControl;
  variant: FormControl;
  // description_translations: FormControl;
  label: FormControl;
  // label_translations: FormControl;
  values: FormControl;
  requirementLevel: FormControl;
  // values_list: FormControl;
  type: FormControl;
  example: FormControl;
  typeParameter: FormControl;
  description: FormControl;
  synonymeForm: FormGroup;
  synonyme: any;

  constructor(private synonymsAttributeService: SynonymsAttributeService,
              public thisDialogRef: MatDialogRef<AddSynonymeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.synonyme = {};
    if (this.data) this.synonyme = this.data;
    this.hierarchyCode = new  FormControl();
    // this.roles = new  FormControl();
    this.validations = new  FormControl();
    this.required = new  FormControl();
    this.variant = new  FormControl();
    // this.description_translations = new  FormControl();
    this.label = new  FormControl();
    // this.label_translations = new  FormControl();
    this.values = new  FormControl();
    this.requirementLevel = new  FormControl();
    // this.values_list = new  FormControl();
    this.type = new  FormControl();
    this.example = new  FormControl();
    this.typeParameter = new  FormControl();
    this.description = new  FormControl();
    this.synonymeForm = new FormGroup({
      hierarchyCode: this.hierarchyCode,
      // roles: this.roles,
      validations: this.validations,
      required: this.required,
      variant: this.variant,
      // description_translations: this.description_translations,
      label: this.label,
      // label_translations: this.label_translations,
      values: this.values,
      requirementLevel: this.requirementLevel,
      // values_list: this.values_list,
      type: this.type,
      example: this.example,
      typeParameter: this.typeParameter,
      description: this.description,
    });
  }

  reinitializeForm() {
    this.synonymeForm.reset();
    this.synonyme = null;
    this.onCloseCancel();
  }

  saveSynonyme() {
    console.log('Addedding... ', this.synonyme);
    this.synonyme.required = (this.synonyme.required === 'true');
    this.synonyme.variant = (this.synonyme.variant === 'true');
    if (this.data) {
      this.synonymsAttributeService.updateSynonym(this.synonyme).subscribe(data => {
        console.log('Added Successful !!');
      });
    } else {
      this.synonymsAttributeService.addNewSynonym(this.synonyme).subscribe(data => {
        console.log('Added Successful !!');
      });
    }
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
