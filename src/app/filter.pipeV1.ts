import { Pipe, PipeTransform } from '@angular/core';
import { MyserviceService } from './jsonData.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private myservice: MyserviceService) { }
  transform(value: any, filterString: string, propName: string, date: string, timeEstimate: number,): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray: any = [];
    const sortedByDateArray: any = [];
    let newArray: any = [];
    let newTime1: number;
    let sumArray: any = [];
    for (const item of value) {
      let desc: string = item[propName];
      let time: number = item[timeEstimate];
      if (desc.indexOf(filterString) !== -1) {
        newTime1 = time;
        resultArray.push(item);
        sumArray.push(newTime1);
        //let time: string = item[date];
        resultArray.sort(
          function (a, b) {
            return <any>new Date(a.created_at) - <any>new Date(b.created_at);
          });
        console.log(resultArray);
      }
    }
    let totalCalculatedTime = sumArray.reduce((sum, current) => sum + current, 0);
      let hour: number = Math.floor(totalCalculatedTime / 60);
      let min: number = totalCalculatedTime % 60;
      let hm = parseInt(hour + ":" + min);
      this.myservice.mySum =  hm ;
    return resultArray;
  }
}