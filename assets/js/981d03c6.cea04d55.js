"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:50},i="Distributed Lookup",d={unversionedId:"advanced-usage/distributed-lookup",id:"version-0.9/advanced-usage/distributed-lookup",title:"Distributed Lookup",description:"On this page you will learn how to integrate a distributed lookup service for the node that stores a desired data item.",source:"@site/versioned_docs/version-0.9/advanced-usage/distributed-lookup.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/distributed-lookup",permalink:"/0.9/advanced-usage/distributed-lookup",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.9/advanced-usage/distributed-lookup.md",tags:[],version:"0.9",lastUpdatedAt:1675526300,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Membership Management",permalink:"/0.9/advanced-usage/membership-management"},next:{title:"Command Line Tool",permalink:"/0.9/cli"}},l={},s=[{value:"Add Dependency",id:"add-dependency",level:3},{value:"Establish Chord Circle",id:"establish-chord-circle",level:2},{value:"Lookup Node",id:"lookup-node",level:2},{value:"Example",id:"example",level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributed-lookup"},"Distributed Lookup"),(0,o.kt)("p",null,"On this page you will learn how to integrate a distributed lookup service for the node that stores a desired data item.\nThe feature is based on the Chord protocol that provides support for just one operation: given a key, it maps the key onto a node."),(0,o.kt)("p",null,"If you would like to learn mor about this protocl, please refer to this paper:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'I. Stoica et al., "Chord: a scalable peer-to-peer lookup protocol for Internet applications," in\nIEEE/ACM Transactions on Networking, vol. 11, no. 1, pp. 17-32, Feb. 2003.'),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://doi.org/10.1109/TNET.2002.808407"},"https://doi.org/10.1109/TNET.2002.808407"))),(0,o.kt)("p",null,"To use this feature, you have to use the ",(0,o.kt)("a",{parentName:"p",href:"/0.9/advanced-usage/bootstrapping"},"bootstrapping interface"),", where you have to customize the server channel's ",(0,o.kt)("a",{parentName:"p",href:"https://netty.io/4.0/api/io/netty/channel/ChannelInitializer.html"},"ChannelInitializer"),"."),(0,o.kt)("h3",{id:"add-dependency"},"Add Dependency"),(0,o.kt)("p",null,"Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-extras</artifactId>\n    <version>0.9.0</version>\n</dependency>\n")),(0,o.kt)("p",null,"Other dependency managers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-extras:0.9.0" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-extras" rev="0.9.0" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-extras" % "0.9.0" // build.sbt\n')),(0,o.kt)("h2",{id:"establish-chord-circle"},"Establish Chord Circle"),(0,o.kt)("p",null,"Chord constructs a distributed has table where each node is responsible for data items belonging to a partial keyspace.\nTo this end, all nodes are arranged in an ordered circle, where each node is equipped with a finger table that accelerates the traversal of the circle."),(0,o.kt)("p",null,"Below wee bootstrap a node that will either create a new circle, or if ",(0,o.kt)("inlineCode",{parentName:"p"},"contact")," is set, tries to join an circle by contacting the given node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ChordCircleNode.java"',title:'"ChordCircleNode.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.codec.OverlayMessageToEnvelopeMessageCodec;\nimport org.drasyl.handler.dht.chord.*;\nimport org.drasyl.handler.discovery.AddPathAndSuperPeerEvent;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.*;\n\npublic class ChordCircleNode {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        // highlight-start\n        final long myId = ChordUtil.chordId(identity.getAddress());\n        System.out.println("My Address : " + identity.getAddress());\n        System.out.println("My Id      : " + ChordUtil.chordIdHex(myId) + " (" + ChordUtil.chordIdPosition(myId) + ")");\n        // highlight-end\n\n        final IdentityPublicKey contact = /* code */;\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        // add RMI as our chord implementation relies on it\n                        p.addLast(new OverlayMessageToEnvelopeMessageCodec());\n                        p.addLast(new RmiCodec());\n                        final RmiClientHandler client = new RmiClientHandler();\n                        final RmiServerHandler server = new RmiServerHandler();\n                        p.addLast(client);\n                        p.addLast(server);\n\n                        // add chord\n                        final LocalChordNode localNode = new LocalChordNode(identity.getIdentityPublicKey(), client);\n                        server.bind(LocalChordNode.BIND_NAME, localNode);\n                        p.addLast(new ChordHousekeepingHandler(localNode));\n\n                        if (contact != null) {\n                            p.addLast(new ChannelDuplexHandler() {\n                                @Override\n                                public void userEventTriggered(final ChannelHandlerContext ctx,\n                                                               final Object evt) {\n                                    ctx.fireUserEventTriggered(evt);\n                                    if (evt instanceof AddPathAndSuperPeerEvent) {\n                                        p.addLast(new ChordJoinHandler(contact, localNode));\n                                        ctx.pipeline().remove(ctx.name());\n                                    }\n                                }\n                            });\n                        }\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n')),(0,o.kt)("h2",{id:"lookup-node"},"Lookup Node"),(0,o.kt)("p",null,"Now its time to do lookups on the previously created chord circle.\nBelow wee bootstrap a node that will perform a chord lookup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ChordLookupNode.java"',title:'"ChordLookupNode.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.codec.OverlayMessageToEnvelopeMessageCodec;\nimport org.drasyl.handler.dht.chord.*;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.*;\n\npublic class ChordLookupNode {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        // highlight-start\n        final long myId = ChordUtil.chordId(identity.getAddress());\n        System.out.println("My Address : " + identity.getAddress());\n        System.out.println("My Id      : " + ChordUtil.chordIdHex(myId) + " (" + ChordUtil.chordIdPosition(myId) + ")");\n        // highlight-end\n\n        final IdentityPublicKey contact = /* code */;\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1)) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        // add RMI as our chord implementation relies on it\n                        p.addLast(new OverlayMessageToEnvelopeMessageCodec());\n                        p.addLast(new RmiCodec());\n                        final RmiClientHandler client = new RmiClientHandler();\n                        final RmiServerHandler server = new RmiServerHandler();\n                        p.addLast(client);\n                        p.addLast(server);\n\n                        // add chord\n                        p.addLast(new ChordLookupHandler(client));\n\n                        p.addLast(new SimpleChannelInboundHandler<ChordResponse>() {\n                            @Override\n                            protected void channelRead0(final ChannelHandlerContext ctx,\n                                                        final ChordResponse msg) {\n                                System.out.println("Hash " + ChordUtil.chordIdHex(msg.getId()) + " (" + ChordUtil.chordIdPosition(msg.getId()) + ") belongs to node " + msg.getAddress() + " (" + ChordUtil.chordIdPosition(msg.getAddress()) + ")");\n                            }\n                        });\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n\n')),(0,o.kt)("p",null,"We can now write ",(0,o.kt)("inlineCode",{parentName:"p"},"ChordLookup")," messages to the channel. A response of such a lookup will be indicated by a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChordResponse")," message.\nListen on the Future returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Channel#writeAndFlush")," to get updates on the (sucessfull) completion of the lookup."),(0,o.kt)("p",null,"Here's an snippet for that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'channel.write(ChordLookup.of(contact, ChordUtil.chordId("ubuntu.iso"))).addListener((ChannelFutureListener) future -> {\n    if (future.cause() != null) {\n        future.cause().printStackTrace();\n    }\n});\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A fully working example can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/tree/master/drasyl-examples/src/main/java/org/drasyl/example/chord"},"here"),"."))}c.isMDXComponent=!0}}]);