import React, { useContext, useState, useEffect } from 'react'
import axios from "axios"
import { DaftarBuahContext } from './context'

const DaftarBuahForm = () => {
  const [daftarBuah, setDaftarBuah] = useContext(DaftarBuahContext)
  const [input, setInput] = useState({ name: "", price: "", weight: 0 })

  useEffect(() => {
    if (daftarBuah.statusForm === "changeToEdit") {
      let dataBuah = daftarBuah.lists.find(x => x.id === daftarBuah.selectedId)
      setInput({ name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight })
      setDaftarBuah({ ...daftarBuah, statusForm: "edit" })
    }
  }, [daftarBuah])

  const handleChange = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput) {
      case "name":
        {
          setInput({ ...input, name: event.target.value });
          break
        }
      case "price":
        {
          setInput({ ...input, price: event.target.value });
          break
        }
      case "weight":
        {
          setInput({ ...input, weight: event.target.value });
          break
        }
      default:
        { break; }
    }
  }

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault()

    let name = input.name
    let price = input.price.toString()


    if (name.replace(/\s/g, '') !== "" && price.replace(/\s/g, '') !== "") {
      if (daftarBuah.statusForm === "create") {
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: input.name, price: input.price, weight: input.weight })
          .then(res => {
            setDaftarBuah(
              {
                statusForm: "create", selectedId: 0,
                lists: [
                  ...daftarBuah.lists,
                  {
                    id: res.data.id,
                    name: input.name,
                    price: input.price,
                    weight: input.weight
                  }]
              })
          })
      } else if (daftarBuah.statusForm === "edit") {
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${daftarBuah.selectedId}`, { name: input.name, price: input.price, weight: input.weight })
          .then(() => {
            let dataBuah = daftarBuah.lists.find(el => el.id === daftarBuah.selectedId)
            dataBuah.name = input.name
            dataBuah.price = input.price
            dataBuah.weight = input.weight
            setDaftarBuah({ statusForm: "create", selectedId: 0, lists: [...daftarBuah.lists] })
          })
      }

      setInput({ name: "", price: "", weight: 0 })
    }

  }
  return (
    <>
    <div className="Daftarbuah">

      <h1>Form Daftar Harga Buah</h1>

      <form onSubmit={handleSubmit}>
        <label>Nama:</label>
        <input type="text" name="name" value={input.name} onChange={handleChange} />
        <label>Harga:</label>
        <input type="text" name="price" value={input.price} onChange={handleChange} />
        <label>Berat (dalam gram):</label>
        <input type="number" name="weight" value={input.weight} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
    </>
  )
}

export default DaftarBuahForm