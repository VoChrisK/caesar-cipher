import { Component, OnInit, Input } from '@angular/core';
import { CipherService } from '../cipher.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  @Input() query;

  constructor(
    private cipher: CipherService
  ) { }

  ngOnInit() { }
}
