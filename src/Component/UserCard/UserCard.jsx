import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="">
      <h1 className="w-100  bg-primary bg-opacity-25  text-center fw-medium  p-2">
        USER DETAILS
      </h1>
      <div className=" text-center">
        <img
          src={user?.avatar}
          className=" card-img-top w-25 p-1 rounded-circle"
        />
        <div>
          <p className=" mt-3 mb-4 fw-semibold fs-4">
            @{user?.profile?.username}
          </p>
        </div>
      </div>

      <div className="card-body ">
        <div className="mb-3">
          <textarea
            className="form-control fw-bold bg-secondary bg-opacity-25"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={user.Bio}
            readOnly
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label  fw-semibold"
          >
            Full Name
          </label>
          <input
            type="email"
            className="form-control fw-bold bg-secondary bg-opacity-25"
            id="exampleFormControlInput1"
            placeholder={user.profile.firstName}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label fw-semibold "
          >
            Job Title
          </label>
          <input
            type="email"
            className="form-control fw-bold bg-secondary bg-opacity-25"
            id="exampleFormControlInput1"
            placeholder={user?.jobTitle}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label  fw-semibold"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control  fw-bold bg-secondary bg-opacity-25"
            id="exampleFormControlInput1"
            placeholder={user.profile.email}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
