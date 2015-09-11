/**
 * Created by samuel on 9/10/15.
 */
function FirstReverse(str) {

    var tmp='';
    for(var i=str.length-1; i>=0; i--){
        tmp +=str[i];
    }
    str = tmp;
    return str;

}


function FirstFactorial(num) {

    for(var i=num-1; i>0; i--){
        num*=i;
    }
    return num;

}

//does not remove punctuation yet!
function LongestWord(sen) {

    var array=sen.split(" ");
    var a=array[0];
    for(var i= 1; i<= array.length-1; i++){
        var b=array[i];

        if(a.length < b.length){
            a=b;
        }

    }

    return a;

}

//does not capitalize vowels

function LetterChanges(str) {

    var numbers = [];
    var letters = [];
    var newstr = "";
    var vowels=[97,101,105,111,117];

    for( var i=0; i< str.length; i++){

        numbers.push(str.charCodeAt(i));

        if (numbers[i] > 64 && numbers[i] < 91){

            numbers[i]+=1;
        }
        else if( numbers[i]>96 && numbers[i]<123){
            numbers[i]+=1;
        }
        letters.push(String.fromCharCode(numbers[i]));
        newstr += letters[i];
    }
    return newstr;
}


function SimpleAdding(num) {

    var added=0;

    for(var i=0; i<=num; i++){

        added += i;
    }

    return added;
}


//does not work

function LetterCapitalize(str) {

    var array=str.split(" ");

    var i=0;

    var word=[];

    var newarray=[];

    var letter="";

    while(i<array.length){

        word.push(array[i]);

        letter += word[0];

        var uppercase=letter.toUpperCase();

        word[0]=uppercase;

        word.push(uppercase);

        //letter="";
        i++;
    }
    return letter;

}


function CheckNums(num1,num2) {

    if (num1<num2){

        return "true";
    }

    else if(num1===num2){
        return "-1";
    }

    else{
        return "false";
    }
}

//works perfect!

function AlphabetSoup(str) {

    var array = [];

    var array2=[];

    var str2 = "";

    for (var i=0; i<str.length; i++){
        array.push(str[i]);
    }
    array.sort();
    for(var j=0; j<array.length; j++){
        str2 += array[j];
    }
    return str2;
}

//does not work
function ABCheck(str) {
    var arraya=[];
    var arrayb=[];
    for(var i=0; i<str.length; i++){
        if(str[i] == "a"){
            arraya.push(i);
        }

        else if(str[i] == "b"){
            arrayb.push[i];
        }
    }
    // code goes here
    return arrayb;

}

//easy!
function WordCount(str) {
    var array=str.split(" ");

    // code goes here
    return array.length;

}

//easy
function ExOh(str) {
    var countx=0;
    var counto=0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="x"){
            countx+=1;
        }
        else if (str[i] =="o"){
            counto+=1}
    }
    if (countx == counto){
        return "true";
    }
}

//easy enough
function TimeConvert(num) {

    var a = Math.floor(num/60);
    var b = num%60;
    if(a<1){
        a=0;
    }


    var c = a.toString();
    var d = b.toString();
    var time= a + ":" + b;
    return time;

}

//I was able to make two identical arrays //but they won’t return true
function Palindrome(str){
    var array = str.split(' ').join('');
    var mid = Math.floor(array.length/2);
    var a=[];
    var b=[];
    var c;
    var d;
    if(array.length%2==0){
        for(var i=0; i<mid; i++){
            a.push(array[i]);
        }
    }
    else if(array.length%2!==0){
        for(var i=0; i<=mid; i++){
            a.push(array[i]);
        }
    }
    for(var j=array.length-1; j>=mid; j--){
        b.push(array[j]);
    }
    return a;
}

//runs well for larger arrays
function ArithGeo(arr) {
    var a = 0;

    var array=[]
    for(a; a<arr.length-1; a++){
        var b = a+1;
        array.push(arr[b]-arr[a]);
    }
    if(array[0]/array[1]===1){
        return "Arithmetic";
    }
    else if(array[0]/array[1] === array[1]/array[2]){
        return "Geometric";
    }
    else{
        return "-1";
    }
}