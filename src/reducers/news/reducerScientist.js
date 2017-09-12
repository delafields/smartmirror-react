import { FETCH_SCIENTIST_NEWS } from "../../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SCIENTIST_NEWS:
      return action.payload;
    default:
      return state;
  }
}
