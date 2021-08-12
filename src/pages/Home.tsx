import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import React from 'react'; 
import { useHistory } from 'react-router-dom';


import './Home.css';


const Home: React.FC = () => {
  const history = useHistory();

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrum 9 Individual Activity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="main-content">
          <p>Scrum 9 of the UWI Talent labs Iternship. This is a simple app to show the potential of Ionic. Checkout the buttons below.</p>
          <IonButton color="primary" onClick={() => history.push('/about-me')}>Learn About me</IonButton> 
          <IonButton color="primary" onClick={() => history.push('/programmes')}>Learn what prograammes are offerd</IonButton> 
        </div>
        
      </IonContent>
    </IonPage>
  ); 
};
 
export default Home;
