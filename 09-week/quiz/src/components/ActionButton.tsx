import React from 'react';
import { IonButton } from '@ionic/react';

interface ActionButtonProps {
  text: string;
  color?: string;
  onClick: () => void;
  fill?: 'clear' | 'outline' | 'solid' | 'default';
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  text, 
  color = 'primary', 
  onClick,
  fill = 'solid',
  disabled = false
}) => {
  return (
    <IonButton 
      color={color} 
      onClick={onClick} 
      fill={fill}
      disabled={disabled}
    >
      {text}
    </IonButton>
  );
};

export default ActionButton;