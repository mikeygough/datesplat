import React, { useState } from 'react';
import './Datelib.css';
import d from '@mikeygough/datelib';

export default function Datelib() {
  const [tempDate, setTempDate] = useState('');
  const [date, setDate] = useState('');

  const setValidDate = () => {
    try {
      const newDate = new d(tempDate);
      setDate(newDate);
    } catch {
      // invalid date
      setDate(null);
    }
  };

  return (
    <div className="Datelib">
      <section>
        <input
          id="dateInput"
          type="text"
          placeholder="Enter a date"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
        />
        <button type="button" onClick={setValidDate}>
          Submit
        </button>
      </section>

      <section>
        <strong>{!date && '*Please enter a valid date'}</strong>
      </section>

      <section>
        <h3>
          {`year: `}
          <span>{date ? date.year : '  '}</span>
        </h3>

        <h3>
          {`yr: `}
          <span>{date ? date.yr : '  '}</span>
        </h3>

        <h3>
          {`month: `}
          <span>{date ? date.month : '  '}</span>
        </h3>

        <h3>
          {`mon: `}
          <span>{date ? date.mon : '  '}</span>
        </h3>

        <h3>
          {`day: `}
          <span>{date ? date.day : '  '}</span>
        </h3>

        <h3>
          {`dy: `}
          <span>{date ? date.dy : '  '}</span>
        </h3>

        <h3>
          {`hours: `}
          <span>{date ? date.hours : '  '}</span>
        </h3>

        <h3>
          {`secs: `}
          <span>{date ? date.secs : '  '}</span>
        </h3>

        <h3>
          {`format(): `}
          <span>{date ? date.format() : '  '}</span>
        </h3>

        <h3>
          {`when(): `}
          <span>{date ? date.when() : '  '}</span>
        </h3>
      </section>
    </div>
  );
}
