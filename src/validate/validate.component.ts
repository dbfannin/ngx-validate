import {Component, OnInit} from '@angular/core';
import {ValidateEngine} from '../engine/engine';

@Component({
  selector: '[validateComponent]',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.less']
})
export class ValidateComponent implements OnInit {

  constructor(private validateEngine: ValidateEngine) {
  }

  ngOnInit() {

  }

}
