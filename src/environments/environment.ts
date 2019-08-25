// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FLICKR_API_KEY: '6a61ebdcf2de0fc191c8242d6210ccdd',
  FLICKR_API_SECRET: '13f01ee36b3f64fa',
  FLICKR_API_URL: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=description,owner_name&safe_search=3&sort=relevance&api_key='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
