import Home  from "@/contanier/home"
import Main from "@/contanier/main"
import {uniq} from 'lego-utils'
console.log(uniq)


export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/main",
    component: Main 
  }
]