import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {
  inputString;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { 
    this.inputString = this.formBuilder.group({
      inputString: ''
    });
  }

  ngOnInit() {

  }

  onSubmit(input) {
    const body = {
      originalString: input.inputString,
      offset: 2
    };

    this.http.post('http://localhost:3000/cipher/add', body, { responseType: 'text' }).subscribe(res => {
      console.log(res);
    });
  }
}
