import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonImg } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  // to meet Ionic's requirement for typescript data types
  // set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-srjc-fall-2024-wordpress-sql-php-basics.pantheonsite.io/wp-json/twentytwentyone-child/v1/things/";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)) // react state set function to populate data state var
  },[])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Things</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Things</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="thing-list">
          <IonListHeader>Things</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.thing_description}</p>
                <address>{item.thing_address}</address>
                <IonImg src={item.guid} />
                <p>{item.thing_band}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;