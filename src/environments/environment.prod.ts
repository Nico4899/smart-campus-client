export const environment = {
  production: true,

  // set to correct values in production
  clientUrls: {
    building_management: "http://localhost:9091",
    problem_management: "http://localhost:8080",
  },

  // authentication values
  keycloak: {
    issuer: "",
    clientId: "",
    scope: ""
  },

  // roles
  roles: {
    user: "",
    admin: "",
    guest: ""
  }
};
