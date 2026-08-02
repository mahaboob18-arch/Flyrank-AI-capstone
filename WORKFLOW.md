# FE-03 Workflow Documentation

## Feature Chosen

Settings Form with Validation

## Round 1 – Vague Prompt

Prompt Used:

```text
Create a React TypeScript settings form with validation.
```

### Outcome

The AI generated a working settings form with basic validation and a functional user interface.

### Observations

- Validation logic was handled directly inside the component.
- Form state and validation were tightly coupled.
- Limited focus on accessibility.
- No implementation plan was provided before coding.
- No explicit verification process was included.

Round 1 was quick to generate, but required more manual review to determine whether the implementation handled edge cases correctly.

---

## Round 2 – Structured Prompt

Prompt Used:

```text
You are helping me improve an existing React TypeScript settings form.

Before writing code:

1. Analyze the current project structure.
2. Identify weaknesses in validation, accessibility, and maintainability.
3. Propose improvements.
4. Explain the implementation plan.
5. Then implement the improvements.

Requirements:
- Use react-hook-form
- Use Zod for validation
- Separate validation schema from UI
- Improve accessibility
- Show validation errors
- Keep TypeScript strict
```

### Outcome

The AI produced a more structured implementation that included:

- react-hook-form for form state management
- Zod schema validation
- Validation logic separated from UI components
- Improved accessibility support
- Better error handling and user feedback
- Verification steps after implementation

---

## Specific Differences

### Round 1

- Validation logic was mixed directly with the component.
- Form handling relied on manual state management.
- Accessibility considerations were limited.
- Minimal planning before implementation.

### Round 2

- Validation was moved into a dedicated schema file.
- react-hook-form was used for form management.
- Zod was used for schema-based validation.
- Accessibility improvements were added, including proper labels and validation feedback.
- The implementation followed an analyze → plan → implement → verify workflow.

These changes improved maintainability and made the code easier to review and extend.

---

## AI Mistake Caught During Review

One issue identified during review was that the initial AI-generated implementation kept validation logic inside the UI component. While functional, this made the code less maintainable and harder to scale.

The implementation also lacked explicit accessibility improvements.

During Round 2, these issues were addressed by separating validation into a dedicated schema and adding accessibility-focused improvements.

---

## Verification

Commands Run:

```bash
npm install
npm run build
npm run dev
```

### Manual Tests Performed

- Empty name field shows validation error
- Empty email field shows validation error
- Invalid email format shows validation error
- Name shorter than 2 characters shows validation error
- Valid form submission shows success message

The production build completed successfully without errors.

---

## Review Effort

Round 2 required more effort upfront because the prompt included planning, constraints, and verification requirements.

However, the review process was faster because validation rules, accessibility considerations, and testing expectations were defined before implementation began.

Although Round 2 took longer to generate, it reduced the amount of manual review and debugging required afterward.

---

## Conclusion

This exercise demonstrated the difference between simply asking AI to generate code and guiding AI with a structured workflow.

The vague prompt produced a working result quickly, but required more review and offered fewer guarantees around maintainability and accessibility.

The structured workflow produced a more reliable implementation through planning, schema-based validation, accessibility improvements, and explicit verification steps.

The additional prompt effort in Round 2 resulted in higher confidence in correctness and reduced review effort overall.
