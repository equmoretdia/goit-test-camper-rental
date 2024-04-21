import React from 'react';

import { IconComponent } from '../IconComponent/IconComponent';

export const CamperFilter = () => {
  return (
    <aside>
      <div>
        <div>
          <p>Location</p>
          <div>
            <IconComponent
              id="#icon-map-pin"
              width={16}
              height={16}
              stroke="var(--main)"
              strokeWidth={1.3}
              fill="none"
            />
            <input type="text" name="location" placeholder="City in Ukraine" />
          </div>
        </div>
        <div>
          <p>Filters</p>
          <h3>Vehicle equipment</h3>
          <ul>
            <li>
              <input type="checkbox" name="AC" id="AC" value="AC" />
              <p>AC</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="transmission"
                id="transmission"
                value="transmission"
              />
              <p>Automatic</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="kitchen"
                id="kitchen"
                value="kitchen"
              />
              <p>Kitchen</p>
            </li>
            <li>
              <input type="checkbox" name="TV" id="TV" value="TV" />
              <p>TV</p>
            </li>
            <li>
              <input
                type="checkbox"
                name="bathroom"
                id="bathroom"
                value="bathroom"
              />
              <p>Shower/WC</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Vehicle type</h3>
          <div>
            <div>
              <input type="radio" name="type" id="van" value="van" />
              <p>Van</p>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="fully-integrated"
                value="fully-integrated"
              />
              <p>Fully integrated</p>
            </div>
            <div>
              <input type="radio" name="type" id="alcove" value="alcove" />
              <p>Alcove</p>
            </div>
          </div>
        </div>
        <button type="submit">Search</button>
      </div>
    </aside>
  );
};
