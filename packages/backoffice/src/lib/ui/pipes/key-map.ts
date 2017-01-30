import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  'name': 'keyMap',
})
export class KeyMapPipe implements PipeTransform{
  transform(value: any, key: string, sort: string): Object[] {
    // create instance vars to store keys and final output
    let keyArr: any[] = Object.keys(value);
    let dataArr = [];
    let keyProp = key;
    if(!keyProp) keyProp = 'key';

    // loop through the object,
    // pushing values to the return array
    keyArr.forEach((key: any) => {
      let o = {
        value: value[key],
      };
      o[keyProp] = key;
      dataArr.push(o);
    });

    if(sort) {
      //let sortProp = args[1];
      dataArr.sort((a, b) => {
        if(_.has(a, ['value', sort]) || _.has(b, ['value', sort])) {
          return _.get(a, ['value', sort], Number.MAX_VALUE) - _.get(b, ['value', sort], Number.MAX_VALUE);
        }
        return 0;
      });
    }

    // return the resulting array
    return dataArr;
  }
}
