
//STEP 1
//登入
//STEP 2
//進入我的文章
//STEP 3
//新增post
import 'env.js'

var casper = require("casper").create() //新建一個頁面
casper.start(target_URL); //目標網址


//var username='Li-I-Hsueh1798';

var userName = casper.cli.args[0];

var tit = ["寶我打當何放爾興子整真是,",
"於的性而亞面然創後喜第什.",
"發看加常開工學裝裝.",
"思度電了會影來高目合意維.",
"得果之說查個發各的",
"麼知裡能社排一四樂、便來景山來味歡身？",
"造電風國天日物看為戰多發議海不簡道小帶都天,",
"很品獲一去可得本：安使險夠：",
"會度吃關現義……作三參出動過總民麗、",
"題務別牛相變點國行中不活智他部指遠：作在十養",
"父列往以此家寶環們蘭心文。",
"裡不了斯可是這，教古情及聲？運孩我切？",
"個發手名近共會施就今院我展樂沒山，",
"體科清；發看課？美兩子然害化的新相？",
"不麼林要讀二不提能相提！",
"得司亞候正麼度發界天統系行意地現英常部朋是！"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min))+min;
}


//STEP 1

casper.then(function() { //填入使用者資訊
	this.fill('form#myForm', {
        'dname':    userName,
        'pw':    '000000'
    }, true);

    this.echo(userName);
    this.click('#login');//登入帳號

    //this.wait(1000, function() {this.capture('capture.png');});

});

casper.then(function() {
    if(this.exists('#div_SuccessMsg')) {
        //this.echo('Hi! Hsu-Chia-Yuan1267 !');
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
    }
});



//STEP 3

casper.then(function() {

    this.click('table:nth-child(1) > tbody > tr > td > div > table:nth-child(2) > tbody > tr > td:nth-child(2) a:nth-child(2)');

    this.wait(500, function() {

        //this.capture('capture3.png');
        this.click('.item03 a');
    });

    //this.wait(1000, function() {this.capture('capture4.png');});

});


var filepath = './picture/' + getRandomInt(0, 33) + '.jpg';

casper.then(function() {

    this.wait(1000, function() {
        this.page.uploadFile("input[type='file']", filepath);
        this.sendKeys('input[name=title]',tit[getRandomInt(0, 14)]);
        this.sendKeys('textarea[name=des]',tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)] + tit[getRandomInt(0, 14)]);
        this.wait(2000, function() {this.click('input[name=Submit]');});

    });

    //this.wait(1000, function() {this.capture('capture5.png');});
});

casper.then(function() {
    if(this.exists('.text3')) {
        this.echo('Post!');
    }
});

casper.run();
