/**
 * 评论-前端逻辑需求
 *  调用CRUD APi
 *    1.发表评论
 *    2.删除动态
 *    3.加载评论
 */

 const dbserver = require('../dao/dbserver');

 exports.newDiscuss = (req, res)=>{
   let data = req.body
   // console.log(data)
   dbserver.newDiscuss(data, res)
 }
 exports.DiscussLoad = (req, res)=>{
    let data = req.body
    // console.log(data)
    dbserver.DiscussLoad(data, res)
  }
  exports.deleteDiscuss = (req, res)=>{
    let data = req.body
    // console.log(data)
    dbserver.deleteDiscuss(data, res)
  }