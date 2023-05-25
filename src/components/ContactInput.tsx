import React from 'react';

type Props = {
  name: string,
  placeholder: string,
};

export const ContactsInput: React.FC<Props> = ({
  name, placeholder,
}) => {
  return (
    <div className="contacts__info__input-group">
      <label
        htmlFor={name}
        className="contacts__info__label"
      >
        {name}
      </label>
      <input
        name={name}
        defaultValue=""
        placeholder={placeholder}
        className="contacts__info__input"
      />
    </div>
  );
};
