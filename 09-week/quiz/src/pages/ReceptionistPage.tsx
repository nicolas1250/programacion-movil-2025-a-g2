import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import PersonForm from '../components/PersonForm';
import FormInput from '../components/FormInput';
import { Receptionist } from '../models/Person';

const ReceptionistPage: React.FC = () => {
  const [receptionists, setReceptionists] = useState<Receptionist[]>([]);
  const [currentReceptionist, setCurrentReceptionist] = useState<Receptionist | undefined>(undefined);

  const handleAddReceptionist = (newReceptionist: Receptionist) => {
    setReceptionists([...receptionists, newReceptionist]);
  };

  const handleUpdateReceptionist = (updatedReceptionist: Receptionist) => {
    setReceptionists(receptionists.map(receptionist => 
      receptionist.id === updatedReceptionist.id ? updatedReceptionist : receptionist
    ));
    setCurrentReceptionist(undefined);
  };

  const handleDeleteReceptionist = (id: string) => {
    setReceptionists(receptionists.filter(receptionist => receptionist.id !== id));
    setCurrentReceptionist(undefined);
  };

  const handleSelectReceptionist = (receptionist: Receptionist) => {
    setCurrentReceptionist(receptionist);
  };

  const handleClearForm = () => {
    setCurrentReceptionist(undefined);
  };

  const receptionistAdditionalFields = (receptionist: any, onChange: (e: any) => void) => (
    <>
      <FormInput 
        label="Horario laboral"
        name="workSchedule"
        value={receptionist.workSchedule || ''}
        onChange={onChange}
      />
      <FormInput 
        label="Extensión telefónica"
        name="phoneExtension"
        value={receptionist.phoneExtension || ''}
        onChange={onChange}
      />
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recepcionistas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PersonForm
          title="Gestión de Personal Médico"
          initialPerson={currentReceptionist}
          onAdd={handleAddReceptionist}
          onUpdate={handleUpdateReceptionist}
          onDelete={handleDeleteReceptionist}
          onClear={handleClearForm}
          additionalFields={receptionistAdditionalFields(
            currentReceptionist || { workSchedule: '', phoneExtension: '' },
            (e: any) => {
              const { name, value } = e.target;
              setCurrentReceptionist(prev => prev ? { ...prev, [name]: value } : undefined);
            }
          )}
        />

        <IonList>
          <IonItem>
            <IonLabel>
              <h2><strong>Nombre</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Horario</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Ext.</strong></h2>
            </IonLabel>
          </IonItem>
          {receptionists.map(receptionist => (
            <IonItem key={receptionist.id} button onClick={() => handleSelectReceptionist(receptionist)}>
              <IonLabel>{receptionist.name} {receptionist.lastName}</IonLabel>
              <IonLabel>{receptionist.workSchedule}</IonLabel>
              <IonLabel>{receptionist.phoneExtension}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ReceptionistPage;