const products = require('./products.json')

console.log(products)
const getProduct = (req, res) => {
    console.log('hit',req.query)
    const item = products.find(val => val.id === parseInt(req.params.id))
    if (!item) {
        return res.status(500).send("Item not in list")
    }
    res.status(200).send(item)
}

module.exports = getProduct