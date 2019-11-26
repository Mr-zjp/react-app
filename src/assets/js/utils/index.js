/*
 * @Author: your name
 * @Date: 2019-11-21 09:42:10
 * @LastEditTime: 2019-11-21 09:44:01
 * @LastEditors: Please set LastEditors
 * @Description: 路由传参
 * @FilePath: \my-app\src\assets\js\utils\routerParams.js
 */
export function localParam (search, hash) {
  search = search || window.location.search;
  hash = hash || window.location.hash;
  var fn = function (str, reg) {
    if (str) {
      var data = {};
      str.replace(reg, function ($0, $1, $2, $3) {
        data[$1] = $3;
      });
      return data;
    }
  };
  return {
    search: fn(search, new RegExp("([^?=&]+)(=([^&]*))?", "g")) || {},
    hash: fn(hash, new RegExp("([^#=&]+)(=([^&]*))?", "g")) || {}
  };
}