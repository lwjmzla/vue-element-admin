import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/) // 检索的目录   是否检索子目录    正则表达式
console.log(req)
const requireAll = (requireContext) => {
  console.dir(requireContext) // !requireContext 是一个函数，这个函数有个属性keys也是一个方法
  console.log(requireContext.keys()) // ! 得到 ["./404.svg", "./bug.svg",...
  requireContext.keys().map(requireContext) // ! requireContext用来引入资源
}
requireAll(req)

// import './svg/user.svg'  //  !手动引入资源
// import './svg/password.svg'

// const req = require.context('./css', false, /\.css$/)
// const requireAll = (requireContext) => {
//   requireContext.keys().map(requireContext) // ! requireContext用来引入资源
// }
// requireAll(req)
