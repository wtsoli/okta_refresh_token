const CLIENT_ID = process.env.CLIENT_ID || '0oaaw45e1lVwullAL5d6';
const ISSUER = process.env.ISSUER || 'https:/dev-36904287.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/implicit/callback`;

export default {
  oidc: {
    clientId: '0oaaw45e1lVwullAL5d6' ,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:3000/api/messages',
  },
};
