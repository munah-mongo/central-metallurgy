import * as backendContactForm from './backend/contact-form';
import * as backendBlogs from './backend/blogs';
import * as backendBlogCategories from './backend/blogs-categories';


let datasource = { ...backendContactForm, ...backendBlogs, ...backendBlogCategories };

export default datasource