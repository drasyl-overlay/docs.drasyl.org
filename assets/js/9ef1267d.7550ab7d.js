"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[683],{5680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>m});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,c=p["".concat(s,".").concat(m)]||p[m]||y[m]||i;return t?n.createElement(c,o(o({ref:a},g),{},{components:t})):n.createElement(c,o({ref:a},g))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3091:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(8168),r=(t(6540),t(5680));const i={sidebar_position:2},o="Serialization",l={unversionedId:"configuration/serialization",id:"configuration/serialization",title:"Serialization",description:"The messages that drasyl nodes send to each other are JVM objects. Message passing between nodes",source:"@site/docs/configuration/serialization.md",sourceDirName:"configuration",slug:"/configuration/serialization",permalink:"/master/configuration/serialization",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/docs/configuration/serialization.md",tags:[],version:"current",lastUpdatedAt:1736090065,formattedLastUpdatedAt:"Jan 5, 2025",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/master/configuration/overview"},next:{title:"Logging",permalink:"/master/configuration/logging"}},s={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Build-in serializers",id:"build-in-serializers",level:2},{value:"Enabled and bound to the serializable classes",id:"enabled-and-bound-to-the-serializable-classes",level:3},{value:"Enabled and must be manually bound",id:"enabled-and-must-be-manually-bound",level:3},{value:"Security notes",id:"security-notes",level:2}],g={toc:d};function y(e){let{components:a,...t}=e;return(0,r.yg)("wrapper",(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"serialization"},"Serialization"),(0,r.yg)("p",null,"The messages that drasyl nodes send to each other are JVM objects. Message passing between nodes\nliving on the same JVM is straightforward: It is done via reference passing. However, messages that\nmust leave the JVM to reach a node running on a different host must go through some form of\nserialization (i.e., the objects must be converted to and from byte arrays)."),(0,r.yg)("p",null,"The serialization mechanism in drasyl allows you to write custom serializers and to define which\nserializer should be used for what."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"In order for drasyl to know which serializer to use for what, you need to edit your configuration:"),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"drasyl.serialization.serializers"),"-section, bind names to implementations of\n",(0,r.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/Serializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Serializer")),"\nyou want to use, like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'drasyl {\n  serialization {\n    serializers {\n      java = "org.drasyl.node.handler.serialization.JavaSerializer"\n      jackson-json = "org.drasyl.node.handler.serialization.JacksonJsonSerializer"\n      proto = "org.drasyl.node.handler.serialization.ProtobufSerializer"\n      myown = "docs.serialization.MyOwnSerializer"\n    }\n  }\n}\n')),(0,r.yg)("p",null,"After you\u2019ve bound names to different implementations of\n",(0,r.yg)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/Serializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Serializer")),"\nyou need to wire which classes should be serialized using which serializer. This is done in\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"drasyl.serialization.bindings.inbound"),"-section for inbound messages and\n",(0,r.yg)("inlineCode",{parentName:"p"},"drasyl.serialization.bindings.outbound"),"-section for outbound messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'drasyl {\n  serialization {\n    serializers {\n      java = "org.drasyl.node.handler.serialization.JavaSerializer"\n      jackson-json = "org.drasyl.node.handler.serialization.JacksonJsonSerializer"\n      proto = "org.drasyl.node.handler.serialization.ProtobufSerializer"\n      myown = "docs.serialization.MyOwnSerializer"\n    }\n    \n    bindings {\n        inbound {\n          "[Ljava.lang.String;" = java\n          "docs.serialization.JsonSerializable" = jackson-json\n          "com.google.protobuf.Message" = proto\n          "docs.serialization.MyOwnSerializable" = myown\n        }\n        \n        outbound {\n          "[Ljava.lang.String;" = java\n          "docs.serialization.JsonSerializable" = jackson-json\n          "com.google.protobuf.Message" = proto\n          "docs.serialization.MyOwnSerializable" = myown\n        }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"You only need to specify the name of an interface or abstract base class of the messages."),(0,r.yg)("h2",{id:"build-in-serializers"},"Build-in serializers"),(0,r.yg)("p",null,"drasyl ships some build-in serializers for the most common object types. Serializers are already\ndefined and bound for the most common message types (Java primives, their wrapper classes, strings,\nand byte arrays). On the other hand, some serializers have to be bound manually to the desired\nclasses."),(0,r.yg)("h3",{id:"enabled-and-bound-to-the-serializable-classes"},"Enabled and bound to the serializable classes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Serializable Classes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-boolean")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/BooleanSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"BooleanSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-byte")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ByteSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ByteSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Byte"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"byte"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-char")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/CharacterSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"CharacterSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Character"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"char"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-float")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/FloatSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"FloatSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Float"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"float"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-int")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/IntegerSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"IntegerSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Integer"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"int"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-long")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/LongSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"LongSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Long"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"long"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive-short")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ShortSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ShortSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Short"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"short"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"bytes")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ByteArraySerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ByteArraySerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"byte[]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/StringSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"StringSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"String"))))),(0,r.yg)("p",null,"So if you only send object types that are included in this table, you don't need to configure\nanything!"),(0,r.yg)("h3",{id:"enabled-and-must-be-manually-bound"},"Enabled and must be manually bound"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Serializable Classes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"java")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/JavaSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"JavaSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://docs.oracle.com/javase/7/docs/api/java/io/Serializable.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Serializable")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"jackson-json")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/JacksonJsonSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"JacksonJsonSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"all Jackson-compatible classes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"proto")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ProtobufSerializer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ProtobufSerializer"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Protobuf ",(0,r.yg)("a",{parentName:"td",href:"https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Message"},(0,r.yg)("inlineCode",{parentName:"a"},"Message")))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/FasterXML/jackson"},"Serialization with Jackson")," is a good choice in many cases\nand our recommendation if you don\u2019t have other preferences."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers"},"Google Protocol Buffers")," is good if you want more\ncontrol over the schema evolution of your messages, but it requires more work to develop and\nmaintain the mapping between serialized representation and domain representation.")),(0,r.yg)("p",null,"Before binding arbitrary classes to a Serializer, please read the security notes below."),(0,r.yg)("h2",{id:"security-notes"},"Security notes"),(0,r.yg)("p",null,"With this configuration, a developer guarantees that all classes are secure and cannot be misused as\na deserialization gadget in the context of the Serializer. A reckless implementation of a permitted\nclass can leave the entire application and all executing machines vulnerable to remote code\nexecution."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},'An attacker is in general interested in all "non-pure" methods, which have promising side\neffects. A method is "pure" if:'),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The execution of the function has no side effects, and"),(0,r.yg)("li",{parentName:"ul"},"the return value of the function depends only on the input parameters passed to the function.")),(0,r.yg)("p",{parentName:"admonition"},"For example, a vulnerability could be a setter or getter that connects to a database.\nA vulnerable class is for example the ch.qos.logback.core.db.DriverManagerConnectionSource.\nAn attacker can choose the URL arbitrarily. By calling getConnection, Server Side Request Forgery (SSRF) and DOS attacks can occur."),(0,r.yg)("p",{parentName:"admonition"},"You can find more about this in the following literature:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://raw.githubusercontent.com/mbechler/marshalsec/master/marshalsec.pdf"},"Java Unmarshaller Security - Turning your data into code execution by Moritz Bechler")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://i.blackhat.com/us-18/Thu-August-9/us-18-Haken-Automated-Discovery-of-Deserialization-Gadget-Chains-wp.pdf"},"Automated Discovery of Deserialization Gadget Chains by Ian Haken")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://frohoff.github.io/appseccali-marshalling-pickles/"},"Marshalling Pickles by Chris Frohoff and Garbriel Lawrence")))))}y.isMDXComponent=!0}}]);