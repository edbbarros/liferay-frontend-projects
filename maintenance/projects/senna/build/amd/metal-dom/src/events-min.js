define(["metal/src/metal","./dom","./features"],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e={mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"};Object.keys(e).forEach(function(n){(0,t.registerCustomEvent)(n,{delegate:!0,handler:function(e,r){var o=r.relatedTarget,a=r.delegateTarget;if(!o||o!==a&&!(0,t.contains)(a,o))return r.customType=n,e(r)},originalEvent:e[n]})});var n={animation:"animationend",transition:"transitionend"};Object.keys(n).forEach(function(e){var r=n[e];(0,t.registerCustomEvent)(r,{event:!0,delegate:!0,handler:function(e,t){return t.customType=r,e(t)},originalEvent:a["default"].checkAnimationEventName()[e]})})}var a=r(n);(0,e.isServerSide)()||o()});