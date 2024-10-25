import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const { control, handleSubmit, watch } = useForm();
  const firstName = watch('firstName');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true, minLength: 3 }}
          render={({ field, fieldState: { error } }) => (
            <div>
              <input
                {...field}
                type="text"
                className={`${styles.input} ${error ? styles.inputError : ''}`}
              />
              {error && <span className={styles.error}>First name must be at least 3 characters long</span>}
            </div>
          )}
        />
      </div>

      {firstName && firstName.length >= 3 && (
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  className={`${styles.input} ${error ? styles.inputError : ''}`}
                />
                {error && <span className={styles.error}>Last name is required</span>}
              </div>
            )}
          />
        </div>
      )}

      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default DynamicForm;