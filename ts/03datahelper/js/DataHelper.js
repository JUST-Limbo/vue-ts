"use strict";
var Datahelper = /** @class */ (function () {
    // let dh=new DataHelper('plData','id')
    function Datahelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    Datahelper.prototype.readData = function () {
        var strData = localStorage.getItem(this.dataKey);
        var arrData = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    };
    Datahelper.prototype.saveData = function (arrData) {
        var str = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    };
    Datahelper.prototype.addData = function (conStr) {
        var arr = this.readData();
        var obj = {
            content: conStr,
        };
        // obj[this.primaryKey]=1
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        obj[this.primaryKey] = newId;
        arr.push(obj);
        this.saveData(arr);
        return newId;
    };
    Datahelper.prototype.removeDataById = function (id) {
        var _this = this;
        var arr = this.readData();
        var index = arr.findIndex(function (ele) {
            return ele[_this.primaryKey] == id;
        });
        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    };
    return Datahelper;
}());
