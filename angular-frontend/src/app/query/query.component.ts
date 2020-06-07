import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  @Input() query;

  constructor() { }

  ngOnInit() { }
}
