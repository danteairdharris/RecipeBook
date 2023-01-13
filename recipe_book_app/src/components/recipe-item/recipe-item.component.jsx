import './recipe-item.styles.scss';

const RecipeItem = ({ recipe }) => {
  const { imageUrl, title } = recipe;
  return (
    <div className='recipe-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='recipe-item-info-container'>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default RecipeItem;
