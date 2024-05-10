# React Redux Cart Page

This project is a React application that implements a shopping cart page using Redux for state management. It allows users to view items in the cart, adjust the quantity of each item, and see the total quantity and amount.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository to your local machine:**
    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm start
    ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.**

## Features

- View items in the cart with per-item price and quantity.
- Increase or decrease the quantity of each item, which automatically updates the total quantity and amount.
- Remove items from the cart.

## Usage

1. **View Cart:** Upon opening the application, you'll see a list of items in the cart. Each item displays its title, description, price, quantity, and subtotal.

2. **Adjust Quantity:** Use the dropdown select menu to adjust the quantity of each item. Changing the quantity will update the subtotal and the total quantity and amount.

3. **Remove Item:** Click the "Remove" button to remove an item from the cart. This will update the total quantity and amount accordingly.

## Project Structure

- `App.js`: Main component containing the cart page layout and functionality.
- `cartSlice.js`: Redux slice defining the initial state and reducers for managing the cart.
- `App.css`: Stylesheet for the cart page layout.

## Dependencies

- React: Frontend library for building user interfaces.
- Redux Toolkit: Toolset for efficient Redux development.
- react-redux: Official React bindings for Redux.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
