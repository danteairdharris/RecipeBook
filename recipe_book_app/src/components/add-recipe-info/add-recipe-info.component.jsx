
const AddRecipeInfo = () => {
    return (
        <form>
            <div class="row align-items-center">
                <div class="col-2">
                    <label class="col-form-label" for="RecipeInput">Recipe Item</label>
                </div>
                <div class="col">
                    <textarea class="form-control rounded-0" id="RecipeInput" rows="3" value="RecipeItem"></textarea>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary" >Add</button>
                </div>
            </div>
        </form>
        
    );
};

export default AddRecipeInfo;