import axios from './client';
import qs from 'qs';

import { blogsCategoryReducer } from './utils';

const apiUrl = process.env.BACKEND_API_URL;
const endpoint = "blogscategories";

export const getBlogsCategories = async () => {
    const query = qs.stringify(
      {
        populate: ['seo', 'image'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawBlogsCategories = res.data?.data;
    const blogscategories = rawBlogsCategories .map((blogcategory) => blogsCategoryReducer(blogcategory));
    return blogscategories;
    //GET http://127.0.0.1:1337/api/termofservices?populate[0]=seo&populate[1]=image
  };


  export const getBlogCategories = async () => {
    const query = qs.stringify(
      {
        fields: ['slug'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawCategories = res.data.data;
  
    const categories = rawCategories.map((rawCategory) => {
      return rawCategory.attributes.category;
    });
    return categories;
  };


  export const getBlogsByCategory = async ({ category }) => {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: category,
          },
        },
        populate: ['seo', 'image'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}${endpoint}?${query}`);
    const rawCategory = res.data.data[0];
    return blogsCategoryReducer(rawCategory);
  };

  //new