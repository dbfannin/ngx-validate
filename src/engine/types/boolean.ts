import {Any} from './any';
import * as _ from 'lodash';
import {language} from '../language';

export class BooleanClass extends Any {
  private _falsies: any[] = ['false', 0];
  private _truthies: any[] = ['true', 1];
  private _insensitive: boolean = true;


  constructor() {
    super();

    this.type = 'boolean';
  }

  convert(value){
    if(_.find(this._falsies, value)){
      return false;
    }

    if(_.find(this._truthies, value)){
      return true;
    }

    return value;
  }

  _validate(value, key) {
    //arrays and objects are not booleans
    //it must be a boolean value or exist in the truthies/falsies lists
    if(_.isObject(value) || _.isArray(value) || (!_.isBoolean(value) || !_.find(_.concat(this._falsies, this._truthies), value))) {
      return this.addError(this.schema.label || key, language.boolean.base)
    }
  }

  /**
   * Allows for additional values to be considered valid booleans by converting them to true during validation.
   * Accepts a value or an array of values.
   */
  falsy(value: any | any[]) {
    value = _.isArray(value) ? value : [value];

    this._falsies = _.concat(this._falsies, value);
  }

  /**
   *   Allows for additional values to be considered valid booleans by converting them to true during validation.
   *   Accepts a value or an array of values.
   */
  truthy(value: any | any[]) {
    value = _.isArray(value) ? value : [value];

    this._truthies = _.concat(this._truthies, value);
  }

  /**
   * Allows the values provided to truthy and falsy as well as the "true" and "false" default conversion to be
   * matched in a case insensitive manner. Insensitive by default
   */
  insensitive(insensitive: boolean) {
    this._insensitive = insensitive;
  }

}