console.log('你好')

// boolean
let flag:boolean = true;
// number
let num:number = 10;
// string
let str:string = 'hello typescript';
// array
//第一种定义数组的方式
//var arr:number[] = [1,2,3,4,5]; //如果里面有字符串编译报错
//第二种定义数组的方式
let array:Array<number> = [1,2,6,7];
// tuple (元祖)属于数组中的一种，就是可以字符串和数字或者其他类型的数组
let arr:[number,string] = [1,'hello typescript'];//第一个只能是数字类型，第二个只能是字符串类型

// enum
enum Flag { success = 0, erro = 1};
let s:Flag = Flag.success;

// enum Color { blue,red,yellow }
// let c:Color = Color.red;
// console.log(c) //1  如果没有赋值，值则是下标

enum Color { blue,red=3,yellow }
let c:Color = Color.yellow;
console.log(c) //4  如果没有赋值，值则是下标
// any
let box:any = document.getElementById('box');
// undefined,null
let unde:undefined;
console.log(unde);
//let nu:null;
let nu:number | undefined | null;
// void
function run():void {

}
// never 是其他类型 （包括 null 和 undefined )的子类型，代表从不会出现的值，这意味着声明never的变量只能被never类型所赋值。
// let a:never;
// a  = (()=>{
//     throw new Error('错误')
// })()





//函数
//age为可选参数
// function getInfo(name:string,age?:number):string{
//     if( age ) {
//         return `名字为: ${name},年龄为: ${age}`
//     } else {
//         return  `名字为: ${name}`
//     }
// }

// console.log(getInfo('zhangsan'))
// console.log(getInfo('zhangsan',23))

//默认参数
function getInfo(name:string,age:number=20):string{
    if( age ) {
        return `名字为: ${name},年龄为: ${age}`
    } else {
        return  `名字为: ${name}`
    }
}

console.log(getInfo('zhangsan'))
console.log(getInfo('zhangsan',23))








//ts中的类
class Person {
    public name:string; //属性前面省略了public关键字
    static sex:string = 'male'
    constructor(name:string) { //构造函数
        this.name = name;
    }

    getName():string {
        return this.name;
    }

    setName(name:string):void {
        this.name = name;
    }

    static print():void {
        console.log('我是静态方法')
    }
}

var p = new Person('zhangsan');
console.log(p.getName())
p.setName('lisi')
console.log(p.getName())


//继承
class Student extends Person{
    constructor(name:string) {
        super(name);
    }

    work():void{
        console.log(`${this.name}在学习`)
    }
}

var stu = new Student('小明');
console.log(stu.getName())//学生
console.log(stu.work())//小明在学习




//类修饰符
//public 共有，在类里面。子类、类外面都可以访问。
//protected 保护类型 在类里面、子类里面都可以访问，在类外部无法访问。
//private 私有，在类里面可以访问，在子类和类外部无法访问
var wainame:string = p.name;
console.log(wainame)

// 静态方法和静态属性
//静态方法
Person.print()
//静态属性
console.log(Person.sex);




//抽象类是提供其他继承的基类，不能直接被实例化。
//抽象方法只能定义在抽象类里面。
//无法被实例化
// abstract class Animal {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     abstract eat():any;
// }

// class Dog extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     //必须实现父类中的抽象方法，不然报错
//     eat() {
//         console.log(`${this.name}在吃狗粮`)
//     }
// }

// let dog = new Dog('狗');
// dog.eat(); //狗在吃狗粮


//多态 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现。
//多态是继承的一种表现









//typescript中的接口
// 属性类接口
interface Fullname {
    firstname:string;
    lastname?:string; //问号表示可选参数
}

function getuserInfo(name:Fullname):void{
    console.log(name.firstname,name.lastname);
}
let obj = {
    age: 20,
    firstname: '小',
    lastname: '名',
}
getuserInfo(obj)//obj写在外面表示包含firstname，lastname就可以了,写在里面的话，只能包含这两个。
// 函数类型接口,对传入的参数，以及返回值进行约束。
interface encrypt {
    (key:string,value:string):string
}

var md5:encrypt = function(key:string,value:string):string {
    return key + value;
}
console.log(md5('name','zhangsan'));
// 可索引接口: 数组、对象接口，不常用

// 类类型接口
interface Animal {
    name:string;
    eat(food:string):void;
}

class cat implements Animal {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    eat(food:string):void {
        console.log(`${this.name}在吃${food}`);
    }
}

var mao = new cat('猫');
mao.eat('老鼠')
// 接口扩展，接口可以继承接口








//命名空间
namespace A {
    interface Animal {
        name:string;
        eat(food:string):void;
    }
    
    class cat implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        eat(food:string):void {
            console.log(`${this.name}在吃${food}`);
        }
    }
}

namespace B {
    interface Animal {
        name:string;
        eat(food:string):void;
    }
    
    class cat implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        eat(food:string):void {
            console.log(`${this.name}在吃${food}`);
        }
    }
}

// var d = new A.cat('猫');










//装饰器(普通装饰器，无法传参)
//tsc --target ES5 --experimentalDecorators
//"experimentalDecorators": true
// function logClass( params:any ) {
//     console.log( params );
//     params.prototype.apiUrl = "动态扩展属性";
//     params.prototype.run = function() {
//         console.log( '我在跑步' )
//     }
// }

// @logClass
// class HttpClient {
//     constructor() {

//     }

//     getData() {

//     }
// }

// var http:any = new HttpClient();

// console.log( http.apiUrl )
// http.run()//我在跑步

//类装饰器，可传参(重要)
// function logClass(params:string) {
//     return function(target:any) {
//         console.log(target);
//         console.log(params);//params是参数，target是类
//         target.prototype.apiUrl = params;
//     }
// }
// @logClass('www.baidu.com')
// class HttpClient {
//     constructor() {

//     }

//     getData() {

//     }
// }

// var http:any = new HttpClient();
// console.log(http.apiUrl)//www.baidu.com


//类装饰器重载
// function logClass(target:any) {
//     return class extends target {
//         apiUrl:any = '我是修改后的数据'
//         getData() {
//             console.log(this.apiUrl)
//         }
//     }
// }
// @logClass
// class HttpClient {
//     apiUrl:string | undefined;
//     constructor() {
//         this.apiUrl = '我是构造函数里面的apiUrl'
//     }

//     getData() {
//         console.log(this.apiUrl)
//     }
// }

// var http:any = new HttpClient();
// console.log(http.apiUrl)//我是修改后的数据


//属性装饰器
function logProperty(params:any) {
    return function(target:any,attr:any) {
        target[attr] = params
    }
}
class HttpClient {
    @logProperty('www.baidu.com')
    apiUrl:string | undefined;
    constructor() {

    }
}

let http = new HttpClient();
console.log(http.apiUrl)//www.baidu.com


