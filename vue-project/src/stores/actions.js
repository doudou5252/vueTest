import {
  ACTIVITY,
  FIRSTREQUEST,
  SECONDREQUEST,
  THIRDREQUEST
} from "./mutation-types";

import {activity} from "../api";

export default {
    async getActivity ({commit, state},limit) {
      let dd=5
      const result = await activity(limit,dd)
      if (result.code === 0) {
        const address = result.data
        commit(ACTIVITY, {address})
      }
    },
    async getfirstRequest({commit,state},lession_id) {
      const result = await firstRequest(lession_id)
      if (result.code ===1){
        const data = result.data
        commit(FIRSTREQUEST, {data})
      } 
    },
    async getsecondRequest({commit,state},lession_id) {
      const result = await secondRequest(lession_id)
      if (result.code ===1){
        const data = result.data
        commit(SECONDREQUEST, {data})
      }
    },
    async getthirdRequest({commit,state},lession_id) {
      const result = await thirdRequest(lession_id)
      if (result.code ===1){
        const data = result.data
        commit(THIRDREQUEST, {data})
      }
    }
}
