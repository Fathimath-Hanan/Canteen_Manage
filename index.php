<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canteen Management System</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>

<body>

    <div class="container">
        <h1>Canteen Management System</h1>

        <div class="specials">
            <h2>Today's Specials</h2>

            <?php
            // PHP code to generate specials dynamically
            $specials = [
                ['name' => 'Healthy Salad', 'price' => 149, 'image' => 'salad.jpg'],
                ['name' => 'Fruit Smoothie', 'price' => 79, 'image' => 'smoothie.jpg'],
            ];

            foreach ($specials as $special) {
                echo '<div class="special-item">';
                echo '<h3>' . $special['name'] . '</h3>';
                echo '<p class="price">$' . $special['price'] . '</p>';
                echo '<img src="' . $special['image'] . '" alt="' . $special['name'] . '">';
                echo '<button class="add-to-cart" data-name="' . $special['name'] . '" data-price="' . $special['price'] . '">Add to Cart</button>';
                echo '</div>';
            }
            ?>
        </div>

        <div class="menu-item">
            <h2>Regular Menu</h2>

            <?php
            // PHP code to generate regular menu items dynamically
            $menuItems = [
                ['name' => 'Breakfast Combo', 'price' => 199],
                ['name' => 'Grilled Chicken', 'price' => 599],
                ['name' => 'Biriyani', 'price' => 99],
                ['name' => 'Fried Rice', 'price' => 199],
            ];

            foreach ($menuItems as $menuItem) {
                echo '<div class="dish">';
                echo '<h3>' . $menuItem['name'] . '</h3>';
                echo '<p class="price">$' . $menuItem['price'] . '</p>';
                echo '<button class="add-to-cart" data-name="' . $menuItem['name'] . '" data-price="' . $menuItem['price'] . '">Add to Cart</button>';
                echo '</div>';
            }
            ?>
        </div>

        <div class="cart">
            <h2>Shopping Cart</h2>
            <ul id="cart-items"></ul>
            <p>Total: $<span id="cart-total">0.00</span></p>
            <button id="confirmOrderButton">Confirm Order</button>
        </div>

        <div class="website-info">
            <h2>Kindly Visit Our Website for More Information</h2>
            <p>Here you go: <a href="https://www.example-canteen.com" target="_blank">MEA Canteen</a>.</p>
        </div>
    </div>

</body>

</html>