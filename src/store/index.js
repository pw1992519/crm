import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
let state = {
    slideBol: true
}
// 返回改变后的数值
const getters = {
    count(context){
        return context.count
    },
    getOdd(context) {
        return context.count % 2 === 0 ? '偶数' : '奇数'
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})