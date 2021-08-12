import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react'; 
import { useHistory } from 'react-router';
import './programmes.css';


const Programmes: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle >Programmes</IonTitle>
    
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
          <div className="main-content">
              <IonList>
                <IonItem>
                    <IonLabel>BSC. General</IonLabel>
                </IonItem>
                <IonItem>
                    <IonList>
                        <IonItem>
                            <IonLabel>1. Computer Science Major</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>2. Software Engineering Major</IonLabel>
                        </IonItem>
                    </IonList>
                </IonItem>
                <IonItem>
                    <IonLabel>BSc Information Technology </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>BSc Computer Studies Option</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>BSc. Software Engineering (Mobile Application Technologies)</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Minors are Offered as Follows:</IonLabel>
                </IonItem>
                <IonItem>
                    <IonList>
                        <IonItem>
                            <IonLabel>1. Minor in Computer Science</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>2. Minor in Software Engineering</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>3. Minor in Information Technology</IonLabel>
                        </IonItem>
                    </IonList>
                </IonItem>
            </IonList>     
          </div> 
          <IonButton color="primary" onClick={() => history.push('/')}>Go Back Home</IonButton> 
      </IonContent>
    </IonPage>
  );  
};

export default Programmes;
