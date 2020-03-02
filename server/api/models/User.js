const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            // required: true,
        },
        lastName: {
            type: String,
            // required: true,
        },
        email: {
			type: String,
			required: true,
        },
        password: {
			type: String,
			required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
			default: true,
        },
        userCover: {
            type: String,
			default: null,
        },
        profilePic: {
            type: String,
			default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjGeT-qSvZJgrXe9KvFz-q7Nc20Hh2wo2PZdv2q_BslmXbVtY9A&s",
        },
        location: {
            type: String,
			default: 'pays-bas',
        },
        favoriteContinent: {
            type: String,
			default: null,
        },
        bestScore: {
            type: Number,
			default: 0,
        },
        worstScore: {
            type: Number,
			default: 0,
        },
        points: {
            type: Number,
			default: 0,
        },
        pointsRanking: {
            type: Number,
			default: 0,
        },
        nbOfGames: {
            type: Number,
			default: 0,
        },
        averageScore: {
            type: Number,
            default: 0,
        },
        nbOfGamesRanking: {
            type: Number,
			default: 0,
        },
        masteredGamesNb: {
            type: Number,
			default: 0,
        },
        masteredGamesRanking: {
            type: Number,
			default: 0,
        },
    }
);

module.exports = mongoose.model('User', UserSchema);