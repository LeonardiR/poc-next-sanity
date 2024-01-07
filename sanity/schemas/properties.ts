// schemas/profile.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const property = {
  name: "property",
  title: "Property",
  type: "document",
  icon: BiUser,
  fields: [defineField({
    name: "name",
    title: "Name",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "address",
    title: "Address",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "price",
    title: "Price",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "size",
    title: "Size",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "bedrooms",
    title: "Bedrooms",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "bathrooms",
    title: "Bathrooms",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  {
    name: "thumb",
    title: "Thumbnail image",
    type: "image",
    description: "Upload a preview image property",
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

export default property;