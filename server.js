import { ApolloServer, gql } from 'apollo-server';
import { GlProductsAPI, GlCommentsAPI, GlCustomersAPI } from './resolvers'

const typeDefs = gql`

    scalar Date

    type DateC {
        created: Date
    }

    type Product {
        id: Int!,
        name: String!,
        price: Int!,
        rating: Int,
        description: String!,
        date: DateC,
        customer: Customer!,
        comments: [Comment]
    }

    type Comment {
        id: Int!,
        date: DateC!,
        body: String!,
        product: Product!,
        customer: Customer!
    }

    type Customer {
        id: Int!,
        username: String!,
		email: String!,
		emailVerified: Boolean,
		products: [Product],
		comments: [Comment]
    }

    type Query {
        getProduct(id: Int!): Product
        getProducts: [Product],
		getProductComments(id: Int!): [Comment],
		getProductCustomer(id: Int!): Customer,
		
        getCustomers: [Customer],
        getCustomer(id: Int!): Customer,
    }

    type Mutation {
        addCustomer(username: String!, email: String!, password: String!): Customer,
        addProduct(name: String!, price: Int!, description: String!, customerId: Int!): Product,
        addComment(body: String!, productId: Int!, customerId: Int!): Comment,
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`;

const resolvers = {
	Query: {
		getProduct: (root, { id }, { dataSources }) => dataSources.glProductsAPI.getProduct(id),
		getProducts: (root, args, { dataSources }) => dataSources.glProductsAPI.getProducts(),
		getProductComments: (root, { id }, { dataSources }) => dataSources.glProductsAPI.getProductComments(id),
		getProductCustomer: (root, { id }, { dataSources }) => dataSources.glProductsAPI.getProductCustomer(id),

		getCustomers: (root, args, { dataSources }) => dataSources.glCustomersAPI.getCustomers(),
		getCustomer: (root, { id }, { dataSources }) => dataSources.glCustomersAPI.getCustomer(id),
    },
    Mutation: {
        addCustomer: (root, customer, { dataSources }) => dataSources.glCustomersAPI.postCustomer(customer),
        addProduct: (root, product, { dataSources }) => dataSources.glProductsAPI.postProduct(product),
        addComment: (root, comment, { dataSources }) => dataSources.glProductsAPI.postProductComment(comment),
    },
	Product: {
		customer: ({ id }, arg, { dataSources }) => dataSources.glCustomersAPI.getCustomer(id),
		comments: ({ id }, arg, { dataSources }) => dataSources.glProductsAPI.getProductComments(id)
	},
	Customer: {
		products: ({ id }, arg, { dataSources }) => dataSources.glCustomersAPI.getCustomerProducts(id),
		comments: ({ id }, arg, { dataSources }) => dataSources.glCustomersAPI.getCustomerComments(id)
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		glProductsAPI: new GlProductsAPI(),
		glCommentsAPI: new GlCommentsAPI(),
		glCustomersAPI: new GlCustomersAPI(),
    })
});

server.listen(3001).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
