const API_URL = "https://papa-johns-api.onrender.com"

export const getCategory = async () => {
    const res = await fetch(`${API_URL}/category`)
    const data = await res.json()

    return data
}

export const getKampaniyalar = async () => {
    const res = await fetch(`${API_URL}/kampaniyalar`)
    const data = await res.json()

    return data
}

export const getPapadias = async () => {
    const res = await fetch(`${API_URL}/papadias`)
    const data = await res.json()

    return data
}

export const getPizza = async () => {
    const res = await fetch(`${API_URL}/pizza`)
    const data = await res.json()

    return data
}

export const getLunch = async () => {
    const res = await fetch(`${API_URL}/lunch`)
    const data = await res.json()

    return data
}

export const getSalat = async () => {
    const res = await fetch(`${API_URL}/salat`)
    const data = await res.json()

    return data
}

export const getPasta = async () => {
    const res = await fetch(`${API_URL}/pasta`)
    const data = await res.json()

    return data
}

export const getSouses = async () => {
    const res = await fetch(`${API_URL}/souses`)
    const data = await res.json()

    return data
}

export const getDrink = async () => {
    const res = await fetch(`${API_URL}/drink`)
    const data = await res.json()

    return data
}

export const getDesert = async () => {
    const res = await fetch(`${API_URL}/desert`)
    const data = await res.json()

    return data
}

export const getPizzaParty = async () => {
    const res = await fetch(`${API_URL}/pizzaparty`)
    const data = await res.json()

    return data
}

export const getAddress = async () => {
    const res = await fetch(`https://papa-johns-react.onrender.com/address`)
    const data = await res.json()

    return data
}