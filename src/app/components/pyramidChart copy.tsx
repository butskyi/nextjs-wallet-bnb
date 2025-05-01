export default function PyramidChart() {
  const levels = [
    {
      level: '1st Level',
      left: ['100 TRX'],
      right: "1st Level 7 Members' Offering 700TRX",
      color: 'rgb(122, 205, 149)',
    },
    {
      level: '2nd Level',
      left: ['100 TRX'],
      right: "2nd Level 49 Members' Offering 4,900TRX",
      color: 'rgb(35, 184, 136)',
    },
    {
      level: '3rd Level',
      left: ['100 TRX'],
      right: "3rd Level 343 Members' Offering 34,300TRX",
      color: 'rgb(48, 141, 138)',
    },
    {
      level: '4th Level',
      left: ['100 TRX'],
      right: "4th Level 2401 Members' Offering 240,100TRX",
      color: 'rgb(26, 116, 191)',
    },
    {
      level: '5th Level',
      left: ['100 TRX'],
      right: "5th Level 16807 Members' Offering 1,680,700TRX",
      color: 'rgb(35, 184, 136)',
    },
    {
      level: '6th Level',
      left: ['100 TRX'],
      right: "6th Level 117649 Members' Offering 11,764,900TRX",
      color: 'rgb(48, 141, 138)',
    },
    {
      level: '7th Level',
      left: ['100 TRX'],
      right: "7th Level 823543 Members' Offering 82,354,300TRX",
      color: 'rgb(26, 116, 191)',
    },
  ];

  const width = 1600;
  const height = 700;
  const baseWidth = 600;
  const topWidth = 0;
  const levelHeight = 80;
  const leftMargin = 250;
  const pyramidX = leftMargin;
  const pyramidY = 60;

  // Collect left-side circle points
  const leftCirclePoints = levels.map((_, i) => {
    const layerWidth = topWidth + ((baseWidth - topWidth) / (levels.length - 1)) * i;
    const x = pyramidX + (baseWidth - layerWidth) / 2 - 170;
    const y = pyramidY + i * levelHeight + levelHeight / 2;
    return { x, y };
  });

  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-[#161c2d] to-[#0e1320] px-20 overflow-x-visible p-10 rounded-3xl">
      <svg width={width} height={height} className="block">
        {/* Zigzag line connecting all left-side outer circles */}
        <polyline
          points={leftCirclePoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />

        {levels.map((lvl, i) => {
          const y = pyramidY + i * levelHeight;
          const layerWidth = topWidth + ((baseWidth - topWidth) / (levels.length - 1)) * i;
          const nextLayerWidth = topWidth + ((baseWidth - topWidth) / (levels.length - 1)) * (i + 1);

          return (
            <g key={lvl.level}>
              <polygon
                points={` 
                  ${pyramidX + (baseWidth - layerWidth) / 2},${y} 
                  ${pyramidX + (baseWidth + layerWidth) / 2},${y} 
                  ${pyramidX + (baseWidth + nextLayerWidth) / 2},${y + levelHeight} 
                  ${pyramidX + (baseWidth - nextLayerWidth) / 2},${y + levelHeight} 
                `}
                fill={lvl.color}
                opacity="0.85"
                stroke="#fff"
                strokeWidth="1"
              />

              {/* Left label */}
              <g>
                <circle
                  cx={pyramidX + (baseWidth - layerWidth) / 2 - 30}
                  cy={y + levelHeight / 2}
                  r="4"
                  fill="#fff"
                />
                <circle
                  cx={pyramidX + (baseWidth - layerWidth) / 2 - 170}
                  cy={y + levelHeight / 2}
                  r="4"
                  fill="#fff"
                />
                <rect
                  x={pyramidX + (baseWidth - layerWidth) / 2 - 165}
                  y={y + levelHeight / 2 - 18}
                  rx="12"
                  width="100"
                  height="36"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={pyramidX + (baseWidth - layerWidth) / 2 - 115}
                  y={y + levelHeight / 2 + 7}
                  className="fill-white text-[18px] font-[Genos]"
                  textAnchor="middle"
                >
                  {lvl.left[0]}
                </text>
                <line
                  x1={pyramidX + (baseWidth - layerWidth) / 2 - 63}
                  y1={y + levelHeight / 2}
                  x2={pyramidX + (baseWidth - layerWidth) / 2 - 23}
                  y2={y + levelHeight / 2}
                  stroke="#fff"
                  strokeWidth="2"
                />
              </g>

              {/* Right label */}
              <g>
                <circle
                  cx={pyramidX + (baseWidth + layerWidth) / 2 + 30}
                  cy={y + levelHeight / 2}
                  r="7"
                  fill="#fff"
                />
                <rect
                  x={pyramidX + (baseWidth + layerWidth) / 2 + 85}
                  y={y + levelHeight / 2 - 18}
                  rx="12"
                  width="450"
                  height="36"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={pyramidX + (baseWidth + layerWidth) / 2 + 290}
                  y={y + levelHeight / 2 + 7}
                  className="fill-white text-[18px] font-[Genos]"
                  textAnchor="middle"
                >
                  {lvl.right}
                </text>
                <line
                  x1={pyramidX + (baseWidth + layerWidth) / 2 + 23}
                  y1={y + levelHeight / 2}
                  x2={pyramidX + (baseWidth + layerWidth) / 2 + 83}
                  y2={y + levelHeight / 2}
                  stroke="#fff"
                  strokeWidth="2"
                />
              </g>

              {/* Middle level label */}
              <text
                x={width / 2 - 240}
                y={y + levelHeight / 2 + 20}
                className="text-[12px] font-Genos opacity-80"
                textAnchor="middle"
              >
                {lvl.level}
              </text>
            </g>
          );
        })}

        {/* Last line connecting the last circle to the outer boundary */}
        <line
          x1={leftCirclePoints[leftCirclePoints.length - 1].x}
          y1={leftCirclePoints[leftCirclePoints.length - 1].y}
          x2={pyramidX - 100}  // Intermediate point moved to the left side of the chart
          y2={pyramidY + levels.length * levelHeight + 30}  // Adjusted y-coordinate
          stroke="#fff"
          strokeWidth="2"
        />
        <line
          x1={pyramidX - 100}  // Intermediate point on the left side
          y1={pyramidY + levels.length * levelHeight + 30}  // Adjusted y-coordinate
          x2={pyramidX + (baseWidth - topWidth) / 2}  // Final destination point
          y2={pyramidY + levels.length * levelHeight + 30}
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Outline of pyramid */}
        <polygon
          points={` 
            ${pyramidX + (baseWidth - topWidth) / 2},${pyramidY} 
            ${pyramidX + (baseWidth + topWidth) / 2},${pyramidY} 
            ${pyramidX + (baseWidth + baseWidth) / 2},${pyramidY + (levels.length - 1) * levelHeight} 
            ${pyramidX + (baseWidth - baseWidth) / 2},${pyramidY + (levels.length - 1) * levelHeight}
            ${pyramidX + (baseWidth - topWidth) / 2},${pyramidY}
          `}
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Bottom Label */}
        <text
          x={pyramidX + (baseWidth - topWidth) / 2+50}  // Final destination point
          y={pyramidY + levels.length * levelHeight +40}
          className="fill-white text-[22px] font-[Genos] opacity-80"
          textAnchor="middle"
        >
          New Saint
        </text>
      </svg>
    </div>
  );
}
