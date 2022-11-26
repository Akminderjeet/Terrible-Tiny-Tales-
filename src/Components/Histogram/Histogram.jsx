import React from 'react'
import { BarChart, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, ResponsiveContainer } from "recharts";


export default function Histogram({ stat, dataa }) {
    return !stat ? <div></div> : (
        <ResponsiveContainer width="100%" height="100%">
            {/* <h1 onClick={doit}>hello</h1> */}
            <div className="App">
                <BarChart
                    width={800}
                    height={300}
                    data={dataa}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 50]} />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="value" fill="red" />
                </BarChart>
            </div>
        </ResponsiveContainer>
    )
}
