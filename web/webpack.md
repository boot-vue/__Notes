# webpack

## SplitChunks

```json
// 分包
splitChunks: {
     chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
     minSize: 30000, // 最小尺寸，30000  bytes
     minChunks: 1, // 最小 chunk ，默认1  Infinity 无限
     maxAsyncRequests: 5, // 最大异步请求数， 默认5
     maxInitialRequests : 3, // 最大初始化请求书，默认3
     automaticNameDelimiter: '-',// 打包分隔符
     name: function(){}, // 打包后的名称，此选项可接收 function
     cacheGroups:{ // 这里开始设置缓存的 chunks
         priority: 0, // 缓存组优先级
         vendor: { // key 为entry中定义的 入口名称
             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是async)
             test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
             name: "vendor", // 要缓存的 分隔出来的 chunk 名称
             minSize: 30000,
             minChunks: 1,
             enforce: true,
             maxAsyncRequests: 5, // 最大异步请求数， 默认1
             maxInitialRequests : 3, // 最大初始化请求书，默认1
             reuseExistingChunk: true // 可设置是否重用该chunk
         }
     }
  }

```

## CompressionPlugin

```json
// gzip压缩
new CompressionPlugin({
  "filename": "[path].gz[query]",
  "algorithm": "gzip",
  "test": /\.js$|\.css$|\.html$/,
  "threshold": 10240,
  "minRatio": 0.8
})
```