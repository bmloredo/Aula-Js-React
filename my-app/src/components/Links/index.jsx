import "./style.css";

function Links({link}) {
  return (
      <div className="links">
        <>
            {
                link &&
                (<a href="/">Saiba Mais</a>)
            }
        </>
      </div>
  )
}

export default Links;
