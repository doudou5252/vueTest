/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {ACTIVITY} from './mutation-types'

export default {
  [ACTIVITY] (state, {activity}) {
    state.activity = activity
  }
}
