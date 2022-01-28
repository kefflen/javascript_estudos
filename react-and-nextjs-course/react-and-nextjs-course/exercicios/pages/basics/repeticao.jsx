import products from "../../data/products";


export default function repeticao() {
    function renderRows(products) {
        return products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }
    return (
        <table>
            <thead>
                <th>id</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {renderRows(products)}
            </tbody>
        </table>
    )
}