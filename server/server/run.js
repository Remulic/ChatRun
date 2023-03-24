/**
 * 运动数据更新-前端逻辑需求
 *  调用CRUD APi
 *    1.applyFriend 好友申请
 */

 const dbserver = require('../dao/dbserver');

 exports.updateRunDate = (req, res)=>{
   let data = req.body
   dbserver.updateRunDate(data, res)
 }

 exports.findRunDate = (req, res)=>{
    let data = req.body
    dbserver.findRunDate(data ,res)
  }
 exports.allRunDate = (req, res)=>{
    let data = req.body
    dbserver.allRunDate(data ,res)
  }