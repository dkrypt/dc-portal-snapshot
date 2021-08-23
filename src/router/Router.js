import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../containers/mainDashboard/Dashboard.js";
import ThreadConnect from "../containers/threadConnect/ThreadConnect.js";
import EnterpriseConnect from "../containers/enterpriseConnect/EnterpriseConnect.js";
import Dive from "../containers/dive/Dive.js";
import DivePower from "../containers/dive/DivePower.js";
import NewEngagementRequest from "../containers/engagementRequest/NewEngagementRequest.js";
import TCDashboard from "../containers/threadConnect/Dashboard.js";
import GlobalScape from "../containers/globalScape/GlobalScape.js";
import Manage from "../containers/manage/Manage.js";
import ManageTC from "../containers/manage/threadConnect/ManageTC.js";
import ManageSubscription from "../containers/manage/subscription/ManageSubscription.js";
import ManageUser from "../containers/manage/user/ManageUser.js";

export default function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/threadconnect">
        <ThreadConnect
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/enterpriseconnect">
        <EnterpriseConnect
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/dive">
        <Dive
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/divepower">
        <DivePower
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/newengagementrequest">
        <NewEngagementRequest
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/tcdashboard">
        <TCDashboard
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/globalscape">
        <GlobalScape
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/manage">
        <Manage
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/managetc">
        <ManageTC
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/managesubscription">
        <ManageSubscription
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
      <Route path="/manageuser">
        <ManageUser
          clickEvent={props.clickEvent.bind(this)}
          persona={props.persona}
          setPersonaHandler={props.setPersonaHandler.bind(this)}
          baseUrl={props.baseUrl}
          authToken={props.authToken}
        />
      </Route>
    </Switch>
  );
}
