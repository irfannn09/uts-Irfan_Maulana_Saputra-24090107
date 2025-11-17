document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('totalProducts')) {
        
        document.getElementById('totalProducts').textContent = dashboardData.totalProducts;
        document.getElementById('totalSales').textContent = dashboardData.totalSales;
        
        document.getElementById('totalRevenue').textContent = formatRupiah(dashboardData.totalRevenue);
    }
});