import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import useFetch from 'use-http';
import { orderBy as _orderBy } from 'lodash';
// @ts-ignore
const JsonTable = require('ts-react-json-table');

// @ts-ignore
function cvt(prefix, avg, ltp) {
  const close = Math.round((Math.abs(avg - ltp) / ltp) * 100) / 100;
  return {
    [`${prefix}-avg`]: Math.round(avg * 100) / 100,
    [`${prefix}-close`]: close,
  };
}

function App() {
  const [sortOn, setSortOn] = useState('44');
  const {
    loading, error, data = [], get,
  } = useFetch('https://shreyas1496.tech/market-api/data', {}, []);

  const data2 = useMemo(() => {
    const int = data.map(({
      // @ts-ignore
      name, prevClose, ltp, ma44, ma20, ma10,
    }) => ({
      name, prevClose, ltp, ...cvt('44', ma44, ltp), ...cvt('20', ma20, ltp), ...cvt('10', ma10, ltp),
    }));

    return _orderBy(int, `${sortOn}-close`, 'asc');
  }, [sortOn, data]);

  useEffect(() => {
    const id = setInterval(() => get(`?date=${Date.now()}`), 20000);
    return () => clearInterval(id);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <select style={{ padding: '20px' }} value={sortOn} onChange={(e) => setSortOn(e.target.value)}>
          <option value="44">44</option>
          <option value="20">20</option>
          <option value="10">10</option>
        </select>
      </header>
      <section className="tables">
        {error && 'Error!'}
        {loading && 'Loading...'}
        <JsonTable className="tables" rows={data2} columns={['name', 'prevClose', { key: 'ltp', label: 'ltp', cell: (row: any) => <span style={{ backgroundColor: row.ltp > row.prevClose ? 'green' : 'red' }}>{row.ltp}</span> }, '44-avg', '20-avg', '10-avg']} />
      </section>
    </div>
  );
}

export default App;
