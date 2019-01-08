import {
  ACTIVITY
} from "./mutation-types";

import {activity} from "../api";

export default {
  async getActivity ({commit, state},limit) {
    let dd=5
    const result = await activity(limit,dd)
    console.log(result)
    if (result.code === 0) {
      const address = result.data
      commit(ACTIVITY, {address})
    }
  }
}
