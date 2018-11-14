# GL-GraphQL-Products

# Write your query or mutation here
query ProductsList {
  ProductsList: getProducts {
    ...lightProduct
  }
}

query Product($productId: Int!) {
  Product: getProduct(id: $productId) {
     ...fullProduct
  }
}

query CustomerList {
  CustomerList: getCustomers {
    ...lightCustomer
  }
}

query Customer($customerId: Int!) {
  Customer: getCustomer(id: $customerId) {
    ...fullCustomer
  }
}

mutation CreateCustomer($username: String!, $email: String!, $password: String!) {
  CreateCustomer: addCustomer(username: $username, email: $email, password: $password) {
    ...lightCustomer
  }
}

mutation CreateProduct($name: String!, $price: Int!, $description: String!, $customerId: Int!) {
  NewProduct: addProduct(name: $name, price: $price, description: $description, customerId: $customerId) {
    ...fullProduct
  }
}

mutation createComment($body: String!, $productId: Int!, $customerId: Int!) {
  NewComment: addComment(body: $body, productId: $productId, customerId: $customerId) {
    ...lightComment
  }
}

fragment lightProduct on Product {
  id
  name
  description
  price
  rating
  date {
    created
  }
}

fragment fullProduct on Product {
  ...lightProduct
  comments {
    ...lightComment
  }
  customer {
    ...lightCustomer
  }
}

fragment lightComment on Comment {
  id

  body
}

fragment lightCustomer on Customer {
  id
  username
  email
}

fragment fullCustomer on Customer {
  ...lightCustomer
  emailVerified
  products {
    ...lightProduct
  }
  comments {
    ...lightComment
  }
}
