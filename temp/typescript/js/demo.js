"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('你好');
// boolean
var flag = true;
// number
var num = 10;
// string
var str = 'hello typescript';
// array
//第一种定义数组的方式
//var arr:number[] = [1,2,3,4,5]; //如果里面有字符串编译报错
//第二种定义数组的方式
var array = [1, 2, 6, 7];
// tuple (元祖)属于数组中的一种，就是可以字符串和数字或者其他类型的数组
var arr = [1, 'hello typescript']; //第一个只能是数字类型，第二个只能是字符串类型
// enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["erro"] = 1] = "erro";
})(Flag || (Flag = {}));
;
var s = Flag.success;
// enum Color { blue,red,yellow }
// let c:Color = Color.red;
// console.log(c) //1  如果没有赋值，值则是下标
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["yellow"] = 4] = "yellow";
})(Color || (Color = {}));
var c = Color.yellow;
console.log(c); //4  如果没有赋值，值则是下标
// any
var box = document.getElementById('box');
// undefined,null
var unde;
console.log(unde);
//let nu:null;
var nu;
// void
function run() {
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
function getInfo(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return "\u540D\u5B57\u4E3A: " + name + ",\u5E74\u9F84\u4E3A: " + age;
    }
    else {
        return "\u540D\u5B57\u4E3A: " + name;
    }
}
console.log(getInfo('zhangsan'));
console.log(getInfo('zhangsan', 23));
//ts中的类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.print = function () {
        console.log('我是静态方法');
    };
    Person.sex = 'male';
    return Person;
}());
var p = new Person('zhangsan');
console.log(p.getName());
p.setName('lisi');
console.log(p.getName());
//继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.work = function () {
        console.log(this.name + "\u5728\u5B66\u4E60");
    };
    return Student;
}(Person));
var stu = new Student('小明');
console.log(stu.getName()); //学生
console.log(stu.work()); //小明在学习
//类修饰符
//public 共有，在类里面。子类、类外面都可以访问。
//protected 保护类型 在类里面、子类里面都可以访问，在类外部无法访问。
//private 私有，在类里面可以访问，在子类和类外部无法访问
var wainame = p.name;
console.log(wainame);
// 静态方法和静态属性
//静态方法
Person.print();
//静态属性
console.log(Person.sex);
function getuserInfo(name) {
    console.log(name.firstname, name.lastname);
}
var obj = {
    age: 20,
    firstname: '小',
    lastname: '名',
};
getuserInfo(obj); //obj写在外面表示包含firstname，lastname就可以了,写在里面的话，只能包含这两个。
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var cat = /** @class */ (function () {
    function cat(name) {
        this.name = name;
    }
    cat.prototype.eat = function (food) {
        console.log(this.name + "\u5728\u5403" + food);
    };
    return cat;
}());
var mao = new cat('猫');
mao.eat('老鼠');
// 接口扩展，接口可以继承接口
//命名空间
var A;
(function (A) {
    var cat = /** @class */ (function () {
        function cat(name) {
            this.name = name;
        }
        cat.prototype.eat = function (food) {
            console.log(this.name + "\u5728\u5403" + food);
        };
        return cat;
    }());
})(A || (A = {}));
var B;
(function (B) {
    var cat = /** @class */ (function () {
        function cat(name) {
            this.name = name;
        }
        cat.prototype.eat = function (food) {
            console.log(this.name + "\u5728\u5403" + food);
        };
        return cat;
    }());
})(B || (B = {}));
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
function logProperty(params) {
    return function (target, attr) {
        target[attr] = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    __decorate([
        logProperty('www.baidu.com')
    ], HttpClient.prototype, "apiUrl", void 0);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl); //www.baidu.com
