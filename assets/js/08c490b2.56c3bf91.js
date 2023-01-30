"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4163],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,y=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:10},l="Command Line Tool",i={unversionedId:"cli/intro",id:"cli/intro",title:"Command Line Tool",description:"It is possible to run drasyl from the command line using the drasyl command.",source:"@site/docs/cli/intro.md",sourceDirName:"cli",slug:"/cli/intro",permalink:"/master/cli/intro",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/docs/cli/intro.md",tags:[],version:"current",lastUpdatedAt:1675096462,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Distributed Lookup",permalink:"/master/advanced-usage/distributed-lookup"},next:{title:"Run a Node",permalink:"/master/cli/node"}},s={},d=[{value:"Docker",id:"docker",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Chocolatey",id:"chocolatey",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,a.kt)("p",null,"It is possible to run drasyl from the command line using the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command makes it possible to start up drasyl nodes, generate identities, and more directly from the command line."),(0,a.kt)("p",null,"You can download the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/releases"},"GitHub"),".\nThe download includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/drasyl")," executable for Linux/macOS users and a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/drasyl.bat")," for Windows users."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl help")," to get an overview of available commands and flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ drasyl help\ndrasyl Command Line Interface: A collection of utilities for drasyl.\n\nUsage: drasyl [COMMAND]\n\n  generate-completion  Generate bash/zsh completion script for drasyl.\n  generate-identity    Generate and output a new identity.\n  generate-pow         Generate and outputs a new proof of work for a given\n                         public key.\n  help                 Displays help information about the specified command\n  node                 Run a drasyl node.\n  node-rc              Remote controlling a node.\n  perf                 Tool for measuring network performance.\n  pubkey               Dervices the public key and prints it to standard output\n                         from a private key given on standard input.\n  tun                  Create a local network interface routing traffic to\n                         given peers.\n  tun-rc               Remote controlling a network interface created by the\n                         "tun" command.\n  tunnel               Expose safely local networked services behind through\n                         NATs and firewalls to other computers.\n  version              Shows the drasyl version number, the java version, and\n                         the architecture.\n  wormhole             Transfer a text message or file from one computer to\n                         another, safely and through NATed firewalls.\n\nThe environment variable JAVA_OPTS can be used to pass options to the JVM.\n')),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/drasyl/drasyl"},(0,a.kt)("inlineCode",{parentName:"a"},"drasyl/drasyl"))," image provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command to the host. So no need to install drasyl on your machine, you can just use this docker image."),(0,a.kt)("p",null,"For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -i -t drasyl/drasyl version\n- drasyl-cli.version 0.8.0 (a773985)\n- drasyl-core.version 0.8.0 (a773985)\n- drasyl-node.version 0.8.0 (a773985)\n- drasyl-plugin-groups-client.version 0.8.0 (a773985)\n- drasyl-plugin-groups-manager.version 0.8.0 (a773985)\n- java.version 11.0.15\n- os.name Linux\n- os.version 5.10.47-linuxkit\n- os.arch amd64\n")),(0,a.kt)("p",null,"To run a node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# generate an identity (this can take some time)\n$ docker run -i -t drasyl/drasyl genidentity | grep -v "WARNING:" > drasyl.identity\n\n# start a node\n$ docker run -i -t -p 22527:22527 \\\n    -v $PWD/drasyl.identity:/drasyl.identity \\\n    drasyl/drasyl node\n')),(0,a.kt)("p",null,"This command passes the just generated identity to the docker container and then launch the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl node")," command."),(0,a.kt)("h2",{id:"homebrew"},"Homebrew"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command can also be downloaded with ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install drasyl/tap/drasyl\n")),(0,a.kt)("h2",{id:"chocolatey"},"Chocolatey"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command can also be downloaded with ",(0,a.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/drasyl"},"Chocolatey"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ choco install drasyl\n")))}p.isMDXComponent=!0}}]);