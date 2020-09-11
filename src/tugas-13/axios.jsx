import React, { useState, useEffect } from "react"
import axios from "axios"
import './input.css'


const BuahBuahan2 = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null)
  const [inputNama, setInputNama] = useState('')
  const [inputHarga, setInputHarga] = useState('')
  const [inputBerat, setInputBerat] = useState('')
  const [selectedID, setSelectedID] = useState(0)
  const [statusForm, setStatusForm] = useState('create')

 
  useEffect(() => {
    if (dataHargaBuah === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDataHargaBuah(res.data.map(el => {
            return {
              id: el.id,
              nama: el.name,
              harga: el.price,
              berat: el.weight
            }
          }))
        })
    }
  }, [dataHargaBuah])


  // Input
  const handleChangeNama = (event) => {
    setInputNama(event.target.value)
  }
  const handleChangeHarga = (event) => {
    setInputHarga(event.target.value)
  }
  const handleChangeBerat = (event) => {
    setInputBerat(event.target.value)
  }

  // Edit
  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value);
    let buah = dataHargaBuah.find(x => x.id === idBuah)
    setInputNama(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
    setSelectedID(idBuah)
    setStatusForm('edit')
  }

  // Delete
  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    let buah = dataHargaBuah.filter(x => x.id !== idBuah)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then(res => {
      })
    setDataHargaBuah([...buah]);
  }

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault()
    let name = inputNama
    let price = inputHarga
    let weight = inputBerat

    if (statusForm === "create") {
      axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name, price: "1000", weight: 2000 })
        .then(res => {
          setDataHargaBuah([...dataHargaBuah, { id: res.data.id, nama: name, harga: price, berat: weight }])
        })
    } else if (statusForm === "edit") {
      axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedID}`, { name, price, weight })
        .then(res => {
          let buah = dataHargaBuah.find(el => el.id === selectedID)
          buah.nama = name
          buah.harga = price
          buah.berat = weight
          setDataHargaBuah([...dataHargaBuah])
        })
    }

    setStatusForm("create")
    setSelectedID(0)
    setInputNama("")
    setInputHarga("")
    setInputBerat("")
  }

  
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
            {
              dataHargaBuah !== null && dataHargaBuah.map((el, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {el.nama} </td>
                    <td> {el.harga}</td>
                    <td> {el.berat / 1000} kg</td>
                    <td>
                      <button style={{ marginRight: '5px' }} onClick={handleEdit} value={el.id} >Edit</button>
                      <button onClick={handleDelete} value={el.id}>Delete</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      
      <div className="Daftarbuah">
        <h2>Form Buah-Buahan</h2>

        <form onSubmit={handleSubmit}>
          <label>Nama Buah</label>
          <input type="text" required value={inputNama} onChange={handleChangeNama} />
          <label>Harga Buah</label>
          <input type="number" required value={inputHarga} onChange={handleChangeHarga} />
          <label>Berat Buah [dalam gram]</label>
          <input type="number" required value={inputBerat} onChange={handleChangeBerat} /> <br/>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}
export default BuahBuahan2