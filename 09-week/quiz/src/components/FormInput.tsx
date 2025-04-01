import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

interface FormInputProps {
  label: string;
  name: string;
  value: string | number;
  type?: 'text' | 'number' | 'email';
  onChange: (e: any) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  name, 
  value, 
  type = 'text', 
  onChange,
  required = false 
}) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label} {required && '*'}</IonLabel>
      <IonInput
        type={type}
        name={name}
        value={value}
        onIonChange={onChange}
        required={required}
      />
    </IonItem>
  );
};

export default FormInput;