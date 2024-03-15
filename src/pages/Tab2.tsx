import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small" color="primary">Nothing Big</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent> <IonCard>
      <IonCardHeader>
        <IonCardTitle>About</IonCardTitle>
        <IonCardSubtitle>What is this all</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This is small "hello world"-ish web app for school.</IonCardContent>
    </IonCard></IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;