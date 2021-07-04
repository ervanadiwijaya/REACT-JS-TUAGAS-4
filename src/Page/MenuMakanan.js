import React, { Component } from "react";

import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesan: " ",
            jumlah: 0
        };
        this.pilihpesanan = this.pilihpesanan.bind(this);
        this.nasiPadang = this.nasiPadang.bind(this);
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.uduk = this.uduk.bind(this);
        this.kuning = this.kuning.bind(this);
        this.batal = this.batal.bind(this);
    }

    pilihpesanan(value, e) {
        this.setState({ [value]: e.target.value, tampil: true })
    }

    nasiPadang() {
        this.setState({
            pesan: "Nasi Padang",
            jumlah: this.state.jumlah + 1,
            tampil: true
        });
    }

    sate() {
        this.setState({
            pesan: "Sate",
            jumlah: this.state.jumlah + 1,
            tampil: true
        });
    }

    soto() {
        this.setState({
            pesan: "Soto Ayam Lengkap",
            jumlah: this.state.jumlah + 1,
            tampil: true
        });
    }

    uduk() {
        this.setState({
            pesan: "Nasi Uduk",
            jumlah: this.state.jumlah + 1,
            tampil: true
        });
    }

    kuning() {
        this.setState({
            pesan: "Nasi Kuning",
            jumlah: this.state.jumlah + 1,
            tampil: true
        });
    }

    batal() {
        this.setState({
            pesan: "",
            jumlah: 0,
            tampil: true
        });
    }



    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>

                                <center>
                                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                    <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>

                                <center>
                                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>

                                <center>
                                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>

                                <center>
                                    <ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%2520nusantara/nasi%2520kentut.png" />

                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>

                                <center>
                                    <ListMakanan gambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="text" placeholder="Masukan Pesanan Anda" onChange={e => this.pilihpesanan("pesan", e)} />
                <input type="number" placeholder="Jumlah Pesanan" onChange={e => this.pilihpesanan("jumlah", e)} />

                <button onClick={this.batal}>Batalkan Semua Pesanan</button>

                {this.state.tampil === true ? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                    </div>
                ) : (
                    <h1>
                        <center>Anda Belum Memesan</center>
                    </h1>
                )}
            </div>
        )
    }
}
export default MenuMakanan;