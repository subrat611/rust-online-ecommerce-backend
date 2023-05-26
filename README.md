<h1 align="center">
    Rust Online Ecommerce Backend
</h1>

## API Endpoint

- ### `POST` - `/api/products`
- (payload) body -> raw -> json

  > Note: `productImage - base64 string`

  ```json
  {
    "title": "String",
    "description": "String",
    "price": "Number",
    "rating": "Number",
    "stock": "Number",
    "category": "String",
    "productImage1": "String",
    "productImage2": "String",
    "productImage3": "String"
  }
  ```

- Response
  ```json
  {
    "message": "product added",
    "id": "product_id"
  }
  ```
