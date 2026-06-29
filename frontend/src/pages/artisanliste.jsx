import React, {useEffect, useState} from "react";


const ArtisanListe =() =>{
const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        const fetchArtisans = async () => {
            const response = await fetch("http://localhost:8000/artisan");

            const data = await response.json();

            console.log(data);
        };

        fetchArtisans();
    }, []);
        return (
        <div>
            <h1> Bienvenue sur la page artisan liste</h1>
             {artisans.map((artisan) => (
                <div key={artisan.id}>
                    {artisan.name}
                </div>
            ))}
        </div>
    )
}

export default ArtisanListe