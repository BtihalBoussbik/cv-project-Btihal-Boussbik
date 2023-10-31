import './formulaire.css';
export const Formulaire = () => {
    return(
        <div className="container">
           <h1> <em>Welcome</em></h1>
            <form className="mt-5">
                <label className="block" htmlFor="Nom">Nom:</label>
                <input className="border"type="text"name="Nom"id="Nom"placeholder="Entrer votre nom" />
                <br /> <br />
                <label className="block" htmlFor="Prénom">Prénom:</label>
                <input className="border"type="text"name="Prénom"id="Prénom"placeholder="Entrer votre prénom" />
                <br /> <br />
                <label className="block" htmlFor="Age">Age</label>
                <input className="border"type="number"name="Age"id="Age"placeholder="Entrer votre age" />
                <br /> <br />
                <label className="block" htmlFor="Adresse">Adresse:</label>
                <input className="border"type="text"name="Adresse"id="Adresse"placeholder="Entrer votre adresse" />
                <br /> <br />
                <label className="block" htmlFor="E-mail">E-mail:</label>
                <input className="border"type="email"name="E-mail"id="E-mail"placeholder="Entrer votre email" /> <br /> <br />
                <label className="block" htmlFor="Situation familiale">Situation familiale:</label> <br /> <br />
                <label className="block" htmlFor="Célibataire">Célibataire:</label>
                <input className="border"type="radio"name="Célibataire"id="Célibataire"/> 
                <label className="block" htmlFor="Marié">Marié(e):</label>
                <input className="border"type="radio"name="Marié"id="Marié"/><br /><br />
                <label className="block" htmlFor="Numéro de téléphone">Numéro de téléphone:</label>
                <input className="border"type="text"name="Numéro de téléphone"id="Numéro de téléphone"placeholder="Entrer votre numéro de téléphone" /> <br /> <br /> 
                <label className="block" htmlFor="Titre de cv">Titre de cv:</label>
                <input className="border"type="text"name="Titre de cv"id="Titre de cv"placeholder="Entrer votre titre de cv" /> <br /> <br />
                <label className="block" htmlFor="E-mail">E-mail:</label>
                <input className="border"type="email"name="E-mail"id="E-mail"placeholder="Entrer votre email" /> <br /> <br />
                <label><u>Compétences personnelles:</u></label><br /><br />
            <label className="checkbox-container">
                <input type="checkbox" id="Autonomie et esprit d'équipe"/>
                Autonomie et esprit d'équipe
            </label>  <br />
            <label className="checkbox-container">
                <input type="checkbox"id="sens de l'organisation"/>
                Sens de l'organisation
            </label><br />
            <label className="checkbox-container">
                <input type="checkbox"id="Gestion de stress"/>
                Gestion de stress
            </label><br />
            <label className="checkbox-container">
                <input type="checkbox"id="Communication et qualités relationnelles"/>
                Communication et qualités relationnelles
            </label><br />
            <label><u>Compétences techniques:</u></label><br /><br />
            <label className="checkbox-container">
                <input type="checkbox"/>
                Maitrise de la programmation en langages: C,Java,Python
            </label><br />
            <label className="checkbox-container">
                <input type="checkbox"/>
                Maitrise du html,Css,Java-script
            </label><br />
            <label className="checkbox-container">
                <input type="checkbox"/>
                 Maitrise du SQL
            </label>

            </form>
     

        </div>







    );
}