import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import PersonForm from '../components/PersonForm';
import FormInput from '../components/FormInput';
import { Doctor } from '../models/Person';

const DoctorPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentDoctor, setCurrentDoctor] = useState<Doctor | undefined>(undefined);

  const handleAddDoctor = (newDoctor: Doctor) => {
    setDoctors([...doctors, newDoctor]);
  };

  const handleUpdateDoctor = (updatedDoctor: Doctor) => {
    setDoctors(doctors.map(doctor => 
      doctor.id === updatedDoctor.id ? updatedDoctor : doctor
    ));
    setCurrentDoctor(undefined);
  };

  const handleDeleteDoctor = (id: string) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
    setCurrentDoctor(undefined);
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setCurrentDoctor(doctor);
  };

  const handleClearForm = () => {
    setCurrentDoctor(undefined);
  };

  const doctorAdditionalFields = (doctor: any, onChange: (e: any) => void) => (
    <>
      <FormInput 
        label="Especialidad"
        name="specialty"
        value={doctor.specialty || ''}
        onChange={onChange}
      />
      <FormInput 
        label="Número de licencia médica"
        name="licenseNumber"
        value={doctor.licenseNumber || ''}
        onChange={onChange}
      />
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Médicos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PersonForm
          title="Gestión de Personal Médico"
          initialPerson={currentDoctor}
          onAdd={handleAddDoctor}
          onUpdate={handleUpdateDoctor}
          onDelete={handleDeleteDoctor}
          onClear={handleClearForm}
          additionalFields={doctorAdditionalFields(
            currentDoctor || { specialty: '', licenseNumber: '' },
            (e: any) => {
              const { name, value } = e.target;
              setCurrentDoctor(prev => prev ? { ...prev, [name]: value } : undefined);
            }
          )}
        />

        <IonList>
          <IonItem>
            <IonLabel>
              <h2><strong>Nombre</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>Especialidad</strong></h2>
            </IonLabel>
            <IonLabel>
              <h2><strong>No. Licencia</strong></h2>
            </IonLabel>
          </IonItem>
          {doctors.map(doctor => (
            <IonItem key={doctor.id} button onClick={() => handleSelectDoctor(doctor)}>
              <IonLabel>{doctor.name} {doctor.lastName}</IonLabel>
              <IonLabel>{doctor.specialty}</IonLabel>
              <IonLabel>{doctor.licenseNumber}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DoctorPage;