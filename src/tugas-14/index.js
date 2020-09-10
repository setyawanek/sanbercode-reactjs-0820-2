import React from "react";
import {DaftarBuahProvider} from "./context"
import DaftarBuahList from "./BuahList"
import DaftarBuahForm from "./BuahForm";



const Buah = () => {
    return(
        <DaftarBuahProvider>
            <DaftarBuahList/>
            <DaftarBuahForm/>
        </DaftarBuahProvider>
    )
}

export default Buah