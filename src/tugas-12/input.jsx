import React, { Component } from "react"
import './input.css'


class BuahBuahan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 }
      ],
      inputNama: '',
      inputHarga: '',
      inputBerat: '',
      indexOfForm: -1

    }
    this.handleChangeNama = this.handleChangeNama.bind(this)
    this.handleChangeHarga = this.handleChangeHarga.bind(this)
    this.handleChangeBerat = this.handleChangeBerat.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Input
  handleChangeNama(event) {
    this.setState({ inputNama: event.target.value })
  }
  handleChangeHarga(event) {
    this.setState({ inputHarga: event.target.value })
  }
  handleChangeBerat(event) {
    this.setState({ inputBerat: event.target.value })
  }

  // Edit
  handleEdit = (event) => {
    // console.log(event.target)
    let index = event.target.value;
    let nama = this.state.dataHargaBuah[index].nama;
    let harga = this.state.dataHargaBuah[index].harga;
    let berat = this.state.dataHargaBuah[index].berat;
    // console.log(buah)
    this.setState({
      inputNama: nama,
      inputHarga: harga,
      inputBerat: berat,
      indexOfForm: index
    })
  }

  // Delete
  handleDelete = (event) => {
    // console.log(event.target)
    let index = event.target.value;
    let buah = this.state.dataHargaBuah;
    buah.splice(index, 1)
    // console.log(buah)
    this.setState({
      dataHargaBuah: buah
    })
  }

  // Submit
  handleSubmit(event) {
    event.preventDefault()
    let nama = this.state.inputNama;
    let harga = this.state.inputHarga;
    let berat = this.state.inputBerat;
    let newDaftarBuah = this.state.dataHargaBuah;

    if (this.state.indexOfForm === -1) {
      newDaftarBuah = [...newDaftarBuah, { nama, harga, berat }]
    } else {
      newDaftarBuah[this.state.indexOfForm].nama = this.state.inputNama
      newDaftarBuah[this.state.indexOfForm].harga = this.state.inputHarga
      newDaftarBuah[this.state.indexOfForm].berat = this.state.inputBerat
    }

    this.setState({
      dataHargaBuah: newDaftarBuah,
      inputNama: '',
      inputHarga: '',
      inputBerat: '',
      indexOfForm: -1,
    })
  }

  render() {
    return (
      <>
        <div className="Daftarbuah">
          <h1>Tabel Daftar Buah</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataHargaBuah.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {el.nama} </td>
                    <td> {el.harga}</td>
                    <td> {el.berat / 1000} kg</td>
                    <td>
                      <button style={{ marginRight: '5px' }} onClick={this.handleEdit} value={index} >Edit</button>
                      <button onClick={this.handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <h2>Form Buah-Buahan</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Nama Buah</label>
          <input type="text" required value={this.state.inputNama} onChange={this.handleChangeNama} />
          <label>Harga Buah</label>
          <input type="number" required value={this.state.inputHarga} onChange={this.handleChangeHarga} />
          <label>Berat Buah [dalam gram]</label>
          <input type="number" required value={this.state.inputBerat} onChange={this.handleChangeBerat} /> <br />
          <button>Submit</button>
        </form>
      </>
    )
  }
}
export default BuahBuahan
