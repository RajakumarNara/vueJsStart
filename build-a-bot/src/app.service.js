<<<<<<< HEAD
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
=======
import axios from 'axios'
axios.defaults.baseURL='http://personalaccounting.azurewebsites.net'
const appService={
    getPosts(){
        return new Promise((resolve) =>{
            axios.get('http://personalaccounting.azurewebsites.net//odata/LedgerTbls?$filter=ledgerNo ne 2 &$orderby=orderNo')
            .then(response => {
                resolve(response.data)
            })
        })
    }
}
export default appService
>>>>>>> 60d56cffc52dfbe5f8003948a924c169131fb3ce
