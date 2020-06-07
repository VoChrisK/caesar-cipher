import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {
  inputString;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.inputString = this.formBuilder.group({
      inputString: ''
    });
  }

  ngOnInit() {
  }
}
