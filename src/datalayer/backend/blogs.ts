import axios from './client';
import qs from 'qs';

import { blogsInfoReducer } from './utils';

const apiUrl = process.env.BACKEND_API_URL;
const endpoint = "blogs";

export const getBlogs = async () => {
    const query = qs.stringify(
      {
        populate: ['seo', 'image'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawBlogs = res.data?.data;
    const blogs = rawBlogs .map((blog) => blogsInfoReducer(blog));
    return blogs;
    //GET http://127.0.0.1:1337/api/termofservices?populate[0]=seo&populate[1]=image
  };


  export const getBlogSlugs = async () => {
    const query = qs.stringify(
      {
        fields: ['slug'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawSlugs = res.data.data;
  
    const slugs = rawSlugs.map((rawSlug) => {
      return rawSlug.attributes.slug;
    });
    return slugs;
  };


  export const getBlogsBySlug = async ({ slug }) => {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ['seo', 'image'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawBlog = res.data.data[0];
    return blogsInfoReducer(rawBlog);
  };