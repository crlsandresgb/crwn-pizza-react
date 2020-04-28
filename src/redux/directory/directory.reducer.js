/**
 * libraries
 */

/**
 * Init data
 */

const INITIAL_STATE = {
  sections: [
    {
      title: "pizza",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 1,
      linkUrl: "shop/pizza",
    },
    {
      title: "pasta",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 2,
      linkUrl: "shop/pasta",
    },
    {
      title: "panini",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      id: 3,
      linkUrl: "shop/panini",
    },
    {
      title: "soup",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      size: "large",
      id: 4,
      linkUrl: "shop/soup",
    },
    {
      title: "fish",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
      size: "large",
      id: 5,
      linkUrl: "shop/fish",
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
