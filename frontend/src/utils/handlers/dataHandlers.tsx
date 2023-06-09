import React from 'react';

const toggleState = (setState: React.Dispatch<React.SetStateAction<any>>, state: boolean) => {
  setState(!state);
};

const toggleSwapStates = (
  setPrimaryState: React.Dispatch<React.SetStateAction<any>>,
  primaryState: boolean,
  setSecondaryState: React.Dispatch<React.SetStateAction<any>>,
  secondaryState: boolean
) => {
  setPrimaryState(!primaryState);
  if (secondaryState) {
    setSecondaryState(!secondaryState);
  }
};

const handleDataChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setData: React.Dispatch<React.SetStateAction<any>>,
  data: any
) => {
  setData({
    ...data,
    [event.target.name]:
      event.target.type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : event.target.value,
  });
};

const handleNestedDataChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<React.SetStateAction<any>>,
  data: any,
  nestedName: string
) => {
  setData({
    ...data,
    [nestedName]: {
      ...data[nestedName],
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    },
  });
};

export { toggleState, toggleSwapStates, handleDataChange, handleNestedDataChange };
