import axios from "axios";

export default function getStates() {

 const options = {
  url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  method: 'GET',
 }

 return axios.request(options)
  .then((req) => {
   return req.data;
  }).catch((err) => {
   return console.log(err)
  })
}