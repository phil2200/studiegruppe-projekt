let userName='Emil';
userName ? console.log(`Hello, ${userName}!`):console.log('Hello!');

let userQuestion = 'how are you?';
console.log(`${userName} asks: ${userQuestion}`);

let randomNumber=Math.floor(Math.random()*8);/*Math.random metodenfinderetvilkårligttalmellem0(inkl.0)
og1(talletkanaldrigblive1.Derfornårmangangermed8ogrundernedfra7.9999...,
såfårmanethelttalmellem0-7inkl.0og7*/
let eightBall='';

if (randomNumber===0 ){
    eightBall='leverings problemer';
}
else if(randomNumber===1) {
    eightBall='Alexander skal tage sig sammen';
}
switch(randomNumber){
         case 2:
        eightBall='Emma er dum';
        break;
        case 3:
            eightBall='Cannot predict now';
        break;
        case 4:
            eightBall='Do not count on it';
        break;
        case 5:
            eightBall='My sources say no f hej';
        break;
        case 6:
            eightBall='Outlook not so good';
        break;
        case 7:
            eightBall='Signs point to yes';
        break;
//default:eightBall='lort'//her burde jeg ikke kunne komme. ellers er der en fejl
}
console.log(randomNumber+'   '+eightBall);