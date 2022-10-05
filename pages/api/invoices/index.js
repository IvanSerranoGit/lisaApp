  async function handler(req, res) {
    var axios = require('axios');
    var qs = require('qs');
    const {
        serie,
        numero_factura,
        rfc,
        codigo_cliente,
    } = req.body
    var data = qs.stringify({
        SERIE_FACTURA: serie,
        NUMERO_FACTURA: numero_factura,
        RFC: rfc,
        CODIGO_CLIENTE: codigo_cliente,
    });
    var config = {
        method: 'post',
        url: 'https://lisa.rpalumza.com/galileo/lisa/geninf/consulta_factura',
        headers: {
            'Authorization': 'Basic Q09OU1VMVEFTOmFsdW16YTIy',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    await axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
         return res.end(JSON.stringify(response.data))
    }) 
    }

    export default handler