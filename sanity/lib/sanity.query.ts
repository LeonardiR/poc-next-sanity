// sanity/sanity.query.ts

import { groq } from "next-sanity";
import { client } from "./client";

export async function getUser() {
  return client.fetch(
    groq`*[_type == "user"]{
      _id,
      name,
      lastName,
      email,
      profileImage {alt, "image": asset->url},
    }`
  );
}