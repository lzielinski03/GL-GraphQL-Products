import { ApolloError } from 'apollo-server-errors';

export default ({ extensions }) => {
    const { statusCode, name, message, details } = extensions.response.body.error;
    return new ApolloError(message, statusCode, details);
};
