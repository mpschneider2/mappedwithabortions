(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{255:function(t,e,n){"use strict";n.r(e);n(39);var l={props:{name:{type:String,default:""},color:{type:String,default:""}}},r=n(42),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row items-center"},[e("div",{staticClass:"w-5 h-5 rounded-md",style:"background: ".concat(t.color)}),t._v(" "),e("p",{staticClass:"ml-1"},[t._v(t._s(t.name))])])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);n(39),n(30),n(43);var l={methods:{getDataset:function(){var t=this.$store.state.data.selectedDataset;return this.$store.state.data.datasets[t]}}},r=n(42),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"font-semibold text-lg"},[t._v("\n      "+t._s(t.getDataset()?t.getDataset().name:"Select a Dataset")+"\n    ")]),t._v(" "),t.getDataset()?e("div",[e("p",[t._v(t._s(t.getDataset().description))]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center mt-4 mx-auto content-center flex-wrap"},[t._l(t.getDataset().groups,(function(t){return e("KeyGroup",{key:t.name,attrs:{name:t.name,color:t.color}})})),t._v(" "),e("KeyGroup",{attrs:{name:t.getDataset().unspecifiedMessage||"No Data",color:"#D3D3D3"}})],2)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{KeyGroup:n(255).default})}}]);