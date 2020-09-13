import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MyserviceService } from '../jsonData.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  public products: any = [];
  public primary_dnis: any = [];
  selected: string;
  checkValue1 = false;
  checkValue2 = false;
  constructor(private httpClient: HttpClient, private myservice: MyserviceService) { }
  ngOnInit(): void {
    this.getData();
  }

  filteredStatus = '';

  radioChange(event: MatRadioChange) {
    console.log(event.source.name, event.value);
    console.log(event);
    console.log(event.value);
    console.log(event.source);
    if (event.value === 'primary_dnis') {
      this.checkValue1 = !this.checkValue1;
      this.checkValue2 = false;
      this.getData();
    }
    if (event.value === 'toAddress') {
      this.checkValue2 = !this.checkValue2;
      this.checkValue1 = false;
      this.getData();
    }
  }

  getData() {
    this.httpClient.get('assets/assignment.json').pipe(
      map(responseData => {
        const prodArray = [];
        // tslint:disable-next-line:forin
        for (const key in responseData) {
          prodArray.push(responseData[key]);
        }
        return prodArray;
      }))
      .subscribe(data => {
        console.log(data);
        this.products = data;
        console.log(this.products);
      });
  }

  get theSum() {
    return this.myservice.mySum;
} 

}
