import Header from './Header.tsx'
import ObjectifProfessionnel from '../component/ObjectifProfessionnel.tsx'
import FormationEtDiplome from '../component/FormationEtDiplome.tsx'
import CompétencesTechniques from '../component/CompétencesTechniques.tsx'
import CompétencesLinguistiques from '../component/CompétencesLinguistiques.tsx'
import CompétencesPersonnelles from '../component/CompétencesPersonnelles.tsx'
import Loisirs from '../component/Loisirs.tsx'
import Footer from './Footer.tsx'
function Home ()  {
    return (
      <div className='body'>
      <Header/>
      <hr />
      <ObjectifProfessionnel/>
      <hr />
      <FormationEtDiplome/>
      <hr />
      <CompétencesTechniques/>
      <hr />
      <CompétencesLinguistiques/>
      <hr />
      <CompétencesPersonnelles/>
      <hr />
      <Loisirs/>
      <hr />
      <br />
      <br />
      <br />
      <Footer/>
      </div>
    );
  } 
export default Home
 
  