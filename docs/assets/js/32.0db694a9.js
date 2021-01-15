(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{399:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"调度器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度器"}},[t._v("#")]),t._v(" 调度器")]),t._v(" "),s("p",[s("code",[t._v("Scheduler")]),t._v(": 分配 pod 到合适的节点")]),t._v(" "),s("h2",{attrs:{id:"调度过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度过程"}},[t._v("#")]),t._v(" 调度过程")]),t._v(" "),s("ol",[s("li",[t._v("预选,排除不符合的节点")]),t._v(" "),s("li",[t._v("符合条件的节点排序")])]),t._v(" "),s("h2",{attrs:{id:"affinity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#affinity"}},[t._v("#")]),t._v(" affinity")]),t._v(" "),s("p",[s("code",[t._v("节点亲和性/pod亲和性")]),t._v(" 标签匹配")]),t._v(" "),s("p",[t._v("node hostname 标签 : "),s("code",[t._v("kubernetes.io/hostname")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("affinity\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("affinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeAffinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelectorTerms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes.io/e2e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("az"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" e2e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("az1\n                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" e2e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("az2\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preferredDuringSchedulingIgnoredDuringExecution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" another"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" another"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("value\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("affinity\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s.gcr.io/pause"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n")])])]),s("h2",{attrs:{id:"taint-toleration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taint-toleration"}},[t._v("#")]),t._v(" taint/toleration")]),t._v(" "),s("p",[s("code",[t._v("污点/容忍")])]),t._v(" "),s("p",[t._v("k=v(可以为空):effect(noschedule prefernoschedule noExecute)")]),t._v(" "),s("p",[s("code",[t._v("kubectl taint ndoes xxx k=v:effect")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tolerations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Equal"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NoSchedule"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tolerationSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),t._v("\n")])])]),s("h2",{attrs:{id:"指定节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定节点"}},[t._v("#")]),t._v(" 指定节点")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# label")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);