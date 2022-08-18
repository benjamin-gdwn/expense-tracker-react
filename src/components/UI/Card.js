import "./Card.css";
// this function is a reusable wrapper to provide rounded borders to each component
const Card = (props) => {
  // variable to store the dynamic classes
  const classes = "card " + props.className;
  // create custom component which will wrap around expenseItems and share similar css
  return <div className={classes}>{props.children}</div>;
}

export default Card;
