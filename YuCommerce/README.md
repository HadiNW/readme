# Yu Commerce

![alt text](yucommerce.png "yu coommerce") 

## Summary 
Yu Commerce adalah salah satu anak perusahaan dari Yudhistira Group yang bergerak di bidang Marketplace, yaitu tempat pertemuan antara Merchant dan Buyer berTransaksi 

## Release 0

YuCommerce memiliki data - data yang tercatat di dalamnya seperti 
- name 
- merchants , yaitu data - data merchants yang register
- buyers , yaitu data - data buyers yang register 

karena bergerak dibidang marketplace, maka Yu Commerce memiliki data merchant dan data buyer. berikut detail nya : 

Merchant 
- id , random dari angka 1000 sampai 3000
- merchant_name ( nama toko ) 
- email
- products
- products_limit , jenis product nya, bukan stock nya 
- revenue , adalah hasil penjualan dari product
- membership (Platinum, Gold, Silver)

Buyer
- id, random dari angka 3001 sampai 5000
- name
- email
- orders 

saat Merchant membuka toko di Yucommerce, merchant diharuskan membayar fee registration sesuai dengan jenis layanan yang di dapatkan oleh Merchant nantinya , karena setiap layanan memiliki beberapa perbedaan

Platinum 
- products_limit = 15
- fee_registration = 2000000

Gold 
- products_limit = 10
- fee_registration = 1500000

Silver 
- products_limit = 5
- fee_registration = 5000000
  
setiap Merchant yang mendaftar di YuCommerce tercatat di dalam data merchants dan setiap Buyer yang mendaftar di YuCommerce tercatat dalam data buyers. 

setiap merchant juga dapat menambahkan Product yang akan dijualnya , berikut detail data Product : 
- id, random dari angka 5001 sampai 7000
- name 
- category
- price
- stock
- discount 
- date -> tanggal product di daftarkan, format Y-m-d 

setiap Buyer dapat membeli Product yang telah di jual Merchant yang nantinya tercatat di orders milik Buyer sebagai OrderItem
berikut detail data OrderItem : 
- id , random dari angka 7001 sampai 9000
- id product, yang dipilih oleh buyer 
- name product
- qty
- price
- total

**Buatlah Class , properties dan method yang sekiranya diperlukan berdasarkan case diatas**

## Release 1 - Register Merchant and Buyer 
**syarat**
> merchant
> - name merchant tidak boleh sama dengan yang sudah ada 
> - email tidak boleh sama dengan yang sudah ada 
> - email harus valid
> - merchant harus membayar sesuai dengan fee registration masing - masing layanan

> buyer
> - email harus valid
> - email tidak boleh sama 

```javascript

let dimaPros = new Platinum("Dima Pros ","dimapros@hotmail.com","platinum",2000000) 

yuco.registerMerchant(dimaPros) 
/*
    dimana 
    Dima Pros adalah nama toko
    email 
    platinum adalah type layanan
    2000000 adalah fee_registration yang harus dibayar merchant untuk membuka toko
*/ 

yuco.registerBuyer(kosasihKempet)

// tambahkan test case lain bila diperlukan
```

**check apakah sudah terdaftar ?**
```javascript

   console.log(yuco.merchants)
   /*
   [
       Platinum{id:...,name:"Dima Pros",...}
   ]
   */
  console.log(yuco.buyers)
  /*
   [
       Buyer{id:...,"Kosasih Kemper",...}
   ]
  */
```

## Release 2 - Merchant menambahkan Product 
**syarat**
> - price dan stock harus angka , dan tidak boleh minus, serta real
> - jumlah product yang di tambahkan tidak boleh melebihi product_limits masing- masing layanan

```javascript

dimaPros.addProduct(productObj1)

```
**check apakah product sudah masuk di products ?**
```javascript

console.log(dimaPros.products)
/*
[
    Product{id:...,name:"Asus GTX Pro 2000",..}
]
*/

// tambahkan test case lain bila di perlukan 
```
## Release 3 - Buyer Membeli Product dari merchant 
**syarat**
> - qty yg di order Buyer tidak boleh melebihi stock product
> - total pada OrderItem adalah price * qty
> - Product yang telah dibeli otomatis stocknya berkurang sesuai dengan qty yang dipesan Buyer

```javascript 

kosasihKempet.buy(productObj1 ,3)
// dimana productObj adalah data Product yang ingin dibeli
// 3 adalah qty nya 

```

**Check apakah order sudah tercatat?**
```javascript

console.log(kosasihKempet.orders)
/*[
    OrderItem{id:..,qty:3,...}
]*/

```
