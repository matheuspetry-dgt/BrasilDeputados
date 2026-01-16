import React, { useEffect, useState, useRef, useMemo } from "react";
import * as d3 from "d3";
import { getDeputiesByParty } from "../../services/Api";
import { Box, useTheme } from "@mui/material";

export const Graphic = ({
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}) => {
  const [chartData, setChartData] = useState([]);
  const xAxisRef = useRef(null);
  const theme = useTheme();
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDeputiesByParty();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching deputies by party:", error);
      }
    };
    fetchData();
  }, []);

  const x = useMemo(() => d3.scaleBand()
    .domain(chartData.map(d => d.party))
    .range([marginLeft, width - marginRight])
    .padding(0.3),
    [chartData, width, marginRight, marginLeft]
  );

  const y = useMemo(() => d3.scaleLinear()
    .domain([0, d3.max(chartData, d => d.count)])
    .range([height - marginBottom, marginTop]),
    [chartData, height, marginBottom, marginTop]
  );

  useEffect(() => {
    if (chartData.length > 0) {
      const xAxis = d3.axisBottom(x);

      d3.select(xAxisRef.current)
        .call(xAxis);
    }
  }, [chartData, x, y, theme]);


  if (chartData.length === 0) {
    return <svg width={width} height={height}></svg>;
  }

  return (
    <Box
      sx={{
        bgcolor: "#333",
        color: "#fff",
        boxShadow: "16px",
        borderRadius: 1,
        p: 2,
        width: "100%",
        maxWidth: `${width + marginLeft + marginRight}px`,
        height: `${height + marginTop + marginBottom}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg width={width} height={height}>
        <g fill={"#3B82F6"}>
          {chartData.map((d) => (
            <rect
              key={d.party}
              x={x(d.party)}
              y={y(d.count)}
              width={x.bandwidth()}
              height={height - marginBottom - y(d.count)}
              onMouseEnter={() => setHoveredBar({ party: d.party, count: d.count, x: x(d.party) + x.bandwidth() / 2, y: y(d.count) })}
              onMouseLeave={() => setHoveredBar(null)}
            />
          ))}
        </g>

        {hoveredBar && (
          <text
            x={hoveredBar.x}
            y={hoveredBar.y - 10}
            textAnchor="middle"
            fill={theme.palette.text.primary}
            fontSize="12px"
            fontWeight="bold"
          >
            {hoveredBar.count}
          </text>
        )}

        <g
          ref={xAxisRef}
          transform={`translate(0,${height - marginBottom})`}
          style={{ fontWeight: 700, border: 'none' }}
          strokeOpacity={0}
        />   
      </svg>
    </Box>

);
};
