import "./style.css";

function Links({link}) {
  return (
      <div className="Links">
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
