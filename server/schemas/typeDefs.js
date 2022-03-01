const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    reviews: Int

}

type Reviews {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    reactions: [Reaction]
}

type Reaction {
_id: ID
reactionBody: String
createdAt: String
username: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String!): [Reviews]
    review(_id: ID!): Reviews
}

type Mutation {
    login(email: String!, password: String!,): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReviews(reviewsId: ID!, reactionBody: String!): Reviews
    addReaction(reviewsId: ID!, reactionBody: String!): Reviews
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;