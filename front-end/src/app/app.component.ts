import { Component } from '@angular/core';
import { TestservicesService } from './testservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = '';
  constructor(
    private _testservicesService: TestservicesService,
  ) { }
  test(){
    this._testservicesService.test( ).subscribe((res) => {
      debugger
      this.result;
    });
  }
}
