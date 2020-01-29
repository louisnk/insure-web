/* eslint no-console: 0 */
/* eslint max-len: 0 */
/* eslint import/extensions: 0 */

import apisauce from 'apisauce';

const DEV_URL = 'http://localhost:10010'


const Create = (apiBaseURL = DEV_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: apiBaseURL,
    // here are some default headers
    headers: {
      // 'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // api.addRequestTransform((request) => {

  // });

  // api.addResponseTransform((response) => {
  //   if (response && parseInt(response.status, 10) === 200) {
  //     response.data = response.data && ('data' in response.data)
  //       ? response.data.data
  //       : response.data;
  //   }
  // });


  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  // Test
  const testConnection = () => api.get('/docs');

  // Customers
  const getCustomers = (params) => api.get('/customers', { params });
  const getCustomer = (uuid) => api.get(`/customers/${uuid}`);
  const createCustomer = ({ data }) =>
    api.post('/customers', { data });
  const updateCustomer = (uuid, data) =>
    api.post(`/customers/${uuid}`, data);


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    testConnection,
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer
  };
};

// let's return back our create method as the default.
export default {
  Create,
};
