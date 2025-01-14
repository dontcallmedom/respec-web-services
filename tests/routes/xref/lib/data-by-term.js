export default {
  "event handler": [
    {
      type: "dfn",
      spec: "html",
      shortname: "html",
      status: "snapshot",
      uri: "webappapis.html#event-handlers",
    },
  ],
  "": [
    {
      type: "enum-value",
      spec: "referrer-policy-1",
      shortname: "referrer-policy",
      status: "current",
      uri: "#dom-referrerpolicy",
      for: ["ReferrerPolicy"],
    },
    {
      type: "enum-value",
      spec: "fetch",
      shortname: "fetch",
      status: "current",
      uri: "#dom-requestdestination",
      for: ["RequestDestination"],
    },
    {
      type: "enum-value",
      spec: "xhr",
      shortname: "xhr",
      status: "current",
      uri: "#dom-xmlhttprequestresponsetype",
      for: ["XMLHttpRequestResponseType"],
    },
  ],
  Baseline: [
    {
      type: "interface",
      spec: "font-metrics-api-1",
      shortname: "font-metrics-api",
      status: "current",
      uri: "#baseline",
    },
  ],
  baseline: [
    {
      type: "dfn",
      spec: "svg2",
      shortname: "svg",
      status: "snapshot",
      uri: "text.html#TermBaseline",
    },
    {
      type: "dfn",
      spec: "svg2",
      shortname: "svg",
      status: "current",
      uri: "text.html#TermBaseline",
    },
  ],
  body: [
    {
      shortname: "fetch",
      spec: "fetch",
      uri: "#concept-body",
      type: "dfn",
    },
    {
      shortname: "html",
      spec: "html",
      uri: "sections.html#the-body-element",
      type: "element",
    },
  ],
  script: [
    {
      type: "enum-value",
      spec: "fetch",
      shortname: "fetch",
      status: "current",
      uri: "#dom-requestdestination-script",
      for: ["RequestDestination"],
    },
    {
      type: "element",
      spec: "html",
      shortname: "html",
      status: "snapshot",
      uri: "scripting.html#script",
    },
    {
      type: "dfn",
      spec: "html",
      shortname: "html",
      status: "snapshot",
      uri: "webappapis.html#concept-script",
    },
    {
      type: "element",
      spec: "svg",
      shortname: "svg",
      status: "snapshot",
      uri: "script.html#ScriptElement",
    },
    {
      type: "element",
      spec: "svg2",
      shortname: "svg",
      status: "snapshot",
      uri: "interact.html#elementdef-script",
    },
    {
      type: "element",
      spec: "svg2",
      shortname: "svg",
      status: "current",
      uri: "interact.html#elementdef-script",
    },
  ],
  "inherited value": [
    {
      type: "dfn",
      spec: "css-cascade-3",
      shortname: "css-cascade",
      status: "snapshot",
      uri: "#inherited-value",
    },
    {
      type: "dfn",
      spec: "css-cascade-3",
      shortname: "css-cascade",
      status: "current",
      uri: "#inherited-value",
    },
    {
      type: "dfn",
      spec: "css-cascade-4",
      shortname: "css-cascade",
      status: "snapshot",
      uri: "#inherited-value",
    },
    {
      type: "dfn",
      spec: "css-cascade-4",
      shortname: "css-cascade",
      status: "current",
      uri: "#inherited-value",
    },
  ],
  marker: [
    {
      type: "dfn",
      spec: "css-lists-3",
      shortname: "css-lists",
      status: "current",
      uri: "#marker",
    },
    {
      type: "element",
      spec: "svg",
      shortname: "svg",
      status: "snapshot",
      uri: "painting.html#MarkerElement",
    },
    {
      type: "element",
      spec: "svg2",
      shortname: "svg",
      status: "snapshot",
      uri: "painting.html#elementdef-marker",
    },
    {
      type: "element",
      spec: "svg2",
      shortname: "svg",
      status: "current",
      uri: "painting.html#elementdef-marker",
    },
  ],
  EventInit: [
    {
      type: "dictionary",
      spec: "dom",
      shortname: "dom",
      status: "snapshot",
      uri: "#dictdef-eventinit",
    },
  ],
  "[[context]]": [
    {
      type: "attribute",
      spec: "web-bluetooth-1",
      shortname: "web-bluetooth",
      status: "snapshot",
      uri: "#dom-bluetoothdevice-context-slot",
      for: ["BluetoothDevice"],
    },
  ],
  event: [
    {
      type: "dfn",
      spec: "dom",
      shortname: "dom",
      status: "snapshot",
      uri: "#concept-event",
    },
    {
      type: "attribute",
      spec: "dom",
      shortname: "dom",
      status: "snapshot",
      uri: "#dom-window-event",
      for: ["Window"],
    },
    {
      type: "attribute",
      spec: "html",
      shortname: "html",
      status: "snapshot",
      uri: "obsolete.html#dom-script-event",
      for: ["HTMLScriptElement"],
    },
  ],
  "for each": [
    {
      type: "dfn",
      spec: "infra",
      shortname: "infra",
      status: "current",
      uri: "#list-iterate",
      for: ["list", "set"],
    },
  ],
  aborted: [
    {
      type: "attribute",
      spec: "dom",
      shortname: "dom",
      status: "snapshot",
      uri: "#dom-abortsignal-aborted",
      for: ["AbortSignal"],
    },
  ],
  "user agent": [
    {
      type: "dfn",
      spec: "infra",
      shortname: "infra",
      status: "current",
      uri: "#user-agent",
      normative: true,
    },
    {
      type: "dfn",
      spec: "wai-aria-1.2",
      shortname: "wai-aria",
      status: "current",
      uri: "#dfn-user-agent",
      normative: false,
    },
  ],
  "user agents": [
    {
      type: "dfn",
      spec: "wai-aria-1.2",
      shortname: "wai-aria",
      status: "current",
      uri: "#dfn-user-agent",
      normative: false,
    },
  ],
};
