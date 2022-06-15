import { useForm } from "react-hook-form";
import { createContext, useContext, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useForm()</h1>
        <form className={hookStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name" {...register('firstName')} />
          <input type="text" placeholder="Last Name" {...register('lastName')} />
          <input type="number" placeholder="Age" {...register('age')} />
          <textarea
            placeholder="message"
            name=""
            id=""
            cols="30"
            rows="10"
            {...register('message')}
          ></textarea>

          <button type="submit">Send message</button>
        </form>
      </main>
    </div>
  );
}
