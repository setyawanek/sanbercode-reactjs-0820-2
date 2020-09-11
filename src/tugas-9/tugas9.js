import React from 'react';

class FormBuah extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="form-border">
                    <h2 className="">Form Pembelian Buah</h2>
                    <form action="">
                    <table>
                        <tr>
                        <td className="label">Nama Pelanggan</td>
                        <td><input type="text"/></td>
                        </tr>
                        <tr>
                        <td className="label">Daftar Item</td>
                        <td>
                            <input type="checkbox" id="semangka" name="semangka"/><label for="semangka">Semangka</label><br></br>
                            <input type="checkbox" id="jeruk" name="jeruk"/><label for="jeruk">Jeruk</label><br></br>
                            <input type="checkbox" id="nanas" name="nanas"/><label for="nanas">Nanas</label><br></br>
                            <input type="checkbox" id="salak" name="salak"/><label for="salak">Salak</label><br></br>
                            <input type="checkbox" id="anggur" name="anggur"/><label for="anggur">Anggur</label><br></br>
                        </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit">Kirim</button>
                            </td>
                        </tr>
                    </table>
                    </form>
                </div>
                </div>
        )
    }
}

export default FormBuah