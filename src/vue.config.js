devServer: {
    open: true, //浏览器自动打开页面
    host; "0.0.0.0", //如果是真机测试，就使用这个IP
    port; 8080,
    https; true,
    hotOnly; false, //热更新（webpack已实现了，这里false即可）
    proxy; {
        //配置跨域
        'localhost'; {
            target: "https://www.zg.news/",
            ws;true,
            changOrigin;true,
            pathRewrite;{
                '^/api';'/'
            }
        }
    }
}