import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

IsActive = function (value) {
  let isActive = false
  const path = FlowRouter._current.path
  if (value == '/') {
    isActive = path == '/' ? true : false
  } else {
    const lastIndex1 = path.lastIndexOf('/')
    const lastIndex2 = path.lastIndexOf('?')
    let currentPath = path.substring(lastIndex1 + 1, lastIndex2 != -1 ? lastIndex2 : path.length)
    isActive = value == currentPath
  }
  return isActive
}

Template.registerHelper('isActive', function (value, htmlClass) {
  FlowRouter.watchPathChange()
  return IsActive(value, htmlClass)
})
/* client üzerindeki log işlemlerinde global*/
/*Util = {
  name: '',
}
//Meteora Özgü isClient işlemleri için fonksiyon
if(Meteor.isClient) {
  Util.log = (message) => {
    console.log(message)
  }
} */ 

/* Server İşlemleri için*/
/* if(Meteor.isServer) {
  Util.log = (message) => {
    console.log(message)
}*/
/* if(!Meteor.isClient) {
  Util.log = (message) => {
    console.log(message)
}*/
//Server Dosyasına global fonksiyon
/* Util.log = (message) => {
  console.log(message)
}*/