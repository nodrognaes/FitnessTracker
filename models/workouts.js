const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your workout"
    },
    duration: {
        type: String,
        trim: true,
        required: "Enter the total number of minutes exercised"
    },
    exercises: {
        type: Number,
        required: "Enter the number of exercised performed"
    },
    sets: {
        type: Number,
        required: "Enter the number of sets"
    },
    reps: {
        type: Number,
        required: "Enter the number of reps"
    },
    weight: {
        type: Number,
        required: "Enter the amount of weight used"
    },
    distance: {
        type: Number,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;