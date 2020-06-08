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
  encryption;
  error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private cipher: CipherService
  ) { 
    this.inputString = this.formBuilder.group({
      inputString: '',
      offset: 0
    });
    this.error = false;
  }

  ngOnInit() {}

  onSubmit(input) {
    const body = {
      originalString: input.inputString,
      offset: input.offset
    };

    if(input.inputString) {
      this.error = false;
      this.cipher.encryptString(body).subscribe(res => {
        this.encryption = res;
      });
    } else {
      this.error = true;
    }
  }
}
