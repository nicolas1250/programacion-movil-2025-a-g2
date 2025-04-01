import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import PersonForm from '../components/PersonForm';
import FormInput from '../components/FormInput';
import { Patient } from '../models/Person';

const PatientPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentPatient, setCurrentPatient] = useState<Patient | undefined>(undefined);

  const handleAddPatient = (newPatient: Patient) => {
    setPatients([...patients, newPatient]);
  };

  const handleUpdatePatient = (updatedPatient: Patient) => {
    setPatients(patients.map(patient => 
      patient.id === updatedPatient.id ? updatedPatient : patient
    ));
    setCurrentPatient(undefined);
  };

  const handleDeletePatient = (id: string) => {
    setPatients(patients.filter(patient => patient.id !== id));
    setCurrentPatient(undefined);
  };

  const handleSelectPatient = (patient: Patient) => {
    setCurrentPatient(patient);
  };

  const handleClearForm = () => {
    setCurrentPatient(undefined);
  };

  const patientAdditionalFields = (patient: any, onChange: (e: any) => void) => (
    <>
      <FormInput 
        label="Número de historia clínica"
        name="clinicalRecordNumber"
        value={patient.clinicalRecordNumber || ''}
        onChange={onChange}
      />
      <FormInput 
        label="Tipo de afiliación"
        name="affiliationType"
        value={patient.affiliationType || ''}
        onChange={onChange}
      />
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pacientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PersonForm
          title="Gestión de Personal Médico"
          initialPerson={currentPatient}
          onAdd={handleAddPatient}
          onUpdate={handleUpdatePatient}
          onDelete={handleDeletePatient}
          onClear={handleClearForm}
          additionalFields={patientAdditionalFields(
            currentPatient || { clinicalRecordNumber: '', affiliationType: '' },
            (e: any) => {
              const { name, value } = e.target;
              setCurrentPatient(prev => prev ? { ...prev, [name]: value } : undefined);
            }
          )}
        />

        <IonList>
          <IonItem>
            <IonLabel>
              <h2><strong>Nombre</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>No. Historia</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Afiliación</strong></h2>
            </IonLabel>
          </IonItem>
          {patients.map(patient => (
            <IonItem key={patient.id} button onClick={() => handleSelectPatient(patient)}>
              <IonLabel>{patient.name} {patient.lastName}</IonLabel>
              <IonLabel>{patient.clinicalRecordNumber}</IonLabel>
              <IonLabel>{patient.affiliationType}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientPage;