"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Plot from 'react-plotly.js';

export default function Home() {
  const [plotData, setPlotData] = useState(null);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    let data = [[0.2, 0.4, 0.6, 0.8, 0.1, 0.5, 0.7, 0.9, 0.3, 0.2],[0.5, 0.6, 0.8, 0.4, 0.9, 0.1, 0.3, 0.7, 0.2, 0.4],[0.9, 0.7, 0.2, 0.6, 0.5, 0.8, 0.3, 0.4, 0.1, 0.6],[0.4, 0.8, 0.3, 0.7, 0.2, 0.9, 0.6, 0.1, 0.5, 0.7],[0.3, 0.6, 0.5, 0.9, 0.2, 0.8, 0.4, 0.1, 0.7, 0.3],[0.7, 0.2, 0.4, 0.8, 0.5, 0.9, 0.6, 0.3, 0.1, 0.5],[0.1, 0.5, 0.7, 0.3, 0.8, 0.2, 0.6, 0.4, 0.9, 0.2],[0.8, 0.1, 0.3, 0.6, 0.9, 0.5, 0.2, 0.7, 0.4, 0.6],[0.6, 0.8, 0.5, 0.2, 0.7, 0.4, 0.1, 0.9, 0.3, 0.8],[0.2, 0.3, 0.6, 0.5, 0.8, 0.9, 0.4, 0.7, 0.1, 0.6]]
    fetch("/api/dendrogram",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((resJson) =>{
      console.log(resJson.data, "res");
      const parsedData = JSON.parse(resJson.data as any);
      setPlotData(parsedData.data);
      setLayout(parsedData.layout);
    }).catch((err) => {
      console.log(err, "err");
    });

  
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Dendrogram</h1>
        {plotData && layout && (
          <Plot
            data={plotData}
            layout={layout}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </main>
  );
}
