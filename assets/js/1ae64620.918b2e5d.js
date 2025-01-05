"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9812],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),d=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=t,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return r?a.createElement(y,o(o({ref:n},c),{},{components:r})):a.createElement(y,o({ref:n},c))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5531:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(8168),t=(r(6540),r(5680));const i={sidebar_position:1},o="Overview",l={unversionedId:"configuration/overview",id:"version-0.9/configuration/overview",title:"Overview",description:"drasyl is designed to work with zero-configuration.",source:"@site/versioned_docs/version-0.9/configuration/overview.md",sourceDirName:"configuration",slug:"/configuration/overview",permalink:"/0.9/configuration/overview",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.9/configuration/overview.md",tags:[],version:"0.9",lastUpdatedAt:1736090065,formattedLastUpdatedAt:"Jan 5, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/0.9/category/configuration"},next:{title:"Serialization",permalink:"/0.9/configuration/serialization"}},s={},d=[{value:"Create custom configurations",id:"create-custom-configurations",level:2},{value:"Use <code>DrasylConfig.Buidler</code>",id:"use-drasylconfigbuidler",level:3},{value:"Use <code>application.conf</code> file",id:"use-applicationconf-file",level:3},{value:"Use environment variables",id:"use-environment-variables",level:3}],c={toc:d};function p(e){let{components:n,...r}=e;return(0,t.yg)("wrapper",(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"overview"},"Overview"),(0,t.yg)("p",null,"drasyl is designed to work with zero-configuration.\nHowever, some use cases (e.g. using an own super peer) require customization configurations.\nFor this situation there are various parameters available to adjust the behavior of drasyl nodes."),(0,t.yg)("p",null,"An overview of all available parameters, their purpose and default values can be found in the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-node/src/main/resources/reference.conf"},"reference.conf")," file."),(0,t.yg)("h2",{id:"create-custom-configurations"},"Create custom configurations"),(0,t.yg)("p",null,"Because drasyl's configuration is based on ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"Lightbend Config library"),", there are many ways to create custom configurations."),(0,t.yg)("h3",{id:"use-drasylconfigbuidler"},"Use ",(0,t.yg)("inlineCode",{parentName:"h3"},"DrasylConfig.Buidler")),(0,t.yg)("p",null,"With\nthe ",(0,t.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.Builder.html"},(0,t.yg)("inlineCode",{parentName:"a"},"DrasylConfig.Buidler")),"\nclass, configurations can be created within Java. This allows you to define individual\nconfigurations for each node. It is done by\ncalling ",(0,t.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.html#newBuilder()"},(0,t.yg)("inlineCode",{parentName:"a"},"DrasylConfig.newBuilder() ... .build()")),"\n. Available builder methods can be obtained from\nthe ",(0,t.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.Builder.html"},"Javadoc"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="Configuration.java"',title:'"Configuration.java"'},'import org.drasyl.node.*;\nimport java.nio.file.Path;\nimport java.util.Set;\n\npublic class Configuration {\n    public static void main(final String[] args) {\n        // highlight-start\n        final DrasylConfig config = DrasylConfig.newBuilder()\n                .identityPath(Path.of("/Users/heiko/drasyl.identity"))\n                .networkId(22527)\n                .remoteSuperPeerEndpoints(Set.of(PeerEndpoint.of("udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1")))\n                .remoteEnabled(false)\n                .build();\n        // highlight-end\n    }\n}\n')),(0,t.yg)("p",null,"The resulting ",(0,t.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.html"},(0,t.yg)("inlineCode",{parentName:"a"},"DrasylConfig")),"\nobject can now be passed to\nthe ",(0,t.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#%3Cinit%3E(org.drasyl.node.DrasylConfig)"},(0,t.yg)("inlineCode",{parentName:"a"},"DrasylNode")," constructor"),"\n."),(0,t.yg)("h3",{id:"use-applicationconf-file"},"Use ",(0,t.yg)("inlineCode",{parentName:"h3"},"application.conf")," file"),(0,t.yg)("p",null,"You can add a resource called ",(0,t.yg)("inlineCode",{parentName:"p"},"application.conf")," to your java classpath to provide a custom config used by all your nodes.\nThis file has to use the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/master/HOCON.md"},"HOCON Syntax"),".\nThe file only needs to contain the parameters you want to overwrite because it will be merged with the default values found in ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-node/src/main/resources/reference.conf"},"reference.conf"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-hocon",metastring:'title="application.conf"',title:'"application.conf"'},'drasyl.identity.path = /Users/heiko/drasyl.identity\ndrasyl.network.id = 22527\ndrasyl.remote.super-peer.endpoint = "udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1"\n')),(0,t.yg)("h3",{id:"use-environment-variables"},"Use environment variables"),(0,t.yg)("p",null,"By setting the JVM property ",(0,t.yg)("inlineCode",{parentName:"p"},"-Dconfig.override_with_env_vars=true")," it is possible to override any configuration value using environment variables."),(0,t.yg)("p",null,"With this option enabled only environment variables starting with ",(0,t.yg)("inlineCode",{parentName:"p"},"CONFIG_FORCE_")," are considered, and the name is mangled as follows:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"the prefix ",(0,t.yg)("inlineCode",{parentName:"li"},"CONFIG_FORCE_")," is stripped"),(0,t.yg)("li",{parentName:"ul"},"single underscore(",(0,t.yg)("inlineCode",{parentName:"li"},"_"),") is converted into a dot(",(0,t.yg)("inlineCode",{parentName:"li"},"."),")"),(0,t.yg)("li",{parentName:"ul"},"double underscore(",(0,t.yg)("inlineCode",{parentName:"li"},"__"),") is converted into a dash(",(0,t.yg)("inlineCode",{parentName:"li"},"-"),")"),(0,t.yg)("li",{parentName:"ul"},"triple underscore(",(0,t.yg)("inlineCode",{parentName:"li"},"___"),") is converted into a single underscore(",(0,t.yg)("inlineCode",{parentName:"li"},"_"),")")),(0,t.yg)("p",null,"i.e. The environment variable ",(0,t.yg)("inlineCode",{parentName:"p"},"CONFIG_FORCE_a_b__c___d")," set the configuration key ",(0,t.yg)("inlineCode",{parentName:"p"},"a.b-c_d")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ CONFIG_FORCE_drasyl_identity_path=/Users/heiko/drasyl.identity \\\n    CONFIG_FORCE_drasyl_network_id=22527 \\\n    CONFIG_FORCE_drasyl_remote_super__peer_endpoint=udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1 \\\n    your-application.jar\n")),(0,t.yg)("admonition",{title:"Advanced References",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Further information regarding formatting can be taken directly from the configuration library that is used internally by drasyl: ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"https://github.com/lightbend/config"))))}p.isMDXComponent=!0}}]);