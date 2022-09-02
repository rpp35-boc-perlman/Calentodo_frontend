import React from 'react';

const calendarList = (props) => {
  return (
    <ul class="mdc-list" role="group" aria-label="List with checkbox items">
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
        <label class="mdc-list-item__text" for="demo-list-checkbox-item-1">Option 1</label>
      </li>
      <li class="mdc-list-item" role="checkbox" aria-checked="true" tabindex="0">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__graphic">
            <div class="mdc-checkbox">
                <input type="checkbox"
                        class="mdc-checkbox__native-control"
                        id="demo-list-checkbox-item-2"
                        checked />
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
        <label class="mdc-list-item__text" for="demo-list-checkbox-item-2">Option 2</label>
      </li>
      <li class="mdc-list-item" role="checkbox" aria-checked="false">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__graphic">
            <div class="mdc-checkbox">
                <input type="checkbox"
                        class="mdc-checkbox__native-control"
                        id="demo-list-checkbox-item-3" />
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
        <label class="mdc-list-item__text" for="demo-list-checkbox-item-3">Option 3</label>
      </li>
    </ul>

  )
}

export default calendarList;