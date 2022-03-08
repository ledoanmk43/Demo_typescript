import React from "react";

export type ProfileProps = { nameProps: string };

const Profile = ({ nameProps }: ProfileProps) => {
  return <div>Profile site {nameProps}</div>;
};

export default Profile;
