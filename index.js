var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(serve('static'));

app.listen(3000);