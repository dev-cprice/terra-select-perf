import React, { useState, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import Base from 'terra-base';
import Select from 'terra-form-select';

function times(n, callback) {
  return [...new Array(n)].map((_, i) => callback(i));
}

function PerfTest() {
  const [count, setCount] = useState(10);
  const options = useMemo(() => {
    const n = count >= 0 ? count : 0;
    return times(n, i => ({ value: `${i}`, display: `${i}` }));
  }, [count]);

  const onChange = useCallback((event) => {
    setCount(+event.target.value);
  }, []);

  return (
    <Base locale="en">
      <label>Select number of terra-form-select options:</label>
      <input type="number" onChange={onChange} />
      <br />
      <Select>
        {options.map(({ value, display }) => <Select.Option key={value} value={value} display={display} />)}
      </Select>
    </Base>
  );
}

render(<PerfTest />, document.getElementById('root'));
