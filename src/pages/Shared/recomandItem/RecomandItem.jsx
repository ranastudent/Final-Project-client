import React from 'react';

const RecomandItem = ({item}) => {
      const {name, image, recipe} = item
      return (
            <div className="card bg-base-100 w-11/12 mx-auto shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{recipe}</p>
              <div className="card-actions">
                <button className="btn btn-primary uppercase">Add to cart</button>
              </div>
            </div>
          </div>
      );
};

export default RecomandItem;