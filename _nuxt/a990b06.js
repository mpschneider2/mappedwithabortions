(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4,5,6],{255:function(t,e,n){"use strict";n.r(e);n(39);var r={props:{name:{type:String,default:""},color:{type:String,default:""}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row items-center"},[e("div",{staticClass:"w-5 h-5 rounded-md",style:"background: ".concat(t.color)}),t._v(" "),e("p",{staticClass:"ml-1"},[t._v(t._s(t.name))])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";var r=n(6),l=n(257);r({target:"String",proto:!0,forced:n(258)("link")},{link:function(t){return l(this,"a","href",t)}})},257:function(t,e,n){var r=n(3),l=n(22),o=n(11),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=o(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(o(r),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},258:function(t,e,n){var r=n(5);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},260:function(t,e,n){"use strict";n.r(e);n(39),n(30),n(43);var r={methods:{getDataset:function(){var t=this.$store.state.data.selectedDataset;return this.$store.state.data.datasets[t]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"font-semibold text-lg"},[t._v("\n      "+t._s(t.getDataset()?t.getDataset().name:"Select a Dataset")+"\n    ")]),t._v(" "),t.getDataset()?e("div",[e("p",[t._v(t._s(t.getDataset().description))]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center mt-4 mx-auto content-center flex-wrap"},[t._l(t.getDataset().groups,(function(t){return e("KeyGroup",{key:t.name,attrs:{name:t.name,color:t.color}})})),t._v(" "),e("KeyGroup",{attrs:{name:t.getDataset().unspecifiedMessage||"No Data",color:"#D3D3D3"}})],2)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{KeyGroup:n(255).default})},261:function(t,e,n){"use strict";n.r(e);n(39),n(256);var r={methods:{getDataset:function(){var t=this.$store.state.data.selectedDataset;return this.$store.state.data.datasets[t]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.getDataset()?e("div",{staticClass:"text-gray-500"},[e("p",[t._v("\n    Data provided by "+t._s(t.getDataset().source.name)+"'s \""),e("a",{staticClass:"text-blue-400 hover:underline",attrs:{href:t.getDataset().source.link,target:"_blank"}},[t._v(t._s(t.getDataset().source.title))]),t._v('". '+t._s(t.getDataset().source.date)+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var r=n(42),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[t("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#000000","stroke-width":"8",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"0.7042253521126761s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);n(184),n(39);var r=n(8),l=(n(44),n(45),{mounted:function(){this.$store.dispatch("data/fetchData")},methods:{selectDataset:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.commit("data/selectDataset",t.target.value);case 2:e.$refs.map.renderMap();case 3:case"end":return n.stop()}}),n)})))()}}}),o=n(42),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"m-5"},[e("h1",{staticClass:"text-center font-semibold text-3xl"},[t._v("Mapped - United States")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center"},[t.$store.state.data.dataFetched?e("div",{staticClass:"items-center mt-5 max-w-5xl mx-auto text-center w-full"},[e("select",{staticClass:"border-2 border-gray-400 rounded-md",attrs:{value:"none"},on:{input:t.selectDataset}},[e("option",{attrs:{value:"none",selected:"",disabled:""}},[t._v("Select a Dataset")]),t._v(" "),t._l(Object.entries(t.$store.state.data.datasets),(function(n){return e("option",{key:n[0],domProps:{value:n[0]}},[t._v("\n            "+t._s(n[1].name)+"\n          ")])}))],2),t._v(" "),e("div",{staticClass:"flex flex-col px-8 pt-8 pb-4 bg-gray-50 mx-5 mt-4 rounded-lg items-center max-w-6xl text-justify"},[e("Key",{staticClass:"mb-4"}),t._v(" "),e("Map",{ref:"map",staticClass:"w-full"}),t._v(" "),e("Sources",{staticClass:"mt-8"})],1)]):e("div",{staticClass:"flex flex-col items-center mt-8"},[e("Loading",{staticClass:"w-12 h-12"}),t._v(" "),e("h1",{staticClass:"text-center font-semibold text-xl mt-1"},[t._v("\n          Fetching Statistics\n        ")])],1)]),t._v(" "),e("div",{staticClass:"text-center mt-4"},[e("p",[t._v("\n        © "+t._s((new Date).getFullYear())+" Thijs S | Data collected from\n        cited sources.\n      ")]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{ref:"infoBox",staticClass:"opacity-0 absolute top-0 left-0 z-10 bg-opacity-80 bg-white border-gray-500 border rounded-md p-2 transition duration-100 overflow-hidden max-w-md"})])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n        Found a mistake? Open an issue on\n        "),e("a",{staticClass:"text-blue-400 hover:underline",attrs:{href:"https://github.com/tandpfun/mapped",target:"_blank"}},[t._v("GitHub")]),t._v(", or\n        "),e("a",{staticClass:"text-blue-400 hover:underline",attrs:{href:"mailto:coding@channelbot.xyz",target:"_blank"}},[t._v("email me")]),t._v(".\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(262).default,Key:n(260).default,Map:n(266).default,Sources:n(261).default})}}]);