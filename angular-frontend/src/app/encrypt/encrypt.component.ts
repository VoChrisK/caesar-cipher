import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CipherService } from '../cipher.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {
  inputString;
  encryptedString;

  constructor(
    private formBuilder: FormBuilder,
    private cipher: CipherService
  ) { 
    this.inputString = this.formBuilder.group({
      inputString: '',
      offset: 0
    });
  }

  ngOnInit() { }

  onSubmit(input) {
    const body = {
      originalString: input.inputString,
      offset: input.offset
    };

    this.cipher.encryptString(body).subscribe(res => {
      this.encryptedString = res;
    })
  }
}
