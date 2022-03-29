import "./style.css";

function Links({link}) {
  return (
      <div className="Links">
        <>
            {
                link 
                ? (<a href="/">Saiba Mais</a>)
                : (<a href="/">Informações</a>)
            }
        </>
      </div>
  )
}

export default Links;
