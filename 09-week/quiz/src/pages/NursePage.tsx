import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import PersonForm from '../components/PersonForm';
import FormInput from '../components/FormInput';
import { Nurse } from '../models/Person';

const NursePage: React.FC = () => {
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [currentNurse, setCurrentNurse] = useState<Nurse | undefined>(undefined);

  const handleAddNurse = (newNurse: Nurse) => {
    setNurses([...nurses, newNurse]);
  };

  const handleUpdateNurse = (updatedNurse: Nurse) => {
    setNurses(nurses.map(nurse => 
      nurse.id === updatedNurse.id ? updatedNurse : nurse
    ));
    setCurrentNurse(undefined);
  };

  const handleDeleteNurse = (id: string) => {
    setNurses(nurses.filter(nurse => nurse.id !== id));
    setCurrentNurse(undefined);
  };

  const handleSelectNurse = (nurse: Nurse) => {
    setCurrentNurse(nurse);
  };

  const handleClearForm = () => {
    setCurrentNurse(undefined);
  };

  const nurseAdditionalFields = (nurse: any, onChange: (e: any) => void) => (
    <>
      <FormInput 
        label="Turno asignado"
        name="shift"
        value={nurse.shift || ''}
        onChange={onChange}
      />
      <FormInput 
        label="Área de atención"
        name="careArea"
        value={nurse.careArea || ''}
        onChange={onChange}
      />
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enfermeros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PersonForm
          title="Gestión de Personal Médico"
          initialPerson={currentNurse}
          onAdd={handleAddNurse}
          onUpdate={handleUpdateNurse}
          onDelete={handleDeleteNurse}
          onClear={handleClearForm}
          additionalFields={nurseAdditionalFields(
            currentNurse || { shift: '', careArea: '' },
            (e: any) => {
              const { name, value } = e.target;
              setCurrentNurse(prev => prev ? { ...prev, [name]: value } : undefined);
            }
          )}
        />

        <IonList>
          <IonItem>
            <IonLabel>
              <h2><strong>Nombre</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Turno</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Área</strong></h2>
            </IonLabel>
          </IonItem>
          {nurses.map(nurse => (
            <IonItem key={nurse.id} button onClick={() => handleSelectNurse(nurse)}>
              <IonLabel>{nurse.name} {nurse.lastName}</IonLabel>
              <IonLabel>{nurse.shift}</IonLabel>
              <IonLabel>{nurse.careArea}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NursePage;