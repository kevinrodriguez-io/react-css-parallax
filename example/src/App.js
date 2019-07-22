import React, { Fragment, useState } from 'react'
import Parallax from 'react-css-parallax'

import bridge from './images/bridge.jpg';
import window from './images/window.jpg';

const styles = {
  centeredSection80PercentWidth: {
    display: 'grid',
    placeContent: 'center',
    width: '80%',
    height: '100%',
    position: 'absolute',
    marginLeft: '10%',
  },
  title: { 
    color: 'white', 
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  caption: { 
    color: 'white'
  },
  pa1em: {
    padding: '1em 1em 1em 1em'
  },
};

export default () => {
  const [ isSecondContainerFixed, setIsSecondContainerFixed ] = useState(true);
  return (
    <Fragment>
      <Parallax src={bridge} alt="A bridge" height="100vh">
        <section style={styles.centeredSection80PercentWidth}>
          <h1 style={styles.title}>Hello, parallax world</h1>
          <p style={styles.caption}>
            Bacon ipsum dolor amet brisket alcatra ham tail shank porchetta pig. Cupim strip steak shankle andouille ham flank tongue doner venison landjaeger meatloaf beef ribs jerky boudin prosciutto. Tongue meatball burgdoggen, cow pork loin picanha kielbasa fatback t-bone corned beef sirloin short loin ribeye drumstick frankfurter. Shankle pig ham hock pancetta pork loin turducken. Sausage pork drumstick biltong, tenderloin brisket pancetta leberkas tri-tip shankle flank. Meatball doner venison ball tip biltong, kielbasa pork belly landjaeger frankfurter pancetta. Ground round ball tip frankfurter, ribeye fatback pork loin chuck landjaeger.
          </p>
        </section>
      </Parallax>
      <section style={styles.pa1em}>
        <h2>This is a text section</h2>
        <p>
          Ham drumstick frankfurter rump pork belly pork kevin strip steak jerky tri-tip pancetta sausage. Shoulder sausage short ribs spare ribs andouille flank. Pancetta kielbasa rump, t-bone salami ground round turducken chicken porchetta frankfurter andouille prosciutto fatback drumstick pastrami. Short ribs porchetta shankle, hamburger biltong ball tip ground round strip steak.
        </p>
        <p>
          Porchetta meatloaf venison kielbasa, picanha hamburger andouille frankfurter. Shankle jowl turducken tail sausage, hamburger sirloin ribeye pancetta tenderloin chicken pork belly biltong. Tongue drumstick pig, tail kielbasa shoulder burgdoggen. Kevin chuck kielbasa, short ribs cow capicola brisket meatball prosciutto cupim frankfurter pork belly pork loin turducken. Prosciutto pastrami beef ribs salami shoulder, ball tip turducken short loin cupim pork chop meatloaf frankfurter picanha.
        </p>
        <p>
          Shankle tail strip steak shoulder spare ribs pig sausage ham hock ribeye venison frankfurter doner capicola rump andouille. T-bone turducken shankle, burgdoggen turkey ground round frankfurter spare ribs pancetta pork chop landjaeger chuck jowl tongue. Jowl venison leberkas brisket capicola boudin shank pork loin burgdoggen pork shankle andouille pork belly chuck prosciutto. Leberkas pork frankfurter, rump turkey pancetta doner kielbasa picanha corned beef ball tip spare ribs drumstick pork loin. Sirloin shank pancetta rump, landjaeger alcatra tail ribeye fatback salami.
        </p>
      </section>
      <Parallax src={window} alt="A house" height="400px" fixed={isSecondContainerFixed}>
        <section style={styles.centeredSection80PercentWidth}>
          <h1 style={styles.title}>This one is {!isSecondContainerFixed && 'NOT'} fixed</h1>
          <button 
            type="button"
            onClick={() => { setIsSecondContainerFixed(!isSecondContainerFixed); }}
          >
            Toggle Parallax
          </button>
        </section>
      </Parallax>
      <section style={styles.pa1em}>
        <h2>
          This is another text section
        </h2>
        <p>
          Kielbasa short ribs pork loin, ground round filet mignon bresaola pancetta cupim burgdoggen pork belly beef ribs. Beef tenderloin hamburger shoulder boudin strip steak pork chop t-bone shank meatloaf doner beef ribs biltong. Landjaeger shoulder ham hock strip steak, porchetta capicola pig bacon bresaola pork chop venison pastrami tail salami. Turkey pork loin tenderloin spare ribs picanha, burgdoggen chicken filet mignon.
        </p>
        <p>
          Capicola short loin sausage, bresaola tail drumstick prosciutto pig turducken. Ham frankfurter t-bone, tenderloin sirloin meatball picanha kevin landjaeger corned beef pastrami ribeye pork chop swine shankle. Biltong bacon kielbasa ham chicken ham hock tongue pork belly cupim venison turkey pork. Fatback meatball capicola pork chop, strip steak flank kevin turkey short loin salami. Chuck beef ribs cow shank pork loin, tenderloin alcatra tongue filet mignon leberkas sausage. Turkey frankfurter short loin meatloaf venison.
        </p>
        <p>
        Frankfurter corned beef strip steak, salami jerky meatball doner. Andouille sausage t-bone turkey biltong cow rump flank fatback sirloin capicola buffalo kevin swine. Tail strip steak cupim salami prosciutto doner turkey rump beef short ribs hamburger boudin. Pork loin short ribs buffalo pork burgdoggen pig. Shoulder cow burgdoggen pork shankle kevin corned beef turducken pork chop. Ham hock landjaeger sirloin biltong leberkas andouille prosciutto chicken porchetta.
        </p>
        <p>
          Doner alcatra ribeye andouille ball tip, jowl short loin short ribs beef jerky tri-tip shankle shoulder. Shoulder ham hock pig kevin ribeye turducken pork loin corned beef pork shankle tongue. Strip steak turkey venison jowl boudin. Ham biltong short ribs short loin, sausage ribeye turkey landjaeger ham hock tail beef ribs beef burgdoggen chuck. Tongue ribeye buffalo filet mignon pig, tri-tip bresaola cupim kielbasa jowl chicken pastrami pancetta beef pork chop.
        </p>
        <p>
          Kielbasa chicken pork loin chuck porchetta flank beef ribs. Tail biltong swine, flank filet mignon hamburger sausage shank meatloaf turkey. Sausage tenderloin tail, leberkas drumstick turducken short ribs pig biltong cow. Brisket pork chop jerky sirloin hamburger shankle pig porchetta picanha shoulder ground round tail ham chicken.
        </p>
      </section>
    </Fragment>
  );
};