import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  settingsFormDefaultValues,
  settingsFormSchema,
  type SettingsFormValues,
} from "../../schemas/settingsFormSchema";

export function SettingsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: settingsFormDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  function onSubmit(data: SettingsFormValues) {
    console.log("Saved:", data);
    reset(data);
  }

  return (
    <form
      className="settings-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h1>Settings</h1>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p className="field-error" id="name-error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p className="field-error" id="email-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="field field--checkbox">
        <input
          id="notifications"
          type="checkbox"
          aria-describedby="notifications-description"
          {...register("notifications")}
        />
        <label htmlFor="notifications" id="notifications-description">
          Email notifications
        </label>
      </div>

      <button type="submit">Save</button>

      {isSubmitSuccessful && !isDirty && (
        <p className="form-success" role="status" aria-live="polite">
          Settings saved!
        </p>
      )}
    </form>
  );
}
