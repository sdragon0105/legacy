import React, { memo } from 'react'
import { ResponsiveLine } from '@nivo/line'

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

function Area({ data, colors, minMax, range, tooltipFunction, percentage }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 40, bottom: 50, left: 90 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: minMax ? minMax[0] : 'auto',
        max: minMax ? minMax[1] : 'auto',
        stacked: false,
        reverse: false,
      }}
      curve="monotoneX"
      axisBottom={{
        orient: 'bottom',
        tickSize: 15,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 45,
        legendPosition: 'middle',
        format: (value) => {
          if (data.length > 0 && (range === '30days' || range === 'all')) {
            let minimumDate = data[0]['data'][0]['x'].split('-')
            let valueSplit = value.split('-')
            let toDateFormat =
              parseInt(valueSplit[1]) +
              '/' +
              parseInt(valueSplit[0]) +
              '/' +
              parseInt(valueSplit[2])
            let toDateFormatMinimum =
              parseInt(minimumDate[1]) +
              '/' +
              parseInt(minimumDate[0]) +
              '/' +
              parseInt(minimumDate[2])
            let date = new Date(toDateFormat)
            let minDate = new Date(toDateFormatMinimum)
            let modulo = range === '30days' ? 518400 : 950400
            return ((date.getTime() - minDate.getTime()) * 1000) % modulo === 0
              ? value
              : ''
          } else {
            return value
          }
        },
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 20,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: -55,
        legendPosition: 'middle',
        format: (value) => {
          if (percentage) {
            return value + '%'
          }
          return value >= 0 ? nFormatter(value, 3) : '-' + nFormatter(-value, 3)
        },
      }}
      colors={colors}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      enableArea={false}
      useMesh={true}
      lineWidth={3}
      areaOpacity={0.7}
      enablePoints={false}
      enableGridX={false}
      enableGridY={false}
      tooltip={tooltipFunction}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: 'var(--text-color)',
            },
          },
          legend: {
            text: {
              fill: 'var(--text-color)',
              color: '#ffffff',
            },
          },
        },

        crosshair: {
          line: {
            stroke: '#ffffff',
            strokeWidth: 3,
            strokeOpacity: 1,
          },
        },
      }}
    />
  )
}

export default Area
