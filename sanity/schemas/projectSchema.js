const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "project",
      title: "Project",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Big description",
      type: "string",
    },
    {
      name: "data",
      title: "Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "desc",
              title: "Desc",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alternative text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default project;
