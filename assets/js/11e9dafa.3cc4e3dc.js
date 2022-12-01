"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[529],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(t),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Bootstrapping",s={unversionedId:"advanced-usage/bootstrapping",id:"version-0.8/advanced-usage/bootstrapping",title:"Bootstrapping",description:"In the previous section, we learned how to use the DrasylNode class \u2014 a",source:"@site/versioned_docs/version-0.8/advanced-usage/bootstrapping.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/bootstrapping",permalink:"/0.8/advanced-usage/bootstrapping",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.8/advanced-usage/bootstrapping.md",tags:[],version:"0.8",lastUpdatedAt:1669912576,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/0.8/category/advanced-usage"},next:{title:"Membership Management",permalink:"/0.8/advanced-usage/membership-management"}},l={},p=[{value:"Background: Netty Concepts",id:"background-netty-concepts",level:2},{value:"<code>Channel</code>s",id:"channels",level:3},{value:"Events Handlers",id:"events-handlers",level:3},{value:"Bootstrapping",id:"bootstrapping-1",level:3},{value:"Create Node using Bootstrapping",id:"create-node-using-bootstrapping",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bootstrapping"},"Bootstrapping"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/0.8/getting-started"},"previous section"),", we learned how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DrasylNode")," class \u2014 a\nminimalist interface to integrate drasyl into your application.\nIt provides rich flexibility through customization, configuring the node that best fits your use case.\nBut for some use cases, you may want to customize your node even further.\nFor this, we provide a Bootstrapping interface, a more powerful way to create a drasyl node."),(0,r.kt)("p",null,"To help understand the Bootstrapping interface, we first want to give the background some information on\nthe technical internals of drasyl and the applied concepts."),(0,r.kt)("h2",{id:"background-netty-concepts"},"Background: Netty Concepts"),(0,r.kt)("p",null,"The core of drasyl is built with ",(0,r.kt)("a",{parentName:"p",href:"https://netty.io/"},"Netty"),'.\nNetty describes itself as "an asynchronous event-driven network application framework for rapid\ndevelopment of maintainable high performance protocol servers & clients".\nTo this end, Netty defines an architectural model and a rich set of design patterns for network\nprogramming.'),(0,r.kt)("h3",{id:"channels"},(0,r.kt)("inlineCode",{parentName:"h3"},"Channel"),"s"),(0,r.kt)("p",null,"One of Netty's primary building block is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/nio/channels/Channel.html"},"basic construct of Java NIO"),".\nIt represents"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an open connection to an entity such as a hardware device, a file, a  network socket, or a program\ncomponent that is capable of performing  one or more distinct I/O operations, for example reading\nor writing.")),(0,r.kt)("p",null,"Netty uses this ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel")," interface mainly for IP-based transports like TCP or UDP.\ndrasyl has adopted this concept and provides a unified interface for communication with peers, regardless of their location and route."),(0,r.kt)("h3",{id:"events-handlers"},"Events Handlers"),(0,r.kt)("p",null,"Netty (and therefore drasyl) uses distinct events to notify your application about status changes of the channel or issues operations.\nThis allows your application to react with the appropriate action based on the type of occurring event (e.g., logging, data transformation, flow-control, business logic, etc.)."),(0,r.kt)("p",null,"To control what actions your application should apply, each ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel")," applies the interceptor design pattern.\nThat means that you can register a given number of interceptors (so-called ",(0,r.kt)("a",{parentName:"p",href:"https://livebook.manning.com/book/netty-in-action/chapter-6/"},(0,r.kt)("inlineCode",{parentName:"a"},"ChannelHandler")),"s) to a channel, performing independently various.\nThese ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelHandler"),"s can be added, removed, and resorted to at any time for each ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel"),".\nNetty provides an extensive set of predefined handlers, most of which are compatible with drasyl!"),(0,r.kt)("h3",{id:"bootstrapping-1"},"Bootstrapping"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livebook.manning.com/book/netty-in-action/chapter-8/"},"Bootstrapping")," defines the startup code configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"Channel"),".\nAt a minimum, it binds the node to a given overlay identity on which it will listen for connection requests."),(0,r.kt)("p",null,"To learn more about Netty, the used concepts, and how to use them, we recommend reading the\n",(0,r.kt)("a",{parentName:"p",href:"https://netty.io/wiki/user-guide.html"},"Netty User Guide"),' as well as the book "Netty in Action" by\nMarvin Wolfthal and Norman Maurer.'),(0,r.kt)("h2",{id:"create-node-using-bootstrapping"},"Create Node using Bootstrapping"),(0,r.kt)("p",null,"First, we need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerBootstrap")," object that describes the behavior of our drasyl node.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"TraversingDrasylServerChannelInitializer")," is a special ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelHandler")," that conveniently\npopulates other handlers necessary for the minimal operation of a drasyl node.\nThe implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelInitializer")," in the following line defines how to handle received data\nfrom other peers. In this case, they are interpreted and output as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Bootstrapping.class"',title:'"Bootstrapping.class"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.buffer.ByteBuf;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.identity.Identity;\nimport static java.nio.charset.StandardCharsets.UTF_8;\n\npublic class Bootstrapping {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n\n        // highlight-start\n        final NioEventLoopGroup group = new NioEventLoopGroup();\n        final ServerBootstrap b = new ServerBootstrap()\n                // we want to create a drasyl-based channel (not UDP or TCP).\n                .channel(DrasylServerChannel.class)\n                // create and assign a thread pool dedicated to proccess in- and outbound data.\n                .group(group)\n                // ChannelHandler in charge of performing all control plane-related operations.\n                // There is only one server channel per node.\n                .handler(new TraversingDrasylServerChannelInitializer(identity))\n                // ChannelHandler in charge of performing all data plane-related operations.\n                // There is a child channel for each peer.\n                .childHandler(new ChannelInitializer<DrasylChannel>() {\n                    @Override\n                    protected void initChannel(final DrasylChannel ch) {\n                        final ChannelPipeline p = ch.pipeline();\n\n                        p.addLast(new SimpleChannelInboundHandler<ByteBuf>() {\n                            @Override\n                            protected void channelRead0(final ChannelHandlerContext ctx,\n                                                        final ByteBuf msg) {\n                                System.out.println("Got `" + msg.toString(UTF_8) + "` from `" + ctx.channel().remoteAddress() + "`");\n                            }\n                        });\n                    }\n                });\n        // highlight-end\n    }\n}\n')),(0,r.kt)("p",null,'Now that the "recipe" for our drasyl node has been defined, we can start it and wait for messages to\narrive.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Bootstrapping.class"',title:'"Bootstrapping.class"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.buffer.ByteBuf;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.identity.Identity;\nimport static java.nio.charset.StandardCharsets.UTF_8;\n\npublic class Bootstrapping {\n    public static void main(final String[] args) {\n        /* code */\n\n        try {\n            // highlight-start\n            // create new node with given identity.\n            final Channel ch = b.bind(identity.getAddress()).syncUninterruptibly().channel();\n            System.out.println("Node listening on address " + ch.localAddress());\n            // wait for node to stop.\n            ch.closeFuture().awaitUninterruptibly();\n            // highlight-end\n        }\n        finally {\n            // ensure that thread pool is shutdown\n            group.shutdownGracefully();\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"A fully working example can be found\nhere: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-examples/src/main/java/org/drasyl/example/echo/EchoServerBootstrap.java"},"EchoServerBootstrap")))}c.isMDXComponent=!0}}]);