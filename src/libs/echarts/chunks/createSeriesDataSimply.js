import{d as e,h as n,bj as o,aM as i}from"./index.js";function s(s,a,r){a=e(a)&&{coordDimensions:a}||n({encodeDefine:s.getEncode()},a);var t=s.getSource(),c=o(t,a).dimensions,d=new i(c,s);return d.initData(t,r),d}export{s as c};