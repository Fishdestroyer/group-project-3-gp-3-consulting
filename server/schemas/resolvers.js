
const { AuthenticationError } = require('apollo-server-express');
const { User, Reviews } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                .populate('reviews');

                return userData;
            }
            throw new AuthenticationError('Sign in first!')
        },
        users: async () => {
            return User.find()
            .select('-__ -password')
            //.populate('reviews')
            //.populate('reactions');

        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            //.populate('reviews')
           // .populate('reactions');
        },
        reviews: async( parent, { username }) => {
            const params = username ? { username } : {};
            return Reviews.find(params).sort({ createdAt: -1 });

        },
        review: async (parent, { _id }) => {
            return Reviews.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log('In add user');
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('C!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addReviews: async (parent, args, context) => {
            if (context.user) {
                const reviews = await Reviews.create({...args, username: context.user.username});

                await User.findByIdAndUpdate (
                    {_id: context.user._id},
                    { $push: { reviews: reviews._id } },
                    { new: true }
                );
                return reviews;
            }
            throw new AuthenticationError('No no no, you gotta log in!');
        },

        addReaction: async (parent, { reviewId, reactionBody }, context) => {
            if(context.user) {
                const updatedReviews = await Reviews.findOneAndUpdate(
                    { _id: reviewId },
                    { $push: { reactions: { reactionBody, username: context.user.username } } },
                    { new: true, runValidators: true}
                );

                return updatedReviews;
            }
            throw new AuthenticationError('Again with the not logging in?!?!');
        },

        
    }
};

module.exports = resolvers;


