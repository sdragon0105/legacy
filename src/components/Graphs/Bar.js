import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function Bar({ data, keys, range }) {
  console.log(data, keys, range)
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 75 }}
      padding={0.2}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#004EBF', '#B02170']}
      borderRadius={2}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
        format: (value) => {
          if (range === '30days' || range === 'all') {
            console.log(data)
            let minimumDate = data[0]['date'].split('-')
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
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
        format: (value) => {
          return value >= 0 ? nFormatter(value, 3) : '-' + nFormatter(-value, 3)
        },
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#29cf26"
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          itemTextColor: 'white',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
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
            },
          },
        },
      }}
      enableGridY={false}
      role="application"
      tooltip={(e) => {
        return (
          <div
            style={{
              padding: '10px',
              width: '200px',
              height: '50px',
              borderRadius: '10px',
              backgroundColor: 'rgba(0,0,0,0.75)',
            }}
          >
            <div style={{ color: 'white' }}>
              Mint: <strong> {numberWithCommas(e.data.mint)}</strong>
            </div>
            <div style={{ color: 'white' }}>
              Breed: <strong> {numberWithCommas(e.data.breed)}</strong>
            </div>
      