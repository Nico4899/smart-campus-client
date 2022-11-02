// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // set to correct values in production
  clientUrls: {
    building_management: "http://localhost:8080",
    problem_management: "http://localhost:8080",
  },

  // authentication values
  keycloak: {
    issuer: 'https://cm-keycloak.cloud.iai.kit.edu/realms/CM',
    clientId: 'cm-pse-22',
    scope: 'openid groups profile email'
  },

  // roles
  roles: {
    admin: "TM-CM-MuleSoft",
    user: "TM-CM-JuniorStudents",
    guest: ""
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
