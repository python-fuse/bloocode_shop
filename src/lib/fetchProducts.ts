
const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data  = res.json()
    return data
}

export default fetchProducts
