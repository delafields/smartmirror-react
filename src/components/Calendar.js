import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCalendar } from "../actions";

import "../styles/calendar.css";

class Calendar extends Component {
  componentWillMount() {
    this.props.fetchCalendar();
    this.interval = setInterval(this.fetchCalendar, 10 * 6000 * 60 * 2); // 2 hrs
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {
      event1,
      event2,
      event3,
      event4,
      event5,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5
    } = this.props.calendar;

    return (
      <div style={{ paddingLeft: "60px" }}>
        <table>
          <colgroup>
            <col style={{ width: "60px" }} />
            <col style={{ width: "200px" }} />
          </colgroup>
          <tr>
            <td className="calDate">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {event1}
            </td>
            <td>
              <span className="calEvent">{desc1}</span>
            </td>
          </tr>
          <tr id="event2">
            <td className="calDate">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {event2}
            </td>
            <td>
              <span className="calEvent">{desc2}</span>
            </td>
          </tr>
          <tr id="event3">
            <td className="calDate">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {event3}
            </td>
            <td>
              <span className="calEvent">{desc3}</span>
            </td>
          </tr>
          <tr id="event4">
            <td className="calDate">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {event4}
            </td>
            <td>
              <span className="calEvent">{desc4}</span>
            </td>
          </tr>
          <tr id="event5">
            <td className="calDate">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {event5}
            </td>
            <td>
              <span className="calEvent">{desc5}</span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calendar: state.calendar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCalendar
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
