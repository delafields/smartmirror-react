import { FETCH_BBC_NEWS } from "../../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BBC_NEWS:
      return action.payload;
    default:
      return state;
  }
}
