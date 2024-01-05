// schemas/profile.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const user = {
  name: "user",
  title: "User",
  type: "document",
  icon: BiUser,
  fields: [defineField({
    name: "name",
    title: "Name",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "lastName",
    title: "Last Name",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "email",
    title: "Email",
    type: "string",
    validation: (rule) => rule.required().email(),
  }),
  {
    name: "profileImage",
    title: "Profile Image",
    type: "image",
    description: "Upload a profile picture",
    options: { hotspot: true },
    fields: [
      {
        name: "alt",
        title: "Alt",
        type: "string",
      },
    ],
  },
 ],
};

export default user;