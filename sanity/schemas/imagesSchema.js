const images = {
  name: "gallery",
  title: "Images",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "withProject",
      title: "With project",
      type: "string",
    },

    {
      name: "photo",
      title: "Photo",
      type: "image",
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

export default images;
