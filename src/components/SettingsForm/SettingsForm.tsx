import { useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  notifications: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email";
  }

  return errors;
}

export function SettingsForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    notifications: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [saved, setSaved] = useState(false);

  function handleChange(
    field: keyof FormData,
    value: string | boolean,
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log("Saved:", form);
      setSaved(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Settings</h1>

      <label>
        Name
        <input
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </label>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <label>
        Email
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>
        <input
          type="checkbox"
          checked={form.notifications}
          onChange={(e) => handleChange("notifications", e.target.checked)}
        />
        Email notifications
      </label>

      <button type="submit">Save</button>
      {saved && <p style={{ color: "green" }}>Settings saved!</p>}
    </form>
  );
}
