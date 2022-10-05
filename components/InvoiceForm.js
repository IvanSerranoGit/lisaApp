import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'

function InvoiceForm() {
    const [invoice, setInvoice] = useState({
        serie: "",
        rfc: "",
        codigo_cliente: 0,
        numero_factura: 0,
    });
    // useEffect(() => {
    //     window
    //     .fetch('api/invoices')
    //     .then((res))
    //     setInvoice()
    // }, [])
    const router = useRouter();
    const handleChange = ({target: {name, value}}) =>
        // console.log(name, value);
        setInvoice({...invoice, [name]: value})
 
        const [invoiceList, setInvoiceList] = useState([])
        const  handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await axios.post('api/invoices', invoice);
        // const respuesta =  res.data.registros.reg[0];
        setInvoiceList(res.data.registros.reg);
        router.push('/'); 
    };


  return (
    <div className="">
        <div>
        {invoiceList.map((factura) => 
            <div key={factura}>
             <p>Sucursal : {factura.sucursal}</p>   
             <p>Ejercicio : {factura.ejercicio}</p>   
             <p>Numero Serie : {factura.numero_serie}</p>   
             <p>Monto Factura : {factura.liquido_factura}</p>   
             <p>RFC : {factura.rfc}</p>   
             <p>Status : {factura.status_firma_digital}</p>   
             <p>Telefono : {factura.telefono}</p>   
             <p>Email : {factura.email}</p>   
            </div>
        )
        }
        </div>

        <form 
            onSubmit={handleSubmit} 
            className=""
        >
            <label htmlFor='serie'>Serie: </label>
            <input 
                type="text" 
                name='serie' 
                onChange={handleChange} 
                className="" 
            />
            <label htmlFor='numero'>N. Factura</label>
            <input 
                type="number" 
                name='numero_factura' 
                onChange={handleChange} 
                className="" 
            />
            <label htmlFor='rfc'>RFC</label>
            <input 
                type="text" 
                name='rfc' 
                onChange={handleChange}
                className="" 
            />
            <label htmlFor='codigo_cliente'>Codigo Cliente</label>
            <input 
                type="number" 
                name='codigo_cliente' 
                onChange={handleChange} 
                className="" 
            />
            <button className="">Envio</button>
        </form>
        {/* {respuesta.map()} */}
    </div>

  )
}

export default InvoiceForm