import React from "react";

const Card = (props) => {
  return (
    <div className="card m-8 bg-base-100 w-90 shadow-lg">
      <figure className="h-50">
        <img
          src={props.cardData.bannerUrl}
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xl">{props.cardData.title}</h2>
          <div className="avatar shadow-xl">
            <div className="w-13 rounded">
              <img src={props.cardData.logoUrl} />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-start items-center">
          {props.cardData.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="badge badge-sm badge-soft outline badge-primary mr-2"
              >
                {tag}
              </div>
            );
          })}
        </div>

        <div className="flex items-center py-2">
          <div className="avatar-group -space-x-2">
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-semibold text-right">
            Applied 867+ Members
          </p>
        </div>

        <div className="flex justify-between items-center w-auto pb-2">
          <div className="card rounded-box grid h-12 grow place-items-center">
            <p className="font-medium text-base text-gray-500">Cash</p>
            <p className="font-medium text-sm">₹ {props.cardData.cash}</p>
          </div>
          <div className="card rounded-box grid h-12 grow place-items-center">
            <p className="font-medium text-base text-gray-500">Barter</p>
            <p className="font-medium text-sm">₹ {props.cardData.barter}</p>
          </div>
          <div className="card rounded-box grid h-12 grow place-items-center">
            <p className="font-medium text-base text-gray-500">Hired</p>
            <p className="font-medium text-sm text-green-500">
              {props.cardData.hired}/{props.cardData.totalRequirement}
            </p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary text-white w-full">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
