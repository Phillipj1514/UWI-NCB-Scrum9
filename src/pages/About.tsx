import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton} from '@ionic/react';
import React from 'react'; 
import { useHistory } from 'react-router';

import testimage from '../images/me-au-de-bico.ae23ef92.jpeg';



import './about.css';

const About: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle >About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
          <div className="main-content">
            <IonCard className="card">
                <img src={testimage} />
                <IonCardHeader>
                    <IonCardTitle>Phillip Llewellyn</IonCardTitle>
                    <IonCardSubtitle>Software Developer</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    I believe that you should never be afraid to take on challenges, but at the same time, be smart about how you do it. I always try my best to embrace technologies and its potential to change the world. I try to be innovative, secure, creative, relevant and social in all that I do. I work on software for robots and humans. lol.
                </IonCardContent>
            </IonCard>      
          </div>  
          <IonButton color="primary" onClick={() => history.push('/')}>Go Back Home</IonButton> 
      </IonContent>
    </IonPage>
  );  
};

export default About;
