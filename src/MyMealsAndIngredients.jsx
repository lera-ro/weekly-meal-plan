const MyMealsAndIngredients = ({selectedDay, updateDay}) => {
    const editMeal = (myInput, value) => {
            updateDay({...selectedDay, [myInput]: value
            })   
    }
    
    if (!selectedDay) return <p className="header">Plan your week ahead of time!</p>

    return (<div className="whole-plan">
    <input 
        type="text"
        className="myInput" 
        placeholder="Today is..."
        id="title"
        value={selectedDay.title}
        onChange={(e) => editMeal("title", e.target.value)}
    />
    <textarea 
        placeholder="Write your meal plan here"
        id="mealForADay"
        value={selectedDay.mealForADay}
        onChange={(e) => editMeal("mealForADay", e.target.value)}
    />
    <textarea 
        placeholder="List of ingredients"
        id="mealForADay"
        value={selectedDay.ingredients}
        onChange={(e) => editMeal("ingredients", e.target.value)}
    />
    </div>
    )
}
export default MyMealsAndIngredients;