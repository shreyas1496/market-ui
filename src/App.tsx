import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import useFetch from "use-http";
import { orderBy as _orderBy, get as _get } from "lodash";
import { Notify } from "./components";

const columns = [
  { key: "name", label: "Name" },
  { key: "prevClose", label: "Prev Close" },
  {
    key: "ltp",
    label: "ltp",
    cell: (row: any) => (
      <div
        style={{ backgroundColor: row.ltp > row.prevClose ? "green" : "red" }}
      >
        {row.ltp}
      </div>
    ),
  },
  { key: "movingAverageValues[0].value", label: "44 - avg" },
  { key: "movingAverageValues[0].leads", label: "44 - leads" },
  { key: "movingAverageValues[1].value", label: "20 - avg" },
  { key: "movingAverageValues[1].leads", label: "20 - leads" },
  { key: "movingAverageValues[2].value", label: "10 - avg" },
  { key: "movingAverageValues[2].leads", label: "10 - leads" },
];

function App() {
  const [sortOn, setSortOn] = useState("0");
  const [token, setToken] = useState("");
  const {
    loading,
    error,
    data = [],
    post,
  } = useFetch("https://shreyas1496.tech/market-api/data", {}, []);

  const data2 = useMemo(() => {
    const int = data.map((row: any) => {
      const closeNess =
        Math.abs(row.ltp - _get(row, `movingAverageValues[${sortOn}].value`)) /
        row.ltp;
      return { ...row, closeNess };
    });

    return _orderBy(int, `closeNess`, "asc");
  }, [sortOn, data]);

  const todo = useCallback(() => {
    const id = setInterval(
      () => post(`?date=${Date.now()}`, { "fcm-token": token }),
      20000
    );
    return () => clearInterval(id);
  }, [token, post]);

  useEffect(todo, [todo]);

  return (
    <div className="App">
      <header className="App-header">
        <Notify setToken={setToken} />
        <select
          style={{ padding: "20px" }}
          value={sortOn}
          onChange={(e) => setSortOn(e.target.value)}
        >
          <option value="0">44</option>
          <option value="1">20</option>
          <option value="2">10</option>
        </select>
      </header>
      <section className="tables">
        {error && "Error!"}
        {loading && "Loading..."}
        <table>
          <thead>
            <tr>
              {columns.map(({ key, label }) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data2.map((row) => (
              <tr key={row.name}>
                {columns.map(({ key, cell }) => (
                  <td key={key}>{cell ? cell(row) : _get(row, key)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
