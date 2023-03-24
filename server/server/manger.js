/**
 * 后台管理所用
 */

const dbserver = require('../dao/dbserver');

//消息
exports.getMessage = (req, res) => {
    let { data } = req.body
    dbserver.getMessage(data, res)
  }
exports.delMessage = (req, res) => {
    let data  = req.body
    dbserver.delMessage(data, res)
  }
//评论
exports.getDiscuss = (req, res) => {
    let { data } = req.body
    dbserver.getDiscuss(data, res)
  }
exports.delDiscuss = (req, res) => {
    let data  = req.body
    dbserver.delDiscuss(data, res)
  }
exports.getDynamic = (req, res) => {
    let { data } = req.body
    dbserver.getDynamic(data, res)
  }
exports.delDynamic = (req, res) => {
    let data  = req.body
    dbserver.delDynamic(data, res)
  }
exports.updateUser = (req, res) => {
    let data  = req.body
    dbserver.updateUser(data, res)
  }
exports.runDate = (req, res) => {
    let data  = req.body
    dbserver.runDate(data, res)
  }