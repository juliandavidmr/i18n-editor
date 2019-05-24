import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Input() list: { display: string, value: any }[];
  @Output() select = new EventEmitter();

  open = false;

  constructor() { }

  ngOnInit() {
  }

  handleSelect(item) {
    this.select.emit(item);
  }
}
