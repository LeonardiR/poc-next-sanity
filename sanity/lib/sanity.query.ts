// sanity/sanity.query.ts

import { groq } from "next-sanity";
import { client } from "./client";

export async function getProperties() {
  return client.fetch(
    groq`*[_type == "property"]{
      _id,
      name,
      address,
      price,
      size,
      bedrooms,
      bathrooms,
      thumb {alt, "image": asset->url},
    }`
  );
}