//Calcular totales de una compra y aplicar descuentos si hay promociones
const compras = [
    {item: "Manzanas", price: 10, quantity: 2, discount: 0.1},
    {item: "Naranjas", price: 5, quantity: 3, discount: 0.05},
    {item: "Peras", price: 8, quantity: 1, discount: 0.15},
    {item: "Uvas", price: 12, quantity: 4, discount: 0.2}
];

let totalCompra = 0;

const calcularTotal = (compra) => {
    // Desestructuramos las propiedades del objeto compra
    const {price, quantity, discount} = compra;
    // Calculamos el subtotal, aplicamos el descuento y sumamos al total de la compra
    const subtotal = price * quantity;
    const totalConDescuento = subtotal - (subtotal * discount);
    totalCompra += totalConDescuento;
}

compras.forEach(calcularTotal);
console.log(`El total de la compra es: $${totalCompra.toFixed(2)}`);