function test(n: number) {
  // O(n)2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(n);
    }
  }

  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}

`
SOAL OOP ONLINE SHOP

---

DESKRIPSI UMUM

Buatlah sebuah sistem Online Shop sederhana menggunakan Object Oriented Programming (OOP) dengan TypeScript.
Sistem harus memiliki konsep produk, katalog toko, keranjang belanja, dan proses transaksi.

---

1. CLASS PRODUCT (PARENT CLASS)

Buat sebuah class bernama Product dengan ketentuan:

Property:

* name : string
* weight : number
* price : number
* stock : number

Constructor:

* Menerima parameter sesuai dengan property di atas
* Menginisialisasi semua property tersebut

---

2. CLASS BOOK (CHILD CLASS)

Buat class Book yang merupakan turunan dari Product (extends Product).

Property tambahan:

* author : string
* publisher : string

Constructor:

* Gunakan super(...) untuk mengisi property dari Product
* Tambahkan property khusus Book

---

3. CLASS CLOTHING (CHILD CLASS)

Buat class Clothing yang merupakan turunan dari Product (extends Product).

Property tambahan:

* brand : string
* color : string
* size : string
* material : string

Constructor:

* Gunakan super(...)
* Tambahkan property khusus Clothing

---

4. CLASS ONLINE SHOP

Buat class OnlineShop dengan ketentuan berikut:

Property (HARUS PRIVATE):

* products : array yang menyimpan daftar produk (Product[])
* cart : array yang menyimpan produk yang dipilih user

Property tidak boleh diakses langsung dari luar class.

---

METHOD YANG HARUS DIBUAT

1. addProduct(product: Product): string

* Menambahkan produk ke dalam katalog
* Jika produk dengan nama yang sama sudah ada di katalog, kembalikan:
  "Produk sudah ada di toko"
* Jika berhasil, kembalikan:
  "Produk berhasil ditambahkan"

---

2. addToCart(productName: string, quantity: number): string

* Memasukkan produk ke dalam keranjang
* Validasi:

  * Produk harus ada di katalog
  * Stok produk harus mencukupi
* Jika stok tidak mencukupi, tampilkan juga sisa stok
* Jika produk sudah ada di keranjang, tambahkan quantity
* Jika berhasil, kurangi stok produk

---

3. checkout(userMoney: number, distance: number)

* Hitung total belanja berdasarkan isi cart
* Hitung ongkir dengan rumus:
  ongkir = distance * 2000
* Hitung total pembayaran

Validasi:

* distance tidak boleh bernilai negatif
* userMoney tidak boleh kurang dari total pembayaran

Jika transaksi berhasil:

* Kosongkan isi cart
* Tampilkan:

  * total belanja
  * ongkir
  * total pembayaran
  * kembalian

---

4. showCatalog()

* Menampilkan seluruh produk yang ada di katalog toko

---

5. showCart()

* Menampilkan seluruh isi keranjang user

`;

class Product {
  name: string;
  weight: number;
  price: number;
  stock: number;

  constructor(name: string, weight: number, price: number, stock: number) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Book extends Product {
  author: string;
  publisher: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    author: string,
    publisher: string,
  ) {
    super(name, weight, price, stock);
    this.author = author;
    this.publisher = publisher;
  }
}

class Clothing extends Product {
  brand: string;
  color: string;
  size: string;
  material: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    brand: string,
    color: string,
    size: string,
    material: string,
  ) {
    super(name, weight, price, stock);
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.material = material;
  }
}

interface CartItem {
  product: Product;
  quantity: number;
}

class OnlineShop {
  private products: Product[] = [];
  private cart: CartItem[] = [];

  addProduct(product: Product) {
    // cek dulu di products udah ada barangnya atau belom
    const result = this.products.find((p) => p.name === product.name);

    // kalo udah ada return produk sudah ada
    if (result) {
      return "Product sudah ada!";
    }

    // kalo belum ada tambahkan product tsb ke property products
    this.products.push(product);

    // return product berhasil ditambahkan
    return "Produk berhasil ditambahkan!";
  }

  addToCart(productName: string, quantity: number) {
    // cek dulu di catalog ada ga productnya
    const result = this.products.find((p) => p.name === productName);

    // kalo tidak ada return product tidak tersedia
    if (!result) {
      return "Product tidak tersedia";
    }

    // cek dulu stocknya cukup atau tidak kalo tidak cukup return stok tidak mencukupi
    if (result.stock < quantity) {
      return "Stok tidak mencukupi";
    }

    // kalo product nya ada di catalog, coba cek di keranjang, udah ada apa belom
    const cartItem = this.cart.find(
      (item) => item.product.name === productName,
    );

    // kalo udah ada tambahin quantitynya
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      // kalo belom ada masukin productnya ke keranjang
      this.cart.push({ product: result, quantity: quantity });
    }

    // kurangin stock nya
    result.stock -= quantity;

    // return product berhasil ditambahkan ke keranjang.
    return "Product berhasil ditambahkan";
  }

  checkout(userMoney: number, distance: number) {
    // cek dulu distancenya di bawah 0 atau tidak, kalo di bawah 0 langsung return aja
    if (distance < 0) {
      return "Jarak tidak valid";
    }

    // hitung dulu total harga belanja dari property cart
    const totalBelanja = this.cart.reduce(
      (a, b) => a + b.product.price * b.quantity,
      0,
    );

    // hitung shipping cost
    const shippingCost = distance * 2000;

    // hitung total harga + shipping cost
    const totalPayment = totalBelanja + shippingCost;

    // cek uang user nya cukup atau tidak
    if (userMoney < totalPayment) {
      return "Uang tidak cukup";
    }

    // kalo cukup, kosongkan keranjang
    this.cart = [];

    // return data yang sudah di beli
    return {
      message: "Transaksi berhasil",
      totalBelanja,
      shippingCost,
      totalPayment,
      kembalian: userMoney - totalPayment,
    };
  }

  showCatalog() {
    return this.products;
  }

  showCart() {
    return this.cart;
  }
}

const book = new Book("Cara Jago Ngoding", 1, 200_000, 10, "Budi", "PDIP");
const baju = new Clothing(
  "Kaos",
  3,
  400_000,
  20,
  "Banteng Merah",
  "Red",
  "XL",
  "Beton",
);

const onlineShop = new OnlineShop();

console.log(onlineShop.addProduct(book));
console.log(onlineShop.addProduct(baju));
console.log(onlineShop.showCatalog());
console.log(onlineShop.showCart());
console.log(onlineShop.addToCart("Cara Jago Ngoding", 4));
console.log(onlineShop.showCart());
console.log(onlineShop.addToCart("Cara Jago Ngoding", 2));
console.log(onlineShop.showCart());
console.log(onlineShop.addToCart("Kaos", 10));
console.log(onlineShop.showCart());
console.log(onlineShop.checkout(5_300_000, 4));
console.log(onlineShop.showCart());
