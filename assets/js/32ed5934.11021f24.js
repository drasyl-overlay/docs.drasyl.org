"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},i="Logging",l={unversionedId:"configuration/logging",id:"configuration/logging",title:"Logging",description:"To use logging, you must configure it via the SLF4J backend, such as",source:"@site/docs/configuration/logging.md",sourceDirName:"configuration",slug:"/configuration/logging",permalink:"/master/configuration/logging",draft:!1,editUrl:"https://github.com/drasyl-overlay/docs.drasyl.org/blob/master/docs/configuration/logging.md",tags:[],version:"current",lastUpdatedAt:1664581094,formattedLastUpdatedAt:"Sep 30, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Serialization",permalink:"/master/configuration/serialization"},next:{title:"Plugins",permalink:"/master/category/plugins"}},c={},p=[{value:"Add Dependency",id:"add-dependency",level:2},{value:"Example Configuration",id:"example-configuration",level:2}],g={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("p",null,"To use logging, you must configure it via the ",(0,o.kt)("a",{parentName:"p",href:"http://www.slf4j.org/"},"SLF4J")," backend, such as\n",(0,o.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback"),":"),(0,o.kt)("h2",{id:"add-dependency"},"Add Dependency"),(0,o.kt)("p",null,"Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>ch.qos.logback</groupId>\n    <artifactId>logback-classic</artifactId>\n    <version>1.2.11</version>\n</dependency>\n")),(0,o.kt)("p",null,"Other dependency managers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Gradle : compile "ch.qos.logback:logback-classic:1.2.3" // build.gradle \n   Ivy : <dependency org="ch.qos.logback" name="logback-classic" rev="1.2.3" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.2.3" // build.sbt\n')),(0,o.kt)("h2",{id:"example-configuration"},"Example Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="logback.xml"',title:'"logback.xml"'},'<configuration>\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        <encoder>\n            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <logger name="io.netty" level="WARN" />\n    \n    <root level="debug">\n        <appender-ref ref="STDOUT" />\n    </root>\n</configuration>\n')))}s.isMDXComponent=!0}}]);