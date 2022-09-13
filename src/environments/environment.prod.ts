export const environment = {
  production: true,

  // set to correct values in production
  clientUrls: {
    building_management: "http://localhost:9091",
    problem_management: "http://localhost:8080",
  },

  // authentication values
  keycloak: {
    issuer: "https://cm-keycloak.cloud.iai.kit.edu/realms/CM",
    clientId: "cm-pse-22",
    scope: "openid groups"
  },

  // roles
  roles: {
    user: "",
    admin: "",
    guest: ""
  }
};
