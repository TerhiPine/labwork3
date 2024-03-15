import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
'      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact information</IonTitle>
          </IonToolbar>
        </IonHeader><IonContent> <IonCard>
      <IonCardHeader>
        <IonCardTitle>About</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>You can find us here</IonCardContent>
    </IonCard></IonContent>
    <IonContent>
        <IonItem>
            <IonList>
                <IonLabel></IonLabel>
            </IonList>
        </IonItem>'
    </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
