import React from "react";

const Card = () => {
  return (
    <div className="card m-auto bg-base-100 w-80 shadow-lg">
      <figure>
        <img
          src="https://stream.jdmagicbox.com/thumbnail/mp-zvibsoscmt7ywfb-himalaya-fresh-start-oil-clear-lemon-face-wash-50ml-226863378/jd-Ott_720x540_Thumbnail.0000008.jpg"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xl">Himalaya Facewash</h2>
          <div className="avatar shadow-xl">
            <div className="w-13 rounded">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZFdGgyyA09f8QbtgbcrXSZrpLmg5rMcsag&s" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-start items-center">
          <div className="badge badge-sm badge-soft outline badge-success mr-2">
            Personal Care
          </div>
          <div className="badge badge-sm badge-soft outline badge-success mr-2">
            Skincare
          </div>
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
            <p className="font-medium text-sm">₹ 1,000</p>
          </div>
          <div className="card rounded-box grid h-12 grow place-items-center">
            <p className="font-medium text-base text-gray-500">Barter</p>
            <p className="font-medium text-sm">₹ 550</p>
          </div>
          <div className="card rounded-box grid h-12 grow place-items-center">
            <p className="font-medium text-base text-gray-500">Hired</p>
            <p className="font-medium text-sm text-green-500">18/50</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn btn-success text-white w-full">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
