import React from 'react'

const Time = () => (
  <div>
    <pre>
      <code>
        ┌────────────── second (optional)<br />
        │ ┌──────────── minute<br />
        │ │ ┌────────── hour<br />
        │ │ │ ┌──────── day of month<br />
        │ │ │ │ ┌────── month<br />
        │ │ │ │ │ ┌──── day of week<br />
        │ │ │ │ │ │<br />
        │ │ │ │ │ │<br />
        * * * * * *
      </code>
    </pre>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>field</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>second</td>
          <td>0-59</td>
        </tr>
        <tr>
          <td>minute</td>
          <td>0-59</td>
        </tr>
        <tr>
          <td>hour</td>
          <td>0-23</td>
        </tr>
        <tr>
          <td>day of month</td>
          <td>1-31</td>
        </tr>
        <tr>
          <td>month</td>
          <td>1-12 (or names)</td>
        </tr>
        <tr>
          <td>day of week</td>
          <td>0-7 (or names, 0 or 7 are sunday)</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Time
