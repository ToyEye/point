import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getProjects() {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      project,
      "slug": slug.current,
      data[]{
        name,
        desc,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
      }
    }`
  );
}

export async function getProject(slug) {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      project,
      description,
      "slug": slug.current,
      data[]{
        name,
        desc,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
      }
    }`,
    { slug }
  );
}
