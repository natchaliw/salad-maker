let salads = [
    {
        id: 1,
        name: "SaladMe",
        ingredients: [1, 2]
    }
];

export async function GET(req, { params }) {
    return new Response(JSON.stringify(salads), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST(req, res) {
    const { name, ingredients } = await req.json();
    const newSalad = {
        id: salads.length + 1,
        name,
        ingredients,
    };
    return new Response(JSON.stringify(newSalad), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function PUT(req, res) {
    const { id, updatedName, updatedIngredients } = await req.json();
    salads = salads.map(salad =>
        salad.id === id ? { ...salad, name: updatedName, ingredients: updatedIngredients } : salad
    );
    return new Response(JSON.stringify({ message: 'Salad updated successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function DELETE(req, res) {
    const { id: deleteId } = await req.json();
    salads = salads.filter(salad => salad.id !== deleteId);
    return new Response(null, {
        status: 204,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}