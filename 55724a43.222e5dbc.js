(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1171:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},474:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(1171)),o={id:"classic-api-reference-relay-mutation",title:"Relay.Mutation",original_id:"classic-api-reference-relay-mutation"},s={unversionedId:"classic-api-reference-relay-mutation",id:"version-classic/classic-api-reference-relay-mutation",isDocsHomePage:!1,title:"Relay.Mutation",description:"Relay makes use of GraphQL mutations; operations that enable us to mutate data on the client and server. To create a mutation for use in our app, we subclass Relay.Mutation and implement, at minimum, the four abstract methods listed below.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Mutation.md",slug:"/classic-api-reference-relay-mutation",permalink:"/docs/classic/classic-api-reference-relay-mutation",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-classic/Classic-APIReference-Mutation.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615328379,sidebar:"version-classic/docs",previous:{title:"Relay.QL",permalink:"/docs/classic/classic-api-reference-relay-ql"},next:{title:"Relay.GraphQLMutation",permalink:"/docs/classic/classic-api-reference-relay-graphql-mutation"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Properties",id:"properties",children:[{value:"fragments (static property)",id:"fragments-static-property",children:[]},{value:"initialVariables (static property)",id:"initialvariables-static-property",children:[]},{value:"prepareVariables (static property)",id:"preparevariables-static-property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"constructor",id:"constructor",children:[]},{value:"getConfigs (abstract method)",id:"getconfigs-abstract-method",children:[]},{value:"getFatQuery (abstract method)",id:"getfatquery-abstract-method",children:[]},{value:"getMutation (abstract method)",id:"getmutation-abstract-method",children:[]},{value:"getVariables (abstract method)",id:"getvariables-abstract-method",children:[]},{value:"getFragment (static method)",id:"getfragment-static-method",children:[]},{value:"getCollisionKey",id:"getcollisionkey",children:[]},{value:"getFiles",id:"getfiles",children:[]},{value:"getOptimisticConfigs",id:"getoptimisticconfigs",children:[]},{value:"getOptimisticResponse",id:"getoptimisticresponse",children:[]}]}],c={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Relay makes use of GraphQL mutations; operations that enable us to mutate data on the client and server. To create a mutation for use in our app, we subclass ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.Mutation")," and implement, at minimum, the four abstract methods listed below."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Properties")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#fragments-static-property"},Object(i.b)("pre",null,"static fragments"),"Declare this mutation's data dependencies here")),Object(i.b)("li",null,Object(i.b)("a",{href:"#initialvariables-static-property"},Object(i.b)("pre",null,"static initialVariables"),"A default set of variables to make available to this mutation's fragment builders")),Object(i.b)("li",null,Object(i.b)("a",{href:"#preparevariables-static-property"},Object(i.b)("pre",null,"static prepareVariables"),"A method to modify the variables based on the runtime environment, previous variables, or the meta route"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#constructor"},Object(i.b)("pre",null,"constructor(props)"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getconfigs-abstract-method"},Object(i.b)("pre",null,"abstract getConfigs()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getfatquery-abstract-method"},Object(i.b)("pre",null,"abstract getFatQuery()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getmutation-abstract-method"},Object(i.b)("pre",null,"abstract getMutation()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getvariables-abstract-method"},Object(i.b)("pre",null,"abstract getVariables()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getfragment-static-method"},Object(i.b)("pre",null,"static getFragment(fragmentName[, variableMapping])"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getcollisionkey"},Object(i.b)("pre",null,"getCollisionKey()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getfiles"},Object(i.b)("pre",null,"getFiles()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getoptimisticconfigs"},Object(i.b)("pre",null,"getOptimisticConfigs()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getoptimisticresponse"},Object(i.b)("pre",null,"getOptimisticResponse()")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"fragments-static-property"},"fragments (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nstatic fragments: RelayMutationFragments<$Keys<Tp>>\n\n// Type of RelayMutationFragments\ntype RelayMutationFragments<Tk> = {\n  [key: Tk]: FragmentBuilder;\n};\n\n// Type of FragmentBuilder\ntype FragmentBuilder = (variables: Variables) => RelayConcreteNode;\n\n")),Object(i.b)("p",null,"We declare our mutations' data dependencies here, just as we would with a container. This is particularly useful to ensure that a set of fields we might want to use in this mutation's optimistic response have been fetched."),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:'language-{"{"}2-9{"}"}'}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        likers { count },\n        viewerDoesLike,\n      }\n    `,\n  };\n  getOptimisticResponse() {\n    // this.props.story.likers.count and this.props.story.viewerDoesLike\n    // are guaranteed to have been fetched since we've declared\n    // them to be part of this mutation's data dependencies above.\n    return { /* ... */ };\n  }\n}\n\n")),Object(i.b)("p",null,"See also:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#fragment-variables"}),"Mutations ",">"," Fragment variables")," and\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#optimistic-updates"}),"Mutations ",">"," Optimistic updates")),Object(i.b)("h3",{id:"initialvariables-static-property"},"initialVariables (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nstatic initialVariables: {[name: string]: mixed};\n\n")),Object(i.b)("p",null,"The defaults we specify here will become available to our fragment builders:"),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass ChangeTodoStatusMutation extends Relay.Mutation {\n  static initialVariables = {orderby: 'priority'};\n  static fragments = {\n    todos: () => Relay.QL`\n      # The variable defined above is available here as $orderby\n      fragment on User { todos(orderby: $orderby) { ... } }\n    `,\n  };\n  /* ... */\n}\n\n")),Object(i.b)("p",null,"See also:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#fragment-variables"}),"Mutations ",">"," Fragment variables")),Object(i.b)("h3",{id:"preparevariables-static-property"},"prepareVariables (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nstatic prepareVariables: ?(\n  prevVariables: {[name: string]: mixed},\n  route: RelayMetaRoute,\n) => {[name: string]: mixed}\n\n// Type of `route` argument\ntype RelayMetaRoute = {\n  name: string;\n}\n\n")),Object(i.b)("p",null,"If we provide to a mutation a method that conforms to the signature described above, it will be given the opportunity to modify the fragment builders' variables, based on the previous variables (or the ",Object(i.b)("inlineCode",{parentName:"p"},"initialVariables")," if no previous ones exist), the meta route, and the runtime environment. Whatever variables this method returns will become available to this mutation's fragment builders."),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass BuySongMutation extends Relay.Mutation {\n  static initialVariables = {format: 'mp3'};\n  static prepareVariables = (prevVariables) => {\n    var overrideVariables = {};\n    var formatPreference = localStorage.getItem('formatPreference');\n    if (formatPreference) {\n      overrideVariables.format = formatPreference;  // Lossless, hopefully\n    }\n    return {...prevVariables, overrideVariables};\n  };\n  /* ... */\n}\n\n")),Object(i.b)("p",null,"See also:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#fragment-variables"}),"Mutations ",">"," Fragment variables")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"Create a mutation instance using the ",Object(i.b)("inlineCode",{parentName:"p"},"new")," keyword, optionally passing it some props. Note that ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," is ",Object(i.b)("em",{parentName:"p"},"not")," available inside the constructor function, but are set for all the methods mentioned below (",Object(i.b)("inlineCode",{parentName:"p"},"getCollisionKey"),", ",Object(i.b)("inlineCode",{parentName:"p"},"getOptimisticResponse"),", etc). This restriction is due to the fact that mutation props may depend on data from the RelayEnvironment, which isn't known until the mutation is applied with ",Object(i.b)("inlineCode",{parentName:"p"},"applyUpdate")," or ",Object(i.b)("inlineCode",{parentName:"p"},"commitUpdate"),"."),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nvar bookFlightMutation = new BuyPlaneTicketMutation({airport: 'yvr'});\nRelay.Store.commitUpdate(bookFlightMutation);\n\n")),Object(i.b)("h3",{id:"getconfigs-abstract-method"},"getConfigs (abstract method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nabstract getConfigs(): Array<{[key: string]: mixed}>\n\n")),Object(i.b)("p",null,"Implement this required method to give Relay instructions on how to use the response payload from each mutation to update the client-side store."),Object(i.b)("h4",{id:"example-4"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n}\n\n")),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#mutator-configuration"}),"Mutations ",">"," Mutator configuration")),Object(i.b)("h3",{id:"getfatquery-abstract-method"},"getFatQuery (abstract method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nabstract getFatQuery(): GraphQL.Fragment\n\n")),Object(i.b)("p",null,"Implement this required method to design a \u2018fat query\u2019 \u2013 one that represents every field in your data model that could change as a result of this mutation."),Object(i.b)("h4",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass BuySongMutation extends Relay.Mutation {\n  getFatQuery() {\n    return Relay.QL`\n      fragment on BuySongPayload {\n        songs {\n          count,\n          edges,\n        },\n        totalRunTime,\n      }\n    `,\n  }\n}\n\n")),Object(i.b)("p",null,"See also:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#the-fat-query"}),"Mutations ",">"," The fat query")),Object(i.b)("h3",{id:"getmutation-abstract-method"},"getMutation (abstract method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nabstract getMutation(): GraphQL.Mutation\n\n")),Object(i.b)("p",null,"Implement this required method to return a GraphQL mutation operation that represents the mutation to be performed."),Object(i.b)("h4",{id:"example-6"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  getMutation() {\n    return this.props.story.viewerDoesLike\n      ? return Relay.QL`mutation {unlikeStory}`\n      : return Relay.QL`mutation {likeStory}`;\n  }\n}\n\n")),Object(i.b)("h3",{id:"getvariables-abstract-method"},"getVariables (abstract method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nabstract getVariables(): {[name: string]: mixed}\n\n")),Object(i.b)("p",null,"Implement this required method to prepare variables to be used as input to the mutation."),Object(i.b)("h4",{id:"example-7"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass DestroyShipMutation extends Relay.Mutation {\n  getVariables() {\n    return {\n      // Assume that the server exposes a `destroyShip` mutation\n      // that accepts a `shipIDToDestroy` variable as input:\n      shipIDToDestroy: this.props.ship.id,\n    };\n  }\n}\n\n")),Object(i.b)("blockquote",null,"Warning",Object(i.b)("p",null,"The term 'variables' here refers to the input to the server-side mutation, ",Object(i.b)("strong",null,"not")," to the variables made available to this mutation's fragment builders.")),Object(i.b)("h3",{id:"getfragment-static-method"},"getFragment (static method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nstatic getFragment(\n  fragmentName: $Keys<Tp>,\n  variableMapping?: Variables\n): RelayFragmentReference\n\n// Type of the variableMapping argument\ntype Variables = {[name: string]: mixed};\n\n")),Object(i.b)("p",null,"Gets a fragment reference for use in a parent's query fragment."),Object(i.b)("h4",{id:"example-8"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:'language-{"{"}8{"}"}'}),"\nclass StoryComponent extends React.Component {\n  /* ... */\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id,\n        text,\n        ${LikeStoryMutation.getFragment('story')},\n      }\n    `,\n  };\n}\n\n")),Object(i.b)("p",null,"You can also pass variables to the mutation's fragment builder from the outer fragment that contains it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:'language-{"{"}8-11{"}"}'}),"\nclass Movie extends React.Component {\n  /* ... */\n  static fragments = {\n    movie: (variables) => Relay.QL`\n      fragment on Movie {\n        posterImage(lang: $lang) { url },\n        trailerVideo(format: $format, lang: $lang) { url },\n        ${RentMovieMutation.getFragment('movie', {\n          format: variables.format,\n          lang: variables.lang,\n        })},\n      }\n    `,\n  };\n}\n\n")),Object(i.b)("blockquote",null,"Hint",Object(i.b)("p",null,"In that last example, think of ",Object(i.b)("code",null,"$format")," and ",Object(i.b)("code",null,"variables.format")," as the same value.")),Object(i.b)("h3",{id:"getcollisionkey"},"getCollisionKey"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetCollisionKey(): ?string\n\n")),Object(i.b)("p",null,"Implement this method to return a collision key. Relay will send any mutations having the same collision key to the server serially and in-order."),Object(i.b)("h4",{id:"example-9"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  getCollisionKey() {\n    // Give the same key to like mutations that affect the same story\n    return `like_${this.props.story.id}`;\n  }\n}\n\n")),Object(i.b)("h3",{id:"getfiles"},"getFiles"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetFiles(): ?FileMap\n\n// Type of the FileMap object\ntype FileMap = {[key: string]: File};\n\n")),Object(i.b)("p",null,"Implement this method to return a map of ",Object(i.b)("inlineCode",{parentName:"p"},"File")," objects to upload as part of a mutation."),Object(i.b)("h4",{id:"example-10"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass AttachDocumentMutation extends Relay.Mutation {\n  getFiles() {\n    return {\n      file: this.props.file,\n    };\n  }\n}\nclass FileUploader extends React.Component {\n  handleSubmit() {\n    var fileToAttach = this.refs.fileInput.files.item(0);\n    Relay.Store.commitUpdate(\n      new AttachDocumentMutation({file: fileToAttach})\n    );\n  }\n}\n\n")),Object(i.b)("h3",{id:"getoptimisticconfigs"},"getOptimisticConfigs"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetOptimisticConfigs(): Array<{[key: string]: mixed}>\n\n")),Object(i.b)("p",null,"Implement this method in cases where the mutator configuration needed to handle the optimistic response needs to be different than the one that handles the server response."),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getconfigs-abstract-method"}),"Relay.Mutation::getConfigs()")),Object(i.b)("h3",{id:"getoptimisticresponse"},"getOptimisticResponse"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetOptimisticResponse(): ?{[key: string]: mixed}\n\n")),Object(i.b)("p",null,"Implement this method to craft an optimistic response having the same shape as the server response payload. This optimistic response will be used to preemptively update the client cache before the server returns, giving the impression that the mutation completed instantaneously."),Object(i.b)("h4",{id:"example-11"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  getOptimisticResponse() {\n    return {\n      story: {\n        id: this.props.story.id,\n        likers: {\n          count: this.props.story.likers.count + 1,\n        },\n        viewerDoesLike: !this.props.story.viewerDoesLike,\n      },\n    };\n  }\n}\n\n")),Object(i.b)("p",null,"See also: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./classic-guides-mutations#optimistic-updates"}),"Mutations ",">"," Optimistic updates")))}b.isMDXComponent=!0}}]);