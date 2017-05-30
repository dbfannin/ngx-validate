import * as _ from 'lodash';
import moment from 'moment';
import {stringReplace} from '../core';

export class Validate {
  private _errors: any[] = [];
  private _context: any = {};
  type: string;

  /**
   * attempts convert to the values to the appropriate types
   */
  private _convert(val) {
    try {
      switch (this.type) {
        case 'string':
          val = val.toString();
          break;
        case 'number':
          val = val.parseFloat();
          break;
        case 'boolean':
          val = !!val;
          break;
        case 'date':
          val = moment(val);
          break;
      }
    } catch (e) {

    }
  }

  addError(label, msg, ...params: any[]) {
    if (msg) {
      this._errors.push(`${label} ${stringReplace(msg, params)}`);
    }
  }

  getErrors() {
    return this._errors;
  }

}


export class Any extends Validate {
  schema: any = {};
  private _invalids: any[] = [];

  _validateAny(value, key) {

  }

  //Needs to be over written by each type class
  _validate(value, key) {

  }

  _sharedValidate(value, key) {
    this._validateAny(value, key)
  }

  convert(value){

  }

  validate(value, key) {
    this._sharedValidate(value, key);
    this._validate(value, key);
  }

  getSchema(): any {
    return this.schema;
  }

  /**
   * whitelists values
   */
  allow(value: any) {
    return this;
  }

  /**
   * matches against value and type
   */
  valid(valids: any[]) {
    this.schema.valid = valids;
    return this;
  }

  /**
   * matches against value and type
   */
  invalid(invalids: any[]) {
    this.schema.invalid = invalids;
    return this;
  }

  /**
   * marks a key as required (does not allow undefined)
   */
  required() {
    this.schema.require = true;
    return this;
  }

  /**
   * marks a key as forbidden
   */
  forbidden() {
    this.schema.forbidden = true;
    return this;
  }

  /**
   * sets the label
   */
  label(label: string) {
    this.schema.label = label;
    return this;
  }

}