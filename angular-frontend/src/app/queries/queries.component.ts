import { Component, OnInit, Input } from '@angular/core';
import { CipherService } from '../cipher.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  @Input() query;
  queries;

  constructor(
    private cipher: CipherService
  ) { 
    this.queries = [];
  }

  ngOnInit() {
    this.cipher.fetchQueries().subscribe(res => {
      this.queries = res;
    });
  }

  ngOnChanges() {
    if(this.query) {
      this.queries.unshift(this.query);
    }
  }
}
