//该文件专用于调接口和获取数据
//1.导入axios包
import axios from 'axios'
//2.设置基础路径
if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = 'src/data';
} else if (process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = 'http://192.168.1.5:8080';
}


//3.引入参数处理模块
var qs = require("qs");

//声明一个名字为getNewList 的函数，params是函数中的参数

//4.export 导出
//params是参数对象，qs会对参数对象进行处理

// 首页
export const getBox = (params) => {
    return axios.get("/box.json", qs.stringify(params)).then(res => res.data);
}

export const getProduction = (params) => {
    return axios.get("/production.json", qs.stringify(params)).then(res => res.data)
}

// 猜你喜欢
export const getLike= (params) => {
    return axios.get("/like.json", qs.stringify(params)).then(res => res.data)
}

// 社区-活动
export const getActivity = (params) => {
    return axios.get("/activity.json", qs.stringify(params)).then(res => res.data);
}
// 社区-精选
export const getSift = (params) => {
    return axios.get("/sift.json", qs.stringify(params)).then(res => res.data);
}
// 社区-酒友圈
export const getCircle = (params) => {
    return axios.get("/circle.json", qs.stringify(params)).then(res => res.data);
}
