const { Schema, model } = require('mongoose');


const userSchema = new Schema (
    {
        username: {
            type: String,
            //TODO unique
            required: true,
            //TODO trimmed
        },
        email: {
            type: String,
            required: true,
            //TODO unique
            //TODO Must match a valid email address (look into Mongoose's matching validation)
        },
        thoughts: {
            //TODO Array of _id values referencing the Thought model
        },
        friends: {
            //TODO Array of _id values referencing the User model (self-reference)
        }
    }

)

//TODO Schema Settings - Create a virtual called friendCount that retrieves the length of the user's friends array field on query.


const User = model('user', userSchema);

module.exports = User;