// let counter = 0

// while (counter < 10) {
//     console.log(counter)
//     counter++
// }

const PRODUCTS = ["laptop", "bilgisayar", "cüzdan", "meyve", "sebze", "baston"]
const NEW_PRODUCTS = PRODUCTS.filter(item =>item.length > 5)
console.log(NEW_PRODUCTS)

const USERS = [
    {fullName: "Cansu Özden", isactive: false},
    {fullName: "Murat Yılmaz", isactive: true},
    {fullName: "Sezer Ateş", isactive: true},
    {fullName: "Özlem Ateş", isactive: false}
]

const ACTIVE_USERS = USERS.filter(user=> user.isactive)
console.log(ACTIVE_USERS)