import express from 'express';
const router = express.Router();
import * as controller from './payments-controller';




const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-xuvviu1o.auth0.com",
    audience: "http://localhost:8080"
  };

  
  // Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
  });

  

router.get('/payment/:user',  checkJwt, controller.show);




export default router;