import React from 'react';
import style from './Recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.ingre}>
                {ingredients.map(ingredient => (
                    <ol className={style.ol}>{ingredient.text}</ol>
                ))}
            </ol>
            <p>{calories}</p>
            <img  className={style.image} src={image} alt="" />
        </div>

    );
}

export default Recipe;
