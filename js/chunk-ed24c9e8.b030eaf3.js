(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed24c9e8"],{2332:function(t,s,e){"use strict";e("5fcd")},"4eef":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"details"},[e("mm-loading",{model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),e("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},n=[],a=e("4d63"),l=(e("cb7c"),e("7736")),c=e("365c"),o=e("f904"),r=e("5362"),u=e("ac0d"),d={name:"Detail",components:{MmLoading:o["a"],MusicList:r["a"]},mixins:[u["a"]],data:function(){return{list:[]}},created:function(){var t=this;Object(c["e"])(this.$route.params.id).then((function(s){document.title="".concat(s.name," - 小菜の音乐站"),t.list=s.tracks,t._hideLoad()})).catch((function(){t._hideLoad()}))},methods:Object(a["a"])({selectItem:function(t,s){this.selectPlay({list:this.list,index:s})}},Object(l["b"])(["selectPlay"]))},m=d,f=(e("cd54"),e("cba8")),p=Object(f["a"])(m,i,n,!1,null,"75236d62",null);s["default"]=p.exports},5362:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"musicList"},[t.list.length>0?[e("div",{staticClass:"list-item list-header"},[e("span",{staticClass:"list-name"},[t._v("歌曲")]),e("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?e("span",{staticClass:"list-time"},[t._v("时长")]):e("span",{staticClass:"list-album"},[t._v("专辑")])]),e("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(s,i){return e("div",{key:s.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===s.id},on:{dblclick:function(e){return t.selectItem(s,i,e)}}},[e("span",{staticClass:"list-num",domProps:{textContent:t._s(i+1)}}),e("div",{staticClass:"list-name"},[e("span",[t._v(t._s(s.name))]),e("div",{staticClass:"list-menu"},[e("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(s),size:40},on:{click:function(e){return e.stopPropagation(),t.selectItem(s,i)}}})],1)]),e("span",{staticClass:"list-artist"},[t._v(t._s(s.singer))]),1===t.listType?e("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(s.duration%3600))+" "),e("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(i)}}})],1):e("span",{staticClass:"list-album"},[t._v(t._s(s.album))])])})),t._t("listBtn")],2)]:e("mm-no-result",{attrs:{title:"哎呀，什么也没有"}})],2)},n=[],a=e("4d63"),l=(e("ee4c"),e("7736")),c=e("ca00"),o=e("5af1"),r={name:"MusicList",components:{MmNoResult:o["a"]},filters:{format:c["b"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:Object(a["a"])({},Object(l["c"])(["playing","currentMusic"])),watch:{list:function(t,s){2===this.listType&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:Object(a["a"])({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,2===this.listType&&!this.lockUp){var e=t.target,i=e.scrollHeight,n=e.offsetHeight;s+n>=i-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,s,e){e&&/list-menu-icon-del/.test(e.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,e=this.playing,i=this.currentMusic.id;return e&&i===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},Object(l["d"])({setPlaying:"SET_PLAYING"}))},u=r,d=(e("af7e"),e("cba8")),m=Object(d["a"])(u,i,n,!1,null,"6228edae",null);s["a"]=m.exports},"5af1":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mm-no-result"},[e("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},n=[],a={name:"MmNoResult",props:{title:{type:String,default:""}}},l=a,c=(e("9673"),e("cba8")),o=Object(c["a"])(l,i,n,!1,null,null,null);s["a"]=o.exports},"5fcd":function(t,s,e){},9673:function(t,s,e){"use strict";e("bf8f")},ac0d:function(t,s,e){"use strict";e.d(s,"a",(function(){return a}));var i=e("4d63"),n=e("7736"),a=(Object(i["a"])({},Object(n["c"])(["playing","currentMusic"])),Object(i["a"])(Object(i["a"])({selectItem:function(t,s){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:s})}},Object(n["d"])({setPlaying:"SET_PLAYING"})),Object(n["b"])(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,s=this;clearTimeout(t),t=setTimeout((function(){s.mmLoadShow=!1}),200)}}})},af7e:function(t,s,e){"use strict";e("e92b")},bf8f:function(t,s,e){},cd54:function(t,s,e){"use strict";e("e6a4")},e6a4:function(t,s,e){},e92b:function(t,s,e){},f904:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[t._m(0),t._m(1)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mm-loading-content"},[e("span",{staticClass:"loader"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mm-loading-text"},[e("span",{staticClass:"loading-text"},[t._v("加载中")])])}],a={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},l=a,c=(e("2332"),e("cba8")),o=Object(c["a"])(l,i,n,!1,null,null,null);s["a"]=o.exports}}]);
//# sourceMappingURL=chunk-ed24c9e8.b030eaf3.js.map