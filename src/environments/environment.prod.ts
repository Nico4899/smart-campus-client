export const environment = {
  production: true,

  // set to correct values in production
  clientUrls: {
    building_management: "cm-buildingmanagement-impl.cloud.iai.kit.edu",
    problem_management: "cm-problemmanagement-impl.cloud.iai.kit.edu",
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
