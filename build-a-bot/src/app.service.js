import axios from 'axios';
axios.defaults.baseURL = 'http://personalaccounting.azurewebsites.net';
const appService = {
    getPosts() {
        return new Promise((resolve)=>{
    axios.get('//odata/LedgerTbls?$filter=ledgerNo ne 2 &$orderby=orderNo').
    then (response=>{
        resolve(response.data)
    } )
  } )
}
}
 export default appService