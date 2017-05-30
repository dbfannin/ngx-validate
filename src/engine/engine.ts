import * as _ from 'lodash';

import {Any} from './types/any';
import {BooleanClass} from './types/boolean';
import {DateClass} from './types/date';
import {NumberClass} from './types/number';
import {StringClass} from './types/string';
import {Injectable} from '@angular/core';

@Injectable()
export class ValidateEngineService {


  constructor() {
  }

  validate(obj, schema, callback) {
    let errors = [];
    _.each(schema, (schemaItem, schemaKey) => {
      //convert values before you validate
      schema[schemaKey] = schemaItem.convert();

      schemaItem.validate(obj[schemaKey], schemaKey);

      errors = _.concat(errors, schemaItem.getErrors());
    });

    //  Should we have a callback to return errors, value
    callback(errors.length ? errors : null, schema);
  }

  any() {
    return new Any();
  }

  string() {
    return new StringClass();
  }

  boolean() {
    return new BooleanClass();
  }

  date() {
    return new DateClass();
  }

  number() {
    return new NumberClass();
  }


}
