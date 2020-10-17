import PropTypes from 'prop-types';

export const ListTypes = {
  // CSS properties
  // styling: PropTypes.shape({
  //   // The border-color shorthand CSS property sets the color of an element's border.
  //   borderColor: PropTypes.string,
  //   // The border-width shorthand CSS property sets the width of an element's border.
  //   borderWidth: PropTypes.string,
  //   // The border-style shorthand CSS property sets the line style for all four sides of an element's border.
  //   borderStyle: PropTypes.oneOf(types),
  //   // An element's padding area is the space between its content and its border.
  //   padding: PropTypes.string,
  //   // The margin CSS property sets the margin area on all four sides of an element.
  //   margin: PropTypes.string
  // }),
  // Used for passing data in the component
  data: PropTypes.shape({
    // Set query graphql
    queryGraphql: PropTypes.object,
    // Set for value item
    itemValue: PropTypes.shape({
      // Title item, from property response graphql
      title: PropTypes.string,
      // Subtitle item, from property response graphql
      subtitle: PropTypes.string,
      // Avatar Image item, from property response graphql
      avatarImage: PropTypes.string,
      onClick: PropTypes.func
    })
  }),
  /*
   *  An array of the placeholders for child components.
   *  Increase array size to put more items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.string,
    styling: PropTypes.shape({
      // The border-color shorthand CSS property sets the color of an element's border.
      borderColor: PropTypes.string,
      // The border-width shorthand CSS property sets the width of an element's border.
      borderWidth: PropTypes.string,
      // An element's padding area is the space between its content and its border.
      padding: PropTypes.string,
      // The margin CSS property sets the margin area on all four sides of an element.
      margin: PropTypes.string
    }),
  }))
  
};
