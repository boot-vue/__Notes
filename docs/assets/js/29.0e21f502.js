(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{394:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rancher-🐄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher-🐄"}},[s._v("#")]),s._v(" Rancher 🐄")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.rancher.cn/rancher2/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"高可用部署-k3s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用部署-k3s"}},[s._v("#")]),s._v(" 高可用部署(k3s)")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("ip")]),s._v(" "),a("th",[s._v("role")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("192.168.100.80")]),s._v(" "),a("td",[s._v("demo.com,数据库,nginx")])]),s._v(" "),a("tr",[a("td",[s._v("192.168.100.81")]),s._v(" "),a("td",[s._v("k3s server,rancher server")])]),s._v(" "),a("tr",[a("td",[s._v("192.168.100.82")]),s._v(" "),a("td",[s._v("k3s server,rancher server")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("server 节点安装 kubectl k3s helm 工具")])]),s._v(" "),a("ol",[a("li",[s._v("k3s 集群")])]),s._v(" "),a("p",[s._v("k3s server 节点也同时作为 agent 节点部署 rancher")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL https://get.k3s.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -s - server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --datastore-endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql://username:password@tcp(hostname:3306)/database-name"')]),s._v("\n\n\nk3s kubectl get nodes\n\n")])])]),a("p",[s._v("保存"),a("code",[s._v("kubeconfig")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/rancher/k3s/k3s.yaml ~/.kube/config\n\n\nkubectl get pods --all-namespaces\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建rancher的namespace")]),s._v("\nkubectl create namespace cattle-system\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("负载均衡器")])]),s._v(" "),a("p",[a("code",[s._v("7层代理")]),s._v(" tls 在 rancher server/k3s 集群内 ingress 终止")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" rancher "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".100")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".100")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".82")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$connection_upgrade")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        default Upgrade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),s._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Port "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rancher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_http_version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Connection "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$connection_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffering")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("helm 安装 rancher server")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rancher-stable https://releases.rancher.com/server-charts/stable\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k8s secret添加ssl证书")]),s._v("\n\nkubectl -n cattle-system create secret tls tls-rancher-ingress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cert"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tls.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tls.key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tls认证")]),s._v("\nhelm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rancher rancher-stable/rancher "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --namespace cattle-system "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("demo.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set ingress.tls.source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("secret "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("privateCA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tls")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ingress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("replicas")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tls验证")]),s._v("\n\nopenssl s_client -connect demo.com:443 -servername demo.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -CAfile ca.crt")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看安装")]),s._v("\nkubectl -n cattle-system rollout status deploy/rancher\n\nkubectl -n cattle-system get deploy rancher\n\nkubectl get pods -n cattle-system\n\nkubectl describe pod xxxxx -n cattle-system\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);