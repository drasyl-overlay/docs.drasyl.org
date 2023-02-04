"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:90},o="Insights",s={unversionedId:"insights",id:"version-0.9/insights",title:"Insights",description:"We give some (more or less deeper) insights about how drasyl works on this site.",source:"@site/versioned_docs/version-0.9/insights.md",sourceDirName:".",slug:"/insights",permalink:"/0.9/insights",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.9/insights.md",tags:[],version:"0.9",lastUpdatedAt:1675526300,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Public Super Peers",permalink:"/0.9/public-super-peers"},next:{title:"Contributing",permalink:"/0.9/contributing"}},l={},p=[{value:"Addressing",id:"addressing",level:2},{value:"Network Topology",id:"network-topology",level:2},{value:"Peer Discovery",id:"peer-discovery",level:2},{value:"NAT Traversal",id:"nat-traversal",level:2},{value:"Message Routing",id:"message-routing",level:2},{value:"Cryptography",id:"cryptography",level:2},{value:"Protocol",id:"protocol",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insights"},"Insights"),(0,a.kt)("p",null,"We give some (more or less deeper) insights about how drasyl works on this site."),(0,a.kt)("h2",{id:"addressing"},"Addressing"),(0,a.kt)("p",null,"Each node generates on the first start a unique identity consisting of a public/private key-pair and a proof of work (PoW):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The public key is used to address the node."),(0,a.kt)("li",{parentName:"ul"},"Furthermore, both keys are used for a key agreement. These results in two session keys ",(0,a.kt)("inlineCode",{parentName:"li"},"tx")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rx"),", respectively, for encryption and decryption."),(0,a.kt)("li",{parentName:"ul"},"The PoW is bound to the address and acts as a counter measurement for sybil/eclipse attacks by reducing the number of identities an attacker can generate within a given time.")),(0,a.kt)("h2",{id:"network-topology"},"Network Topology"),(0,a.kt)("p",null,"Currently, the overlay network consists of a group of always present well-known public super nodes and (possible private) client nodes registering with at least one super node.\nEach super node maintains a registry of currently registered overlay nodes. Client nodes use this information to discover other peers."),(0,a.kt)("p",null,"In the future, each public client node should be able to promote itself to a super node dynamically.\nFurthermore, all super nodes should maintain a shared registry."),(0,a.kt)("h2",{id:"peer-discovery"},"Peer Discovery"),(0,a.kt)("p",null,"drasyl uses different methods to find other peers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Peers running within the same process (JVM instance) are eagerly discovered through a shared memory-based discovery mechanism."),(0,a.kt)("li",{parentName:"ul"},"Peers running in different processes but on the same host are eagerly discovered through a file system-based discovery mechanism."),(0,a.kt)("li",{parentName:"ul"},"Peers running within the same network are eagerly discovered by using an IP Multicast-based discovery mechanism."),(0,a.kt)("li",{parentName:"ul"},"Peers located in other networks are lazily discovered through well-known public reachable so-called super nodes that maintain a registry with all overlay nodes and their respective IP addresses/ports.")),(0,a.kt)("h2",{id:"nat-traversal"},"NAT Traversal"),(0,a.kt)("p",null,'Communication between any two computers on the Internet is not always possible.\nMost computers on the Internet are located behind a NAT, which makes them inaccessible from the Internet.\nThis makes it somewhat difficult to connect to these computers.\ndrasyl utilizes UDP hole punching together with port forwarding to traverse as many NATs as possible.\nAs long as neither of the peers is behind a NAT with endpoint-dependent mapping (also known as symmetric NAT or "hard" NAT) and port forwarding is not possible, our approach can establish a direct connection.\nOur approach can be seen as an improved version of "Simple Hole-Punching" presented in ',(0,a.kt)("a",{parentName:"p",href:"https://doi.org/10.1109/ICCCN.2009.5235278"},"NATCracker: NAT Combinations Matter"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Peer ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and peer ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," periodically register with server ",(0,a.kt)("inlineCode",{parentName:"li"},"S")," to join and remain on the overlay network.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," thus learns the (possibly NAT-mapped) public endpoint (IP address and port) of ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,a.kt)("li",{parentName:"ul"},"This traffic from ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"S")," creates NAT mappings allowing ",(0,a.kt)("inlineCode",{parentName:"li"},"S")," to reach both ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"."))),(0,a.kt)("li",{parentName:"ul"},"If peer ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," wants to communicate with ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),", a respective intention is sent to ",(0,a.kt)("inlineCode",{parentName:"li"},"S"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," then sends the known endpoint of ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," to the respective other peer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," now try to reach each other via the endpoint received from ",(0,a.kt)("inlineCode",{parentName:"li"},"S"),"."),(0,a.kt)("li",{parentName:"ul"},"If one of the peers is behind an endpoint-dependent NAT, reachability messages may come from an endpoint distinct to the one received from ",(0,a.kt)("inlineCode",{parentName:"li"},"S"),".\nIn this case, the peer switches to the newly discovered endpoint and tries to reach the peer at this endpoint.")),(0,a.kt)("p",null,"Typically, the well-known Interactive Connectivity Establishment (",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5245"},"RFC 5245"),") is used for NAT traversal. We decided against it for the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"While ICE needs several seconds for traversal, our approach takes only a few tenths of a millisecond."),(0,a.kt)("li",{parentName:"ul"},"ICE itself does not provide any security services (see Section 18 of RFC 5245) and relies on other protocols. This causes more handshakes and state exchange, which leads to increased traversal time and message complexity. In our approach, however, all communication is already authenticated and encrypted.")),(0,a.kt)("h2",{id:"message-routing"},"Message Routing"),(0,a.kt)("p",null,"drasyl routes messages automatically via the shortest available path (same process > same host > same network > traversed direct connection > relayed connection).\nThe overlay will never give up on discovering more-local paths.\nIf a node has no path to a peer, it will use one of its super nodes as a default gateway.\nThe super node will hopefully have a path to the recipient and will then relay the message.\nOtherwise, the message will be discarded.\nOnce a super node relays a message it will help both peers to traverse any possible present NATs."),(0,a.kt)("h2",{id:"cryptography"},"Cryptography"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Any message in drasyl is encrypted by default unless you disable the encryption in the configuration file.\nWe strongly advise against turning off the encryption!")),(0,a.kt)("p",null,"drasyl uses the public part of an ed25519 key pair to address any node in the drasyl network. To provide fast 0-RTT encryption,\ndrasyl operates in two modes of encryption:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the first mode, drasyl uses the ed25519 keys and converts them into a curve25519, to do an\n0-RTT x25519 key agreement \u2013 we call this the long-time encryption. Long-time encryption is the\ndefault case.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To raise the security and provide perfect forward secrecy, drasyl tries in the background to do\nkey exchange and agreement with a newly generated ephemeral curve25519. If a perfect forward\nsecrecy session was established between the two nodes, drasyl fires\na ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/PerfectForwardSecrecyEncryptionEvent.html"},"PerfectForwardSecrecyEncryptionEvent"),"\n. If the connection provides no longer perfect forward secrecy\na ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/event/LongTimeEncryptionEvent.html"},"LongTimeEncryptionEvent"),"\nis fired."))),(0,a.kt)("p",null,"Both x25519 key agreements generate two shared secrets, to avoid the need for any synchronization."),(0,a.kt)("p",null,"The shared secrets will be used as a key for the stream cipher XChaCha20, with the additional Poly1305 authenticator,\nto provide AEAD.\nUsing a stream cipher allows efficient computation on weak devices that do not have an AES hardware module."),(0,a.kt)("h2",{id:"protocol"},"Protocol"),(0,a.kt)("p",null,"drasyl uses a custom-tailored stateless protocol based on UDP. The following four message types exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hello:")," Sent from client nodes to super nodes for registration and between client nodes for NAT traversal (like a ping)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ack:")," Confirm the recieval and processing of an previously received ",(0,a.kt)("em",{parentName:"li"},"Hello")," message (like a pong)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unite:")," Sent from super node to client nodes to provide routing information for NAT traversal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"App:")," Carry user messages.")),(0,a.kt)("p",null,"Each message type consists of an authenticated public header with routing information and an encrypted private body with the message payload.\nMessages can only be authenticated and decrypted by the recipient."),(0,a.kt)("p",null,"To keep the protocol leightweight, no reliable transmission, error detection, or flow control of ",(0,a.kt)("em",{parentName:"p"},"App")," messages is guaranteed.\nDepending on the use case, these features can be provided by higher protocols."))}c.isMDXComponent=!0}}]);