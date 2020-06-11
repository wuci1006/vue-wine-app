//该文件专用于调接口和获取数据
//1.导入axios包
import axios from 'axios'
//2.设置基础路径
axios.defaults.baseURL = 'src/data'//http://l192.168.2.21:8080

//3.引入参数处理模块
var qs = require("qs");

//声明一个名字为getNewList 的函数，params是函数中的参数

//export 导出
export const getChina = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/china.json",qs.stringify(params))
    .then(res=>res.data)
}

export const getProduction = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/production.json",qs.stringify(params))
    .then(res=>res.data)
}

export const getCartList = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/cartlist.json",qs.stringify(params))
    .then(res=>res.data)
}

export const getRunList = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/runlist.json",qs.stringify(params))
    .then(res=>res.data)
}

export const getSiftList = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/siftlist.json",qs.stringify(params))
    .then(res=>res.data)
}

export const getFriendList = (params) =>{
  //params是参数对象，qs会对参数对象进行处理
  return axios
    .get("/friendlist.json",qs.stringify(params))
    .then(res=>res.data)
}
