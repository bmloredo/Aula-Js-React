import "./style.css";

function Cards({ text }) {
  return (
    <div className="principal">
      <div>
        <h1>{text}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lacus
          tempus, pulvinar risus ut, iaculis libero. Quisque aliquet massa
          lectus, sed tincidunt enim viverra ut. Ut aliquet in sem at faucibus.
          Ut elit ligula, bibendum non cursus vel, facilisis a felis. Nunc sit
          amet blandit dui, gravida fermentum metus. Quisque pharetra, nulla nec
          eleifend aliquam, lacus velit luctus est, eu lacinia elit sem non leo.
          Sed lacinia fringilla nisi id varius. Suspendisse potenti. Quisque
          tempus enim sit amet massa luctus, eu pulvinar lorem mollis. Praesent
          ligula felis, consequat ac nisi vitae, commodo pharetra mi. Ut in sem
          vulputate, sollicitudin dolor pellentesque, porta libero. Praesent
          cursus tempor iaculis.
        </p>
      </div>
    </div>
  );
}

export default Cards;
