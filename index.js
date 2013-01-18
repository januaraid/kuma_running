enchant();

var picNumber = 0;
var picNumber2 = new Array(10);
var CHARA_IMAGE = "http://enchantjs.com/assets/images/chara1.gif";

window.onload = function(){
    var game = new Game(320, 480);
    
    game.preload(CHARA_IMAGE);
    
    game.onload = function(){
        var bear = new Sprite(32, 32);
        bear.image = game.assets[CHARA_IMAGE];
        bear.frame = 0;
        
        bear.addEventListener(Event.ENTER_FRAME, function(){
            picNumber++;
            if(picNumber > 2){
                picNumber = 0;
            }
            if(bear.x < 288){
                bear.frame = picNumber;
            	bear.x += 1
            } else {
                bear.frame = 0;
            }
        });
        
        game.rootScene.addChild(bear);
        
        for(var j = 0; j < 10; j++){
            picNumber2[j] = 0;
        }
        var kuma = new Array(10);
        for(var i = 0, n = kuma.length; i < n; i++){
            kuma[i] = new Sprite(32, 32);
            kuma[i].image = game.assets[CHARA_IMAGE];
            kuma[i].frame = 0;
            kuma[i].y = 32 * (i + 1);
            //kuma[i].addEventListener(Event.ENTER_FRAME, function(){
                //picNumber2[i]++;
                //if(picNumber2[i] > 2){
                    //picNumber2[i] = 0;
                //}
                //kuma[i].frame = picNumber2[i];
                //kuma[i].x += 2;
            //});
            game.rootScene.addChild(kuma[i]);
        }
        kuma[0].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[0]++;
            if(picNumber2[0] > 2){
                picNumber2[0] = 0;
            }
            if(kuma[0].x < 288){
            	kuma[0].frame = picNumber2[0];
            	kuma[0].x += 2;
            } else {
                kuma[0].frame = 0;
            }
        });
         kuma[1].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[1]++;
            if(picNumber2[1] > 2){
                picNumber2[1] = 0;
            }
            if(kuma[1].x < 288){
            	kuma[1].frame = picNumber2[0];
            	kuma[1].x += 3;
            } else {
                kuma[1].frame = 0;
            }
        });
         kuma[2].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[2]++;
            if(picNumber2[2] > 2){
                picNumber2[2] = 0;
            }
            if(kuma[2].x < 288){
            	kuma[2].frame = picNumber2[0];
            	kuma[2].x += 4;
            } else {
                kuma[2].frame = 0;
            }
        });
         kuma[3].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[3]++;
            if(picNumber2[3] > 2){
                picNumber2[3] = 0;
            }
            if(kuma[3].x < 288){
            	kuma[3].frame = picNumber2[0];
            	kuma[3].x += 5;
            } else {
                kuma[3].frame = 0;
            }
        });
         kuma[4].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[4]++;
            if(picNumber2[4] > 2){
                picNumber2[4] = 0;
            }
            if(kuma[4].x < 288){
            	kuma[4].frame = picNumber2[0];
            	kuma[4].x += 6;
            } else {
                kuma[4].frame = 0;
            }
        });
         kuma[5].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[5]++;
            if(picNumber2[5] > 2){
                picNumber2[5] = 0;
            }
            if(kuma[5].x < 288){
            	kuma[5].frame = picNumber2[0];
            	kuma[5].x += 5;
            } else {
                kuma[5].frame = 0;
            }
        });
         kuma[6].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[6]++;
            if(picNumber2[6] > 2){
                picNumber2[6] = 0;
            }
            if(kuma[6].x < 288){
            	kuma[6].frame = picNumber2[0];
            	kuma[6].x += 4;
            } else {
                kuma[6].frame = 0;
            }
        });
         kuma[7].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[7]++;
            if(picNumber2[7] > 2){
                picNumber2[7] = 0;
            }
            if(kuma[7].x < 288){
            	kuma[7].frame = picNumber2[0];
            	kuma[7].x += 3;
            } else {
                kuma[7].frame = 0;
            }
        });
         kuma[8].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[8]++;
            if(picNumber2[8] > 2){
                picNumber2[8] = 0;
            }
            if(kuma[8].x < 288){
            	kuma[8].frame = picNumber2[0];
            	kuma[8].x += 2;
            } else {
                kuma[8].frame = 0;
            }
        });
         kuma[9].addEventListener(Event.ENTER_FRAME, function(){
            picNumber2[9]++;
            if(picNumber2[9] > 2){
                picNumber2[9] = 0;
            }
            if(kuma[9].x < 288){
            	kuma[9].frame = picNumber2[0];
            	kuma[9].x += 1;
            } else {
                kuma[9].frame = 0;
            }
        });
    };
    
    game.start();
};