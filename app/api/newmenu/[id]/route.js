import { NextResponse } from 'next/server';

let salads = []

// ============================= PATCH  =============================

export async function PATCH(req, res) {
    try {
        const { menuId, updateData } = await req.json();

        // ตรวจสอบว่า id, ingredientId, updatedQuantity ถูกส่งมาครบ
        if (!menuId || !Array.isArray(updateData)) {
            return NextResponse.json({ message: 'Bad Request: Missing parameters' }, 
                { status: 400 });
        }

        // อ่านข้อมูล salads จาก localStorage ผ่าน request header
        const saladsJson = req.headers.get("newMenu")
        if (!saladsJson) {
            return NextResponse.json({ message: 'Salads not found in request' }, 
                { status: 404 })
        }

        let salads = JSON.parse(saladsJson)

        // หาเมนูที่ตรงกับ id
        const foundMenu = salads.find(salad => salad.id === parseInt(menuId));
        if (!foundMenu) {
            return NextResponse.json({ message: 'Salad not found' },
                { status: 404 });
        }

        const updatedIngredients = { ...foundMenu.ingredients }

        updateData.forEach(({ ingredientId, quantity }) => {
            if (quantity === 0) {
                delete updatedIngredients[ingredientId]
            } else {
                updatedIngredients[ingredientId] = quantity
            }
        });

        salads = salads.map(salad =>
            salad.id === parseInt(menuId) ? { ...salad, ingredients: updatedIngredients } : salad
        )

        return NextResponse.json({ message: 'Menu updated successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error in PATCH handler:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}

// ============================= DELETE =============================

export async function DELETE(req,res) {
    const { id: deleteId } = await req.json()
    salads = salads.filter(salad => salad.id !== deleteId)
    return NextResponse.json({message: 'Deleted successfully' }, {
        status: 204,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}