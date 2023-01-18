const AddIngredientsInfo = () => {
    return (
        <form>
            <div class="row align-items-center">
                <div class="col-2">
                    <label class="col-form-label" for="IngredientInput">Ingredient</label>
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="IngredientInput" />
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    );
};

export default AddIngredientsInfo;