import { Component, OnInit } from '@angular/core';
import { SpinnerStore } from './store/spinner.store';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public spinnerStore: SpinnerStore) { }

  public ngOnInit() {
  }

}
