/**
 * Created by 涅槃的F on 2017/1/20.
 */
var casper = require('casper').create();
var fs = require('fs');
var url = 'http://www.duanliang920.com/learn/gw/';
phantom.outputEncoding = "gb2312";
casper.on('remote.message', function (msg) {
    //ctl控制台窗口
    console.log('捕获evaluete输出信息： ' + msg);
});
casper.start(url, function () {

    console.log('开始打开一个网站');
    console.log(url);
});

var DataAll;

casper.then(function () {
    this.page.injectJs('bower_components/jquery/dist/jquery.js');
    var collect = casper.evaluate(function () {
        var array1 = [];
        $('.article-list>.list').children().each(function (index, element) {
            var item = {};
            if (element.tagName === 'LI') {
                item.img = $(element).children('.news-img-box ').children('a').children('img').attr('src');
                item.imgurl = $(element).children('.news-img-box ').children('a').attr('href');
                console.log(item.imgurl);
            }
        })

    })
});


casper.run();