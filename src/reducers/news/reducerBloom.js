import { FETCH_BLOOM_NEWS } from "../../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BLOOM_NEWS:
      return action.payload;
    default:
      return state;
  }
}
