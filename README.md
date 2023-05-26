<h1 align="center">
    Rust Online Ecommerce Backend
</h1>

## API Endpoint

- ### `GET` - `/api/products`

  - Response - return all products

  ```json
  [
    {
      "_id": "6470ad64b27dcebd508c46e4",
      "title": "IQOO Neo 7 5G (Frost Blue, 128 GB)  (8 GB RAM)",
      "description": "na",
      "price": 31990,
      "rating": 0,
      "stock": 100,
      "category": "mobiles",
      "images": [],
      "createdAt": "2023-05-26T13:00:20.214Z",
      "updatedAt": "2023-05-26T13:00:20.214Z",
      "__v": 0
    }
  ]
  ```

- ### `GET` - `/api/products/:id`

  - Response - return single products

  ```json
  {
    "_id": "6470ad64b27dcebd508c46e4",
    "title": "IQOO Neo 7 5G (Frost Blue, 128 GB)  (8 GB RAM)",
    "description": "na",
    "price": 31990,
    "rating": 0,
    "stock": 100,
    "category": "mobiles",
    "images": [],
    "createdAt": "2023-05-26T13:00:20.214Z",
    "updatedAt": "2023-05-26T13:00:20.214Z",
    "__v": 0
  }
  ```

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
