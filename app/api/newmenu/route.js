let salads = [];

// ============================= GET =============================

export async function GET(req, res) {
    return new Response(JSON.stringify(salads), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// ============================= POST =============================

export async function POST (req,res) {
    const { name, ingredients, calories } = await req.json()
    const newSalad = {
        id: salads.length + 1,
        name,
        ingredients,
        calories
    }
    salads.push(newSalad)
    return new Response(JSON.stringify(salads), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}