const ADD_RECIPE = 'ADD_RECIPE';
const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

const addRecipe = ({day, recipe, meal}) => ({
    type: ADD_RECIPE,
    recipe,
    day,
    meal
});

const removeFromCalendar = ({day, meal}) => ({
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
});

export {ADD_RECIPE, REMOVE_FROM_CALENDAR, addRecipe, removeFromCalendar}