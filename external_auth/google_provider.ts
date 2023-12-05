import { DefineOAuth2Provider, Schema } from "deno-slack-sdk/mod.ts";

/**
 * External authentication uses the OAuth 2.0 protocol to connect with
 * accounts across various services. Once authenticated, an access token
 * can be used to interact with the service on behalf of the user.
 * https://api.slack.com/future/external-auth
 */
const GoogleProvider = DefineOAuth2Provider({
  provider_key: "google",
  provider_type: Schema.providers.oauth2.CUSTOM,
  options: {
    "provider_name": "google",
    "authorization_url": "https://accounts.google.com/o/oauth2/auth",
    "token_url": "https://oauth2.googleapis.com/token",
    "client_id":
      "727464344180-q5dd666fk6o9p4fau1m4j70fncldmm69.apps.googleusercontent.com", // TODO: Add your Client ID here!
    "scope": [
      "https://www.googleapis.com/auth/cloud-translation",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    "authorization_url_extras": {
      "prompt": "consent",
      "access_type": "offline",
    },
    "identity_config": {
      "url": "https://www.googleapis.com/oauth2/v1/userinfo",
      "account_identifier": "$.email",
    },
  },
});

export default GoogleProvider;
