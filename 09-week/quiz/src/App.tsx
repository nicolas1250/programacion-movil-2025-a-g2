import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { medkit, person, briefcase, body } from 'ionicons/icons';

import DoctorPage from './pages/DoctorPage';
import NursePage from './pages/NursePage';
import ReceptionistPage from './pages/ReceptionistPage';
import PatientPage from './pages/PatientPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/doctor">
            <DoctorPage />
          </Route>
          <Route exact path="/nurse">
            <NursePage />
          </Route>
          <Route path="/receptionist">
            <ReceptionistPage />
          </Route>
          <Route path="/patient">
            <PatientPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/doctor" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="doctor" href="/doctor">
            <IonIcon icon={medkit} />
            <IonLabel>Médicos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="nurse" href="/nurse">
            <IonIcon icon={person} />
            <IonLabel>Enfermeros</IonLabel>
          </IonTabButton>
          <IonTabButton tab="receptionist" href="/receptionist">
            <IonIcon icon={briefcase} />
            <IonLabel>Recepcionistas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="patient" href="/patient">
            <IonIcon icon={body} />
            <IonLabel>Pacientes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;