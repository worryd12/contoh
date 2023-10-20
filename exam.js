
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library
const cors = require("cors") // memanggil library cors

//implementasi express
const app = express()//implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/vst/:type/:info1/:info2", (req,res) => 
{
    let soal = req.params.type //untuk request type nya
    let var1 = Number(req.params.info1) //untuk request nomor nya
    let var2 = Number(req.params.info2) //untuk request nomor nya
    let hasil = 0 //setting hasil menjadi nol
    let response

    if (soal === "velocity") 
    {
        hasil = var1/var2
        response = { //hasil dari koding setelah menginputkan nilai
            Soal: "Mencari kecepatan(Velocity) per detik",
            Jarak: var1 + ' meter',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' m/detik',
        }
    }
    else if(soal === "space")
    {
        hasil = var1*var2
        response = {
            Soal: "Mencari Jarak(Space)",
            Kecepatan: var1 + ' m/detik',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' meter',
        }
    }
    else if(soal === "time")
    {
        hasil = var1/var2
        response = {
            Soal: "Mencari Waktu(Time)",
            Jarak: var1 +' Meter',
            Kecepatan: var2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        }
    }else{
    response = "Tipe tidak ada!\n<br>Coba salah satu dari berikut Tipe:[v,s,t]"        
}

res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
