
export const imageSizesReducer = (imageField) => {
    const assetsBaseUrl = process.env.BACKEND_URL;
    return {
      url: `${assetsBaseUrl}${imageField?.url}`,
      height: imageField?.height, 
      width: imageField?.width,
      contentType: `${imageField?.mime}`,
    };
  };

  export const imageReducer = (imageField) => {
    const assetsBaseUrl = process.env.BACKEND_URL;
    const fields = imageField?.data?.attributes;
    return {
      url: `${assetsBaseUrl}${fields?.url}`,
      alt: `${fields?.caption}`,
      height: fields?.height, 
      width: fields?.width,
      blurhash: `${fields?.blurhash}`,
      b64placeholder: `${fields?.placeholder}`,
      date: Date.parse(fields?.createdAt),
      contentType: `${fields?.mime}`,
      largeimage: imageSizesReducer(fields?.formats?.large),
      smallimage: imageSizesReducer(fields?.formats?.small),
    };
  };

  export const seoReducer = (seoField) => {
    return {
      metatitle: `${seoField?.metaTitle}`,
      metadescription: `${seoField?.metaDescription}`,
      keywords: `${seoField?.keywords}`,
      metarobots: `${seoField?.metaRobots}`,
      metaviewport: `${seoField?.metaViewport}`,
      canonicalurl: `${seoField?.canonicalURL}`,
      structureddata: seoField?.structuredData,
    };
  };
  export const blogsInfoReducer = (rawBlogs) => {
    let bloginfos = { ...rawBlogs?.attributes };
    bloginfos.id = rawBlogs?.id;
    bloginfos.date = bloginfos?.createdat;
    bloginfos.image = imageReducer(bloginfos?.image);
    bloginfos.seo = bloginfos?.seo?.map((se) => {
      return seoReducer(se);
    });
    return bloginfos;
  };

  export const blogsCategoryReducer = (rawBlogs) => {
    let bloginfos = { ...rawBlogs?.attributes };
    bloginfos.id = rawBlogs?.id;
    bloginfos.date = bloginfos?.createdat;
    bloginfos.image = imageReducer(bloginfos?.image);
    bloginfos.seo = bloginfos?.seo?.map((se) => {
      return seoReducer(se);
    });
    return bloginfos;
  };

  export function groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  //GET http://localhost:1337/api/contact-subjects?populate=*