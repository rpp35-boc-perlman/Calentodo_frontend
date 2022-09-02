import React from 'react';

const CalendarItem = (props) => {
  return (

    <li class="mdc-list-item" role="checkbox" aria-checked="false">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__graphic">
        <div class="mdc-checkbox">
          <input type="checkbox"
                  class="mdc-checkbox__native-control"
                  id="demo-list-checkbox-item-1"  />
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
                  viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path"
                    fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
        </div>
      </span>
      <label class="mdc-list-item__text" for="demo-list-checkbox-item-1">{this.props.user.user_email}</label>
    </li>
  )
}

export default CalendarItem;