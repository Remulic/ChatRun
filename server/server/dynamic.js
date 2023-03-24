/**
 * 动态-前端逻辑需求
 *  调用CRUD APi
 *    1.发表动态
 *    2.删除动态
 *    3.检索动态（姓名）
 *    4.好友动态（？）
 */

 const dbserver = require('../dao/dbserver');

 exports.newDynamic = (req, res)=>{
   let data = req.body
   // console.log(data)
   dbserver.newDynamic(data, res)
 }
 exports.deleteDynamic = (req, res)=>{
  let data = req.body
  // console.log(data)
  dbserver.deleteDynamic(data, res)
}
exports.findDynamic = (req, res)=>{
  let data = req.body
  // console.log(data)
  dbserver.findDynamic(data, res)
}
 exports.DynamicLoad = (req, res)=>{
  let data = req.body
  // console.log(data)
  dbserver.DynamicLoad(data, res)
}