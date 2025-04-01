import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from './Card';
import FormInput from './FormInput';
import ActionButton from './ActionButton';
import { Person } from '../models/Person';

interface PersonFormProps {
  title: string;
  initialPerson?: Person;
  onAdd?: (person: Person) => void;
  onUpdate?: (person: Person) => void;
  onDelete?: (id: string) => void;
  onClear?: () => void;
  additionalFields?: React.ReactNode;
}

const PersonForm: React.FC<PersonFormProps> = ({ 
  title, 
  initialPerson,
  onAdd,
  onUpdate,
  onDelete,
  onClear,
  additionalFields
}) => {
  const [person, setPerson] = useState<Person>({
    id: '',
    name: '',
    lastName: '',
    age: 0,
    email: ''
  });

  const [mode, setMode] = useState<'add' | 'update'>('add');

  useEffect(() => {
    if (initialPerson) {
      setPerson(initialPerson);
      setMode('update');
    } else {
      clearForm();
      setMode('add');
    }
  }, [initialPerson]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const clearForm = () => {
    setPerson({
      id: '',
      name: '',
      lastName: '',
      age: 0,
      email: ''
    });
    if (onClear) onClear();
  };

  const handleSubmit = () => {
    if (mode === 'add' && onAdd) {
      onAdd({ ...person, id: Date.now().toString() });
    } else if (mode === 'update' && onUpdate) {
      onUpdate(person);
    }
    clearForm();
  };

  const handleDelete = () => {
    if (onDelete && person.id) {
      onDelete(person.id);
      clearForm();
    }
  };

  return (
    <Card title={title}>
      <IonGrid>
        <FormInput 
          label="Nombre"
          name="name"
          value={person.name}
          onChange={handleChange}
          required
        />
        <FormInput 
          label="Apellido"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          required
        />
        <FormInput 
          label="Edad"
          name="age"
          value={person.age}
          type="number"
          onChange={handleChange}
          required
        />
        <FormInput 
          label="Correo electrónico"
          name="email"
          value={person.email}
          type="email"
          onChange={handleChange}
          required
        />
        
        {additionalFields}

        <IonRow className="ion-justify-content-center ion-margin-top">
          <IonCol size="auto">
            <ActionButton 
              text="Agregar" 
              onClick={handleSubmit} 
              disabled={mode === 'update' || !person.name || !person.lastName}
            />
          </IonCol>
          <IonCol size="auto">
            <ActionButton 
              text="Modificar" 
              color="warning" 
              onClick={handleSubmit} 
              disabled={mode === 'add' || !person.id || !person.name || !person.lastName}
            />
          </IonCol>
          <IonCol size="auto">
            <ActionButton 
              text="Eliminar" 
              color="danger" 
              onClick={handleDelete} 
              disabled={!person.id}
            />
          </IonCol>
          <IonCol size="auto">
            <ActionButton 
              text="Limpiar" 
              color="medium" 
              onClick={clearForm}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </Card>
  );
};

export default PersonForm;