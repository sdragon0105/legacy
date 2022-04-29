import React, { useState, useEffect, useCallback } from 'react';
import Economy from './Economy';
import axios from 'axios';

const fetchData = async (table, timeRange, callback) => {
  let frequencParam = '';
  let fetchURL = '';
  switch (table) {
    case 'MarketplaceSales':
      fetchURL = 'http://ec2-54-193-76-195.us-west-1.compute.amazonaws.com:8080/626ab3f9f19ae260acb3f7df/economy/marketplace';
      break;
    case 'TUS':
      fetchURL = 'http://ec2-54-193-76-195.us-west-1.compute.amazonaws.com:8080/626ab49efe0d854695198b42/economy/inflation';
      break;
    default:
      break;
  }
  switch (timeRange) {
    case '24hrs':
      frequencParam = 'TWENTY_FOUR';
      break;
    case '7days':
      frequencParam = 'SEVEN';
      break;
    case 'all':
      frequencParam = 'ALL_TIME';
      break;
    default:
      break;
  }
  try {
    let response = await axios.get(
      // 'https://p2eanalytics.com/crabada/getEconomy',
      fetchURL,
      {
        params: {
          // table: table,
          // timeRange: timeRange,
          frequency: frequencParam,
        },
      },
    );
    callback(null, response.data.data);
  } catch (e) {
    callback(e);
  }
};

function EconomyContainer() {
  const [menus, setMenus] = useState([0, 0]);
  const [timeFilter, setTimeFilter] = useState(['all', 'all']);
  const [marketplaceData, setMarketplaceData] = useState([[]]);
  const [tokenData, setTokenData] = useState([[]]);
  const [tokenMinMax, setTokenMinMax] = useState([
    ['auto', 'auto'],
    ['auto', 'auto'],
  ]);
  const [marketMinMax, setMarketMinMax] = useState([
    ['auto', 'auto'],
    ['auto', 'auto'],
    ['auto', 'auto'],
  ]);

  const temp = {
    erc721Id: 'erc721:62646d9538af487750b95e33',
    nativeCurrencyId: 'erc20:6265913a2d30e71b11d446f6',
    data: [
      {
        timestamp: 1650369600000,
        unitsSold: 54,
        averageNativeVolume: 1127116000000000000000000,
        averageUSDVolume: 0,
        averageNativePrice: 20872518518518518518518,
        averageUSDPrice: 0,
      },
      {
        timestamp: 1650373200000,
        unitsSold: 68,
        averageNativeVolume: 1391438000000000000000000,
        averageUSDVolume: 0,
        averageNativePrice: 20462323529411764705882,
        averageUSDPrice: 0,
      },
      {
        timestamp: 1650376800000,
        unitsSold: 56,
        averageNativeVolume: 1207184000000000000000000,
        averageUSDVolume: 0,
        averageNativePrice: 21556857142857142857142,
        averageUSDPrice: 0,
      },
      {
        timestamp: 1650380400000,
        unitsSold: 137,
        averageNativeVolume: 2697732000000000000000000,
        averageUSDVolume: 0,
        averageNativePrice: 19691474452554744525547,
        averageUSDPrice: 0,
      },
    ],
  };

  useEffect(() => {
    fetchData('MarketplaceSales', timeFilter[0], (err, market) => {
      if (!err) {
        let salesMin = 99999999999999;
        let salesMax = -1;
        let averageMin = 99999999999999;
        let averageMax = -1;
        let countMin = 99999999999999;
        let countMax = -1;
        // let salesArray = market[0][0]['data']
        // let tempArray = temp.data;
        let tempArray = market.data;
        console.log('salesArray', tempArray);
        let salesArr = [];
        let averageArr = [];
        let soldArr = [];
        let marketArray = [];

        for (let i = 0; i < tempArray.length; i++) {
          let timestamp = tempArray[i].timestamp; //Example -> in ms
          const date = new Date(timestamp);
          const dateResult = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

          salesArr.push({ x: dateResult, y: tempArray[i].averageNativeVolume / Math.pow(10, 18) });
          averageArr.push({ x: dateResult, y: tempArray[i].averageNativePrice / Math.pow(10, 18) });
          soldArr.push({ x: dateResult, y: tempArray[i].unitsSold });

          if (salesArr[i]['y'] < salesMin) {
            salesMin = salesArr[i]['y'];
          }
          if (salesArr[i]['y'] > salesMax) {
            salesMax = salesArr[i]['y'];
          }

          if (averageArr[i]['y'] < averageMin) {
            averageMin = averageArr[i]['y'];
          }
          if (averageArr[i]['y'] > averageMax) {
            averageMax = averageArr[i]['y'];
          }

          if (soldArr[i]['y'] < countMin) {
            countMin = soldArr[i]['y'];
          }
          if (soldArr[i]['y'] > countMax) {
            countMax = soldArr[i]['y'];
          }
        }
        console.log('salesArr', salesArr);
        marketArray.push([{ id: 'Sales', data: salesArr }]);
        marketArray.push([{ id: 'Average Price', data: averageArr }]);
        marketArray.push([{ id: 'Crabada Sold', data: soldArr }]);
        console.log('marketArray', marketArray);

        // let averageMin = 99999999999999
        // let averageMax = -1
        // let averageArray = market[1][0]['data']
        // for (let i = 0; i < averageArray.length; i++) {
        //   if (averageArray[i]['y'] < averageMin) {
        //     averageMin = averageArray[i]['y']
        //   }
        //   if (averageArray[i]['y'] > averageMax) {
        //     averageMax = averageArray[i]['y']
        //   }
        // }
        // let countMin = 99999999999999
        // let countMax = -1
        // let countArray = market[2][0]['data']
        // for (let i = 0; i < countArray.length; i++) {
        //   if (countArray[i]['y'] < countMin) {
        //     countMin = countArray[i]['y']
        //   }
        //   if (countArray[i]['y'] > countMax) {
        //     countMax = countArray[i]['y']
        //   }
        // }

        salesMin = salesMin * 0.4;
        salesMax = salesMax * 1.2;
        averageMin = averageMin * 0.4;
        averageMax = averageMax * 1.2;
        countMin = countMin * 0.4;
        countMax = countMax * 1.2;

        // setMarketplaceData(market)
        setMarketplaceData(marketArray);

        setMarketMinMax([
          [salesMin, salesMax],
          [averageMin, averageMax],
          [countMin, countMax],
        ]);
      }
    });
  }, [timeFilter[0]]);

  const temp1 = {
    erc20Id: 'erc20:62646d9538af487750b95e33',
    data: [
      {
        timestamp: 1650369600000,
        netSupply: 1127116000000000000000000,
        burnPercent: 0.01,
        mintPercent: 0.05,
        inflationPercent: 0.04,
        timeBucketMints: 100000000000,
        timeBucketBurns: 100000000000,
      },
      {
        timestamp: 1650373200000,
        netSupply: 1227116000000000000000000,
        burnPercent: 0.01,
        mintPercent: 0.05,
        inflationPercent: 0.04,
        timeBucketMints: 100000000000,
        timeBucketBurns: 100000000000,
      },
      {
        timestamp: 1650376800000,
        netSupply: 1137116000000000000000000,
        burnPercent: 0.01,
        mintPercent: 0.05,
        inflationPercent: 0.04,
        timeBucketMints: 100000000000,
        timeBucketBurns: 100000000000,
      },
      {
        timestamp: 1650380400000,
        netSupply: 1027116000000000000000000,
        burnPercent: 0.01,
        mintPercent: 0.05,
        inflationPercent: 0.04,
        timeBucketMints: 100000000000,
        timeBucketBurns: 100000000000,
      },
    ],
  };

  useEffect(() => {
    fetchData('TUS', timeFilter[1], (err, token) => {
      // console.log('token', token);
      if (!err) {
        let netSupplyMin = 99999999999999;
        let netSupplyMax = -1;

        // let supplyArray = token[0][0]['data']
        // let tempArray = temp1.data;
        let tempArray = token.data;
        console.log('aaaa', tempArray);
        let netSupplyArr = [];
        // let issuanceRateArr = [];
        let tokenArr = [];

        let issuance = {
          id: 'issuance',
          data: [],
        };
        let breeding = {
          id: 'breeding',
          data: [],
        };
        let inflation = {
          id: 'inflation',
          data: [],
        };

        let timeBucketMintBurnArr = []

        for (let i = 0; i < tempArray.length; i++) {
          let timestamp = tempArray[i].timestamp; //Example -> in ms
          const date = new Date(timestamp);
          const dateResult = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

          // netSupply
          netSupplyArr.push({ x: dateResult, y: tempArray[i].netSupply / Math.pow(10, 18) });

          //issuanceRatio
          // 1: issuance
          issuance.data.push({
            x: dateResult,
            y: tempArray[i].inflationPercent,
          });
          // 2: breeding
          breeding.data.push({
            x: dateResult,
            y: tempArray[i].burnPercent,
          });
          // 3: inflation
          inflation.data.push({
            x: dateResult,
            y: tempArray[i].mintPercent,
          });

          console.log(netSupplyArr);
          if (netSupplyArr[i]['y'] < netSupplyMin) {
            netSupplyMin = netSupplyArr[i]['y'];
            console.log(netSupplyMin);
          }
          if (netSupplyArr[i]['y'] > netSupplyMax) {
            netSupplyMax = netSupplyArr[i]['y'];
            console.log(netSupplyMax);
          }

          // timeBucketMintBurn
          timeBucketMintBurnArr.push({ date: dateResult, mints: tempArray[i].timeBucketMints, burns: tempArray[i].timeBucketBurns, keys: ['mints', 'burns' ] });
        }      

        tokenArr.push([{ id: 'Net Supply', data: netSupplyArr }]);
        tokenArr.push([issuance, breeding, inflation]);
        tokenArr.push(timeBucketMintBurnArr);

        netSupplyMax = netSupplyMax * 1.2;
        netSupplyMin = netSupplyMin * 0.3;

        // setTokenData(token);
        setTokenData(tokenArr);
        setTokenMinMax([
          [netSupplyMin, netSupplyMax],
          ['auto', 'auto'],
        ]);
      }
    });
  }, [timeFilter[1]]);
  return (
 