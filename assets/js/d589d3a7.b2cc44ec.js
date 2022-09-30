"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:20},i="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"This guide describes the necessary steps to create your first drasyl node and how to integrate it into your application.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/master/getting-started",draft:!1,editUrl:"https://github.com/drasyl-overlay/docs.drasyl.org/blob/master/docs/getting-started.md",tags:[],version:"current",lastUpdatedAt:1664581094,formattedLastUpdatedAt:"Sep 30, 2022",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/master/"},next:{title:"Configuration",permalink:"/master/category/configuration"}},l={},d=[{value:"Add Dependency",id:"add-dependency",level:2},{value:"Implementing <code>DrasylNode</code>",id:"implementing-drasylnode",level:2},{value:"Node Events",id:"node-events",level:2},{value:"Sending Messages",id:"sending-messages",level:2},{value:"Receiving Messages",id:"receiving-messages",level:2},{value:"Starting &amp; Stopping the drasyl Node",id:"starting--stopping-the-drasyl-node",level:2},{value:"Summary",id:"summary",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This guide describes the necessary steps to create your first drasyl node and how to integrate it into your application."),(0,r.kt)("p",null,"Once the node is set up, it and therefore your application can participate in the drasyl Overlay Network and communicate with other nodes and applications."),(0,r.kt)("h2",{id:"add-dependency"},"Add Dependency"),(0,r.kt)("p",null,"Create a new maven project and add the dependency to your ",(0,r.kt)("a",{parentName:"p",href:"http://maven.apache.org/pom.html"},"pom.xml"),":"),(0,r.kt)("p",null,"Maven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<repositories>\n    <repository>\n        <id>oss.sonatype.org-snapshot</id>\n        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>\n        <releases>\n            <enabled>false</enabled>\n        </releases>\n        <snapshots>\n            <enabled>true</enabled>\n        </snapshots>\n    </repository>\n</repositories>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-node</artifactId>\n    <version>0.10.0-SNAPSHOT</version>\n</dependency>\n")),(0,r.kt)("p",null,"Other Dependency Managers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-node:0.10.0-SNAPSHOT" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-node" rev="0.10.0-SNAPSHOT" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-node" % "0.10.0-SNAPSHOT" // build.sbt\n')),(0,r.kt)("h2",{id:"implementing-drasylnode"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h2"},"DrasylNode")),(0,r.kt)("p",null,"Next, you can create your own drasyl node by implementing ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DrasylNode")),"."),(0,r.kt)("p",null,"This class contains the following methods that are now relevant for you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#send(java.lang.String,java.lang.Object)"},(0,r.kt)("inlineCode",{parentName:"a"},"send(...)")),":\nallows your application to send arbitrary messages to other drasyl nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#onEvent(org.drasyl.node.event.Event)"},(0,r.kt)("inlineCode",{parentName:"a"},"onEvent(...)")),":\nallows your application to react to certain events (e.g. process received messages, connection to the network established/lost). This method must be implemented."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#start()"},(0,r.kt)("inlineCode",{parentName:"a"},"start()")),":"),(0,r.kt)("li",{parentName:"ul"},"starts the node, which will then automatically connect to the drasyl network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#shutdown()"},(0,r.kt)("inlineCode",{parentName:"a"},"shutdown()")),":\ndisconnects from the drasyl network and shuts down the node.")),(0,r.kt)("p",null,"Here you can see a minimal working example of a node that forwards all received events to ",(0,r.kt)("inlineCode",{parentName:"p"},"System.out"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GettingStarted.java"',title:'"GettingStarted.java"'},'import org.drasyl.node.*;\nimport org.drasyl.node.event.Event;\n\npublic class GettingStarted {\n    public static void main(final String[] args) throws DrasylException {\n        // highlight-start\n        final DrasylNode node = new DrasylNode() {\n            @Override\n            public void onEvent(final Event event) {\n                System.out.println("Event received: " + event);\n            }\n        };\n        // highlight-end\n    }\n}\n')),(0,r.kt)("h2",{id:"node-events"},"Node Events"),(0,r.kt)("p",null,"As mentioned before, different events are received by the application.\nThese provide information about the state of your node, received messages or connections to other nodes.\nIt is therefore important that you become familiar with the ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/package-summary.html"},"definitions and implications")," of the different event types."),(0,r.kt)("p",null,"For example, you should listen for ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeOnlineEvent")," before start sending messages, and pause when ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeOfflineEvent")," has been received."),(0,r.kt)("h2",{id:"sending-messages"},"Sending Messages"),(0,r.kt)("p",null,"Every message that is to be sent requires a recipient address.\nEach drasyl node creates an identity at its first startup consisting of a cryptographic public-private key pair.\nFrom the public key, a 10 hex digit address is derived, by which each node can be uniquely identified."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," method needs the recipient as first argument and the message payload as second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GettingStarted.java"',title:'"GettingStarted.java"'},'import org.drasyl.node.*;\nimport org.drasyl.node.event.*;\nimport java.util.concurrent.*;\n\npublic class GettingStarted {\n    public static void main(final String[] args) throws DrasylException {\n        final CompletableFuture<Void> online = new CompletableFuture<>();\n\n        final DrasylNode node = new DrasylNode() {\n            @Override\n            public void onEvent(final Event event) {\n                if (event instanceof NodeOnlineEvent) {\n                    online.complete(null);\n                }\n            }\n        };\n\n        // wait for node to come online\n        online.join();\n\n        // highlight-start\n        final String recipient = "0229041b273dd5ee1c2bef2d77ae17dbd00d2f0a2e939e22d42ef1c4bf05147ea9";\n        final String payload = "Hello World";\n        final CompletionStage<Void> sent = node.send(recipient, payload);\n        // highlight-end\n    }\n}\n')),(0,r.kt)("p",null,"The returned ",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-completablefuture"},"Future")," does not give any feedback on whether the message could be delivered.\nThe future is successfully completed if the local node could deliver the message itself or forward it to a super peer that acts as a default gateway.\nOtherwise the future is completed exceptionally."),(0,r.kt)("admonition",{title:"Advanced References",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The addresses of recipient nodes must be known, as drasyl-core has no function for querying available addresses.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/master/plugins/groups"},"Groups Plugin")," can be used to get automatically notified about other nodes joining and leaving the network.")),(0,r.kt)("h2",{id:"receiving-messages"},"Receiving Messages"),(0,r.kt)("p",null,"Each received message is announced by an ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/MessageEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageEvent"))," to the application.\nThe event contains a getters for the message's sender and payload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GettingStarted.java"',title:'"GettingStarted.java"'},'import org.drasyl.node.*;\nimport org.drasyl.node.event.*;\n\npublic class GettingStarted {\n    public static void main(final String[] args) throws DrasylException {\n        final DrasylNode node = new DrasylNode() {\n            @Override\n            public void onEvent(final Event event) {\n                // highlight-start\n                if (event instanceof MessageEvent) {\n                    System.out.println("Message received from " + message.getSender() + " with payload " + message.getPayload());\n                }\n                // highlight-end\n            }\n        };\n    }\n}\n')),(0,r.kt)("h2",{id:"starting--stopping-the-drasyl-node"},"Starting & Stopping the drasyl Node"),(0,r.kt)("p",null,"Before you can use the drasyl node, you must start it using ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#start()"},(0,r.kt)("inlineCode",{parentName:"a"},"node.start()")),".\nFor communication with other nodes in the local network, the node starts a server listening on port 22527.\nMake sure that the port is available. After the node has been successfully started, it emits an ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/NodeUpEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeUpEvent"))," to the application.\nThen, once it has successfully connected to the overlay network, an ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/NodeOnlineEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeOnlineEvent"))," is emitted."),(0,r.kt)("p",null,"If the node is temporarily or permanently no longer needed, it can be shut down using ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#shutdown()"},(0,r.kt)("inlineCode",{parentName:"a"},"node.shutdown()")),".\nA ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/NodeDownEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeDownEvent"))," is emitted immediately after this call. The application should now no longer attempt to send messages.\nAs soon as the connection to the drasyl network is terminated, an ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/NodeOfflineEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeOfflineEvent"))," is emitted.\nA ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/NodeNormalTerminationEvent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeNormalTerminationEvent"))," is emitted when the shutdown is done."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this chapter, we had a quick tour of drasyl with a demonstration on how to create a node, start and stop it, send messages, and process emitted events."),(0,r.kt)("p",null,"Have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl-overlay/drasyl/tree/master/drasyl-examples"},"our examples")," to see how drasyl can be used for different scenarios."))}m.isMDXComponent=!0}}]);