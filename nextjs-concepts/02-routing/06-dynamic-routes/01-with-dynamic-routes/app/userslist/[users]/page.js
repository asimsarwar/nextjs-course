"use client";

const User = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1>Info About {params.users}</h1>
      <p>Hello I'm {params.users}</p>
    </div>
  );
};

export default User;
