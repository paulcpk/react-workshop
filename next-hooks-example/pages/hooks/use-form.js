import { useForm } from "react-hook-form";
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
        <h1>Form Hook</h1>
        <form className={hookStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <select {...register("gender")}>
            <option value="" selected disabled hidden>
              Select Gender
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input
            placeholder="Firstname"
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && "First name is required"}

          <input
            placeholder="Lastname"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && "Last name is required"}

          <input
            placeholder="Age"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
          {errors.age && "Age must be between 18 and 99"}
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
