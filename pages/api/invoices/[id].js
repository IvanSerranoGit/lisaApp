// const allInvoice = async (req, res) {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Basic Q09OU1VMVEFTOmFsdW16YTIy");
//     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//     var urlencoded = new URLSearchParams();
//     urlencoded.append("SERIE_FACTURA", "V33");
//     urlencoded.append("NUMERO_FACTURA", "1375664");
//     urlencoded.append("RFC", "RIMM760224BW8");
//     urlencoded.append("CODIGO_CLIENTE", "233648");

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: urlencoded,
//         redirect: 'follow'
//     };

//     fetch("https://lisa.rpalumza.com/galileo/lisa/geninf/consulta_factura", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }