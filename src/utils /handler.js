export const handler = (title, props) => {
  if (window.innerWidth <= 500) {
    props.setHeading(<h2 className="page-title-mobile">grab a bottle.</h2>);
    setRemoveMargin(true);
  } else {      
    setHeading(<Header title={title} />)
    setRemoveMargin(false);
   }
}

