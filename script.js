const dashboardData = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000, 
};

const productsData = [
    { id: 1, name: "Kopi Susu", price: 25000, stock: 50 },
    { id: 2, name: "Kopi Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Kopi V60", price: 30000, stock: 10 },
];

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}