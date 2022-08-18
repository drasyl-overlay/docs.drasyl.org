"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,y=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:50},l="Command Line Tool",s={unversionedId:"cli",id:"cli",title:"Command Line Tool",description:"It is possible to run drasyl from the command line using the drasyl command.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/master/cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli.md",tags:[],version:"current",lastUpdatedAt:1660825652,formattedLastUpdatedAt:"Aug 18, 2022",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Remote Message Invocation",permalink:"/master/advanced-usage/remote-message-invocation"},next:{title:"Public Super Peers",permalink:"/master/public-super-peers"}},i={},d=[{value:"Docker",id:"docker",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Chocolatey",id:"chocolatey",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,a.kt)("p",null,"It is possible to run drasyl from the command line using the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command makes it possible to start up drasyl nodes, generate identities, and more directly from the command line."),(0,a.kt)("p",null,"You can download the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl-overlay/drasyl/releases"},"GitHub"),".\nThe download includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/drasyl")," executable for Linux/macOS users and a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/drasyl.bat")," for Windows users."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl help")," to get an overview of available commands and flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ drasyl help\ndrasyl Command Line Interface: A collection of utilities for drasyl.\n\nUsage: drasyl [COMMAND]\n\n  genidentity  Generates and outputs a new identity\n  help         Displays help information about the specified command\n  node         Runs a drasyl node\n  perf         Tool for measuring network performance\n  pubkey       Dervices the public key and prints it to standard output from a\n                 private key given on standard input\n  tunnel       Expose safely local networked services behind through NATs and\n                 firewalls to other computers\n  version      Shows the drasyl version number, the java version, and the\n                 architecture\n  wormhole     Transfer a text message or file from one computer to another,\n                 safely and through NATs and firewalls\n\nThe environment variable JAVA_OPTS can be used to pass options to the JVM.\n")),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/drasyl/drasyl"},(0,a.kt)("inlineCode",{parentName:"a"},"drasyl/drasyl"))," image provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command to the host. So no need to install drasyl on your machine, you can just use this docker image."),(0,a.kt)("p",null,"For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -i -t drasyl/drasyl version\n- drasyl-cli.version 0.6.0 (01183ed)\n- drasyl-core.version 0.6.0 (01183ed)\n- drasyl-node.version 0.6.0 (01183ed)\n- drasyl-plugin-groups-client.version 0.6.0 (01183ed)\n- drasyl-plugin-groups-manager.version 0.6.0 (01183ed)\n- java.version 17.0.1\n- os.name Mac OS X\n- os.version 11.4\n- os.arch x86_64\n")),(0,a.kt)("p",null,"To run a node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# generate an identity (this can take some time)\n$ docker run -i -t drasyl/drasyl genidentity | grep -v "WARNING:" > drasyl.identity\n\n# start a node\n$ docker run -i -t -p 22527:22527 \\\n    -v $PWD/drasyl.identity:/drasyl.identity \\\n    drasyl/drasyl node\n')),(0,a.kt)("p",null,"This command passes the just generated identity to the docker container and then launch the ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl node")," command."),(0,a.kt)("h2",{id:"homebrew"},"Homebrew"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command can also be downloaded with ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install drasyl-overlay/tap/drasyl\n")),(0,a.kt)("h2",{id:"chocolatey"},"Chocolatey"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl")," command can also be downloaded with ",(0,a.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/drasyl"},"Chocolatey"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ choco install drasyl\n")))}p.isMDXComponent=!0}}]);