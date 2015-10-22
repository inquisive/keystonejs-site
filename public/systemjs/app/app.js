// global holdovers
//import 'jquery'
import 'bootstrap'
//import 'prism'
//import 'analytics'
// end globals
import React from 'react';
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router } from 'react-router'
import rootRoute from 'common/routes';
import Debug from 'debug'

window.myDebug = Debug

render( <Router history={createBrowserHistory()} routes={rootRoute} />, document.getElementById('keystonejs-spa'));


