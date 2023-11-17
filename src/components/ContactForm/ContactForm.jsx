import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
    const form = e.currentTarget;
    form.reset();
  };

  const saveName = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.contactForm} onSubmit={onHandleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className={css.contactForm__input}
        id="name"
        value={name}
        onChange={saveName}
        pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        className={css.contactForm__input}
        id="number"
        value={number}
        onChange={saveName}
        pattern={
          '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
        }
        required
      />
      <button type="submit" className={css.contactForm__button}>
        Add contact
      </button>
    </form>
  );
};
