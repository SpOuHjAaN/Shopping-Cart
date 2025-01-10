document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalAmount = document.querySelector('.subtotal-amount');
    const totalAmount = document.querySelector('.total-amount');

    fetch('https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889')
        .then(response => response.json())
        .then(data => {
            let subtotal = 0;
            data.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-details">
                        <h3>${item.title}</h3>
                        <p>Price: ₹${(item.price / 100).toFixed(2)}</p>
                        <input type="number" value="${item.quantity}" min="1" class="item-quantity">
                        <p>Subtotal: ₹${(item.line_price / 100).toFixed(2)}</p>
                        <button class="remove-item">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);

                subtotal += item.line_price;
            });

            subtotalAmount.textContent = `₹${(subtotal / 100).toFixed(2)}`;
            totalAmount.textContent = `₹${(subtotal / 100).toFixed(2)}`;

            document.querySelectorAll('.item-quantity').forEach(input => {
                input.addEventListener('change', updateQuantity);
            });

            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeItem);
            });
        });

    function updateQuantity(event) {
        const input = event.target;
        const itemElement = input.closest('.cart-item');
        const price = parseFloat(itemElement.querySelector('p').textContent.replace('Price: ₹', ''));
        const quantity = parseInt(input.value);
        const subtotalElement = itemElement.querySelector('p:nth-of-type(2)');
        const newSubtotal = price * quantity;

        subtotalElement.textContent = `Subtotal: ₹${newSubtotal.toFixed(2)}`;
        updateTotals();
    }

    function removeItem(event) {
        const button = event.target;
        const itemElement = button.closest('.cart-item');
        itemElement.remove();
        updateTotals();
    }

    function updateTotals() {
        let newSubtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const subtotal = parseFloat(item.querySelector('p:nth-of-type(2)').textContent.replace('Subtotal: ₹', ''));
            newSubtotal += subtotal;
        });

        subtotalAmount.textContent = `₹${newSubtotal.toFixed(2)}`;
        totalAmount.textContent = `₹${newSubtotal.toFixed(2)}`;
    }
});