/**
 * libraries
 */

/**
 * Init data
 */

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 2,
      linkUrl: "",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womens",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "mens",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
