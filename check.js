import 'env.js'

var casper = require("casper").create()

casper.start('target_URL'); //目標網址

//var userName='Chu-Hao-Yu1812';//測試帳號
var userName='';//帳號
var school='';
var chineseName='';
var EndlishName='';
var degree='';



var ran=[1,3,5,2,4];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min))+min;
}



if (casper.cli.args){
    chineseName = casper.cli.args[1];
    userName = casper.cli.args[0];
    school = casper.cli.args[4];
    degree = casper.cli.args[3];
    englishName = casper.cli.args[2];
}
else
{
    casper.echo('fail');
    casper.exit();
}

casper.echo('使用者名稱：' + userName);




//STEP 1

casper.then(function() { //填入使用者資訊
	this.fill('form#myForm', {
        'dname':    userName,
        'pw':    '000000'
    }, true);

    this.click('#login');//登入帳號

    //this.wait(1000, function() {this.capture('capture.png');});

});

casper.then(function() {
    if(this.exists('#div_SuccessMsg')) {
        //this.echo('Hi! Hsu-Chia-Yuan1267 !');
        //this.echo(casper.cli.args[3]);
        //測試是否登入成功
    }
});


//STEP 2

//新開的tab無法處理，直接將onclick裡面的_blank拿掉
casper.thenEvaluate(function () {
    [].forEach.call(__utils__.findAll('a'), function(link) {
        link.setAttribute('onclick',"loadPage('/cgi-bin/FunHeart2016/pages/student-toppe.cgi')");
    });
});


casper.then(function() {

    this.click('a');
    //this.wait(1000, function() {this.capture('capture2.png');});

});



//驗證跨頁成功
casper.then(function() {
    if(this.exists('#topitem')) {
        this.echo('Transform success!');
        this.wait(1000, function() {this.capture(userName + '.png');});
    }
});







casper.run();
