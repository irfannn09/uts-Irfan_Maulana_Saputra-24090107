function renderProductTable() {
    const tableBody = document.getElementById('productTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = ''; 

    productsData.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.id = `row-${product.id}`; 

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td class="text-right">${formatRupiah(product.price)}</td>
            <td class="text-center">${product.stock}</td>
            <td class="action-cell">
                <button class="action-btn edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete-btn" data-id="${product.id}">
                    <i class="fas fa-trash-alt"></i> Delete
                </button>
            </td>
        `;
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEdit);
    });
}

function handleEdit(event) {
    const id = event.currentTarget.getAttribute('data-id');
    const product = productsData.find(p => p.id == id);
    if (product) {
        alert(`Fungsi Edit untuk produk: ${product.name} (ID: ${id}) akan dikembangkan.`);
    }
}
function handleDelete(event) {
    const id = parseInt(event.currentTarget.getAttribute('data-id'));
    const rowIndex = productsData.findIndex(p => p.id === id);

    if (rowIndex > -1 && confirm("Yakin ingin menghapus produk ini?")) {
        productsData.splice(rowIndex, 1);

       
        const rowElement = document.getElementById(`row-${id}`);
        if (rowElement) {
            rowElement.remove();
        }

     
        renderProductTable();
        alert("Produk berhasil dihapus!");
    }
}


document.addEventListener('DOMContentLoaded', renderProductTable);