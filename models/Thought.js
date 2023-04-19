// const { Schema, model, Types } = require('mongoose');



// const thoughtSchema = new Schema (
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             minLength: 1,
//             maxLength: 280,
//         },

//         createdAt: {
//             type: Date,
//             default: Date.now,
//             // Use a getter method to format the timestamp on query
//             get: (timestamp) => {
//                 return new Date(timestamp).toLocaleString();
//             }
//         },

//         username: {
//             type: String,
//             required: true,
//         },

//         reactions: [reactionSchema] // array of nested documents created with the reactionSchema
//     },
//     {
//       toJSON: { virtuals: true }, // enable virtual fields when toJSON is called
//       toObject: { virtuals: true } // enable virtual fields when toObject is called
//     }
// );

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// const Thought = model('thought', thoughtSchema);

// module.exports = Thought;
const Reactions = require('./Reactions')
const { Schema, model, Types } = require('mongoose');


const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: (timestamp) => {
                return new Date(timestamp).toLocaleString();
            }
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [Reactions], // array of nested documents created with the reactionSchema
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

thoughtSchema.virtual('reactionCount')
.get(function() {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
