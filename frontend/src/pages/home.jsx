import React from 'react';


const Home =() =>{
    return (
        <div>
            <h1> Benvenue sur le site trouve ton Artisan</h1>

            <form className="d-inline-flex p-2" role="sur l'ensemble du site">
                <input className="form-control me-2" type="search"  placeholder="Rechercher un artisan..."  />
                <button className="btn btn-outline-primary"type="submit">Rechercher</button>
            </form>
            <div>
                <h2>Comment trouver mon artisan ?</h2>
            </div>
            <dl>
                <dt>Etape 1 :</dt>
                <dd>Choisir la catégorie d'artisanat dans le menu</dd>
                <dt>Etape 2 :</dt>
                <dd>Choisir un artisan</dd>
                <dt>Etape 3 :</dt>
                <dd>Contacter l'artisan via le formulaire de contact</dd>
                <dt>Etape 4 :</dt>
                <dd>Une réponse sera apportée sous 48h</dd>
            </dl>
            <div>
                <h2>Les 3 Artisans du mois :</h2>
            </div>
            <div className="card-group">
  <div className="card">
    <img src="/artisan01.jpg" className="card-img-top" alt="artisan 1"></img>
    <div className="card-body">
      <h5 className="card-title">Artisan 1</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/artisan02.jpg" className="card-img-top" alt="artisan 2"></img>
    <div className="card-body">
      <h5 className="card-title">Artisan 2</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/artisan03.jpg" className="card-img-top" alt="artisan 3"></img>
    <div className="card-body">
      <h5 className="card-title">Artisan 3</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </div>
        
        
    )
}

export default Home