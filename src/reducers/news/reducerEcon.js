import { FETCH_ECON_NEWS } from "../../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ECON_NEWS:
      return action.payload;
    default:
      return state;
  }
}
