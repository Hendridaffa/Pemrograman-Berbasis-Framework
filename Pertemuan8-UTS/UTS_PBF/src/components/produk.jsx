import React from "react";
import formatRupiah from "./formatUang";

const Produk = (props)=>{
    return(
        <div className="row">
            <div className="col-md-3 text-center">
                <img src={props.gambar} alt="kulkas" width={200} height={180} />
            </div>
            <div className="row konten">
                <div className="col-md-12">
                    <p>
                        ID : {props.id} <br />
                        Nama : {props.nama} <br />
                        Harga : {formatRupiah(props.harga)} <br />
                    </p>
                </div>
                <div className="col-md text-left">
                    <p>
                        Stok : {props.stok} <br />
                    </p>
                    <button className="btn btn-primary" onClick={()=>{props.beli(props)}}>Beli</button>
                </div>
            </div>
        </div>
    )
}

export default Produk;