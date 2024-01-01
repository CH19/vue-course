import axios from 'axios';
import {api_key, api} from '../info.js';
import data from './data.json';
// import data from './data.json' assert {type: 'json'};
export const getData = async () => {
    const products = await axios(api, {
        headers: { 'X-Api-Key': api_key}
    });
    const data = await products;
    return data;
};
export const getDataJson = async (json = data) => {
    const quote = await json;
    return quote;
};
// const quote = await getData();
// getDataJson().then(e => console.log(e));