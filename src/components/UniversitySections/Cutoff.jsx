import React from 'react';

const cutoffData = [
  {
    course: 'B.Tech in CSE',
    open: 13567,
    general: 13567,
    ews: 25062,
    obc: 57096,
    sc: 122763,
    st: 361124,
    pwd: '-',
  },
  {
    course: 'B.Tech in ECE',
    open: 28173,
    general: 28173,
    ews: 41619,
    obc: 109062,
    sc: 222834,
    st: '-',
    pwd: 1176223,
  },
  {
    course: 'B.Tech in ME',
    open: 54356,
    general: 54356,
    ews: 79877,
    obc: 203069,
    sc: 459706,
    st: '-',
    pwd: 732816,
  },
  {
    course: 'B.Tech in IT',
    open: 17916,
    general: 17916,
    ews: 27361,
    obc: 71245,
    sc: 140198,
    st: '-',
    pwd: 494782,
  },
];

const Cutoff = () => {
      return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-center text-lg font-semibold text-white mb-4">
            Cutoff for Year 2024
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 text-white text-sm">
              <thead className="bg-blue-600">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Course</th>
                  <th className="px-3 py-2 font-medium">Open</th>
                  <th className="px-3 py-2 font-medium">General</th>
                  <th className="px-3 py-2 font-medium">EWS</th>
                  <th className="px-3 py-2 font-medium">OBC</th>
                  <th className="px-3 py-2 font-medium">SC</th>
                  <th className="px-3 py-2 font-medium">ST</th>
                  <th className="px-3 py-2 font-medium">PWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {cutoffData.map(({ course, open, general, ews, obc, sc, st, pwd }) => (
                  <tr key={course} className="hover:bg-gray-800">
                    <td className="px-3 py-2 font-medium text-left">{course}</td>
                    <td className="px-3 py-2">{open}</td>
                    <td className="px-3 py-2">{general}</td>
                    <td className="px-3 py-2">{ews}</td>
                    <td className="px-3 py-2">{obc}</td>
                    <td className="px-3 py-2">{sc}</td>
                    <td className="px-3 py-2">{st === '-' ? '-' : st}</td>
                    <td className="px-3 py-2">{pwd === '-' ? '-' : pwd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default Cutoff;
