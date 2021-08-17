import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import useFetch from 'use-http'
import {orderBy as _orderBy} from 'lodash'
// @ts-ignore
const JsonTable = require('ts-react-json-table');

// @ts-ignore
function cvt(prefix, obj) {
  return {
    [`${prefix}-avg`]: Math.round(obj.average * 100) /100,
    [`${prefix}-diff`]: Math.round(obj.diff * 100) /100,
    [`${prefix}-close`]: Math.round(obj.closeness * 100) /100,
  }
}

function App() {
  const [sortOn, setSortOn] = useState('44');
  const { loading, error, data = [], get } = useFetch('https://shreyas1496.tech/market-api/data', {}, [])

  const data2 =  useMemo(() => {
    // @ts-ignore
    const int = data.map(({name, ltp, ma44, ma20, ma10}) => ({
      name, ltp, ...cvt('44', ma44), ...cvt('20', ma20), ...cvt('10', ma10)
    }));

    return _orderBy(int, `${sortOn}-close`, 'asc');
  }, [sortOn, data])
  
  useEffect(() => {
    const id = setInterval(() => get(`?date=${Date.now()}`,), 20000);
    return () => clearInterval(id)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  
  return (
    <div className="App">
      <header className="App-header">
      
      <select style={{padding:'20px'}} value={sortOn} onChange={e => setSortOn(e.target.value)}>
        <option value="44">44</option>
        <option value="20">20</option>
        <option value="10">10</option>
      </select>
      </header>
      <section className="tables">
      {error && 'Error!'}
      {loading && 'Loading...'}
      <JsonTable className={"tables"} rows={data2} key={sortOn} />
      </section>
    </div>
  );
}

export default App;
