const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your workout"
    },
    duration: {
        type: Number
    },
    exercises: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;