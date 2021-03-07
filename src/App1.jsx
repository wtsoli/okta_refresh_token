import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config';
// import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Home from './Home';
import Messages from './Messages';
import Navbar from './Navbar';
import Profile from './Profile';
import RefreshToken from './RefreshToken';


const refreshToken = () => {
  console.log('retrieving code');
  //const authorizeUrl = 'https://dev-36904287.okta.com/oauth2/default/v1/authorize?client_id=0oaaw45e1lVwullAL5d6&response_type=code&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fimplicit%2Fcallback&state=state-ufo-1&code_challenge_method=S256&code_challenge=ROWYT4HJ_cZjtTKnq15DiXF4ENOhiY2XFZvIxJcm7no';

  // axios.get(authorizeUrl, {
  //   params: {
  //     client_id: '0oaaw45e1lVwullAL5d6',
  //     response_type: 'code',
  //     scope: 'openid',
  //     redirect_uri: 'http://localhost:3000/',
  //     state: 'state-ufo-1',
  //     code_challenge_method: 'S256',
  //     code_challenge: 'N5FluRWvCP-lDxktRXI6yWUW8842BL7NALmLIqGFhgw',
  //   },
  // }).then((authRespnose) => {
  //   console.log(authRespnose);
  // });

  const authorizeUrl = 'http://localhost:3000/refresh_token'

  var wnd = window.open(authorizeUrl);
  // setTimeout(function() {
  //   const refreshedFlags = wnd.document.evaluate('//div', document, null, XPathResult.ANY_TYPE, null );
  //   // const pageContent = wnd.document.body;
  //   console.log("refreshedFlags", refreshedFlags);
  //   wnd.close();
  // }, 3000);
  return false;
};

const oktaAuth = new OktaAuth(config.oidc);

// const App = () => (
//   <Router>
//     <Security oktaAuth={oktaAuth}>
//       {/* <Navbar /> */}
//       <Container text style={{ marginTop: '7em' }}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/login/callback" component={LoginCallback} />
//           <SecureRoute path="/messages" component={Messages} />
//           <SecureRoute path="/profile" component={Profile} />
//         </Switch>
//       </Container>
//     </Security>
//   </Router>
// );
// export default App;

const App = () => (
  <Router>
    <Security oktaAuth={oktaAuth}>
      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route path="/" exact component={() => (
            <div>
              Hello world!
              <button onClick={refreshToken}>
                Activate Okta
              </button>
            </div>
          )} />
          <Route path="/implicit/callback" component={LoginCallback} />
          <SecureRoute path="/messages" component={() => (
            <div>
              private zone<br/>
              <button onClick={refreshToken}>
                refresh Okta
              </button>
              <input type="text" name="name" />
            </div>
          )} />
          <SecureRoute path="/refresh_token" component={RefreshToken} />
        </Switch>
      </Container>
    </Security>
  </Router>
);
export default App;
