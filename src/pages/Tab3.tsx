import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  // to meet Ionic's requirement for typescript data types
  // set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-srjc-fall-2024-wordpress-sql-php-basics.pantheonsite.io/wp-json/twentytwentyone-child/v1/others/";
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
          <IonTitle>Others</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Others</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="other-list">
          <IonListHeader>Others</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.other_description}</p>
                <address>{item.other_address}</address>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;