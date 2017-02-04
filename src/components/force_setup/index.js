import './addCircles';
import {doForce} from './doForce';
import {drag} from './drag';
import {restart} from './restart';
import {ticker} from './ticker';
import {genNodes} from './genNodes';
import {chargeForce, gravityForce} from './controlledForces'
import {trigger} from './trigger';

export default function(comp) {
  [
    doForce, drag, restart,
    // ticker,
    // genNodes,
    chargeForce,
    gravityForce,
    trigger
  ].forEach(e => {
    comp[e.name] = e.bind(comp);
  });
}
