  function handler(req, res) {
    console.log(req.data);
    console.log(req);
    console.log(res);
    var axios = require('axios');
    const {
        serie,
        numero_factura,
        rfc,
        codigo_cliente,
    } = req.body
    console.log(req.body);
    var qs = require('qs');
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
    // const newData = await result.getAll()
    // res.status(200).json({newData, length: newData.length}
    // console.log(res);
    //  res.end(JSON.stringify(response))
     axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
         return res.end(JSON.stringify(response.data))
    }) 
    }

    export default handler