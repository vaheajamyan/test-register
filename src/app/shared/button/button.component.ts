import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() color: string;

  constructor() {
  }

  ngOnInit() {
  }

}
