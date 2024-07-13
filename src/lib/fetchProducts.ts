// Making an API call to the dummy data in a server component so its fetched as early as possible. All exception handling occurs when its called 

const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data  = res.json()
    return data
}

export default fetchProducts
