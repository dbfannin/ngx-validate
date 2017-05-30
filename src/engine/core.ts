import * as _ from 'lodash';


/**
 * takes input string and replaces all instances of %s with the following arguments
 * Ex. ('/diagnostics/devops/servers/%s', 'rtjobs') -> /diagnostics/devops/servers/rtjobs
 * @param url {string}
 * @param args {array} - the rest of the arguments passed in
 * @return {string} - mapped url
 */
export function stringReplace(url: string = '', ...args: any[]): string {
  _.each(args, (arg) => {
    url = url.replace('%s', arg);
  });

  return url;
};