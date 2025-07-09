const axios = require("axios");

const tokenServive = async () => {
  let postUrl = process.env.DATA_SERVICE;
  let headers = {
    "ocp-apim-subscription-key": process.env.OCP_KEY,
  };
  const response  = await axios.post(postUrl, {}, { headers: headers });
  return response.data?.access_token;
};

module.exports = {tokenServive}