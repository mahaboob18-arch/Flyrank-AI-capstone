\# FE-03 Workflow Documentation



\## Feature Chosen

Settings Form with Validation



\## Round 1 – Vague Prompt



Prompt Used:



```text

Create a React TypeScript settings form with validation.

```



Outcome:

\- Generated a settings form

\- Included basic validation

\- Form worked with basic validation



\## Round 2 – Structured Prompt



Prompt Used:



```text

You are helping me improve an existing React TypeScript settings form.



Before writing code:



1\. Analyze the current project structure.

2\. Identify weaknesses in validation, accessibility, and maintainability.

3\. Propose improvements.

4\. Explain the implementation plan.

5\. Then implement the improvements.



Requirements:

\- Use react-hook-form

\- Use Zod for validation

\- Separate validation schema from UI

\- Improve accessibility

\- Show validation errors

\- Keep TypeScript strict

```



Outcome:

\- Added react-hook-form

\- Added Zod validation

\- Extracted validation into a separate schema file

\- Improved accessibility

\- Improved maintainability

\- Added better error handling



\## Verification



Commands Run:



```bash

npm install

npm run build

npm run dev

```



Manual Tests:

\- Empty name shows validation error

\- Empty email shows validation error

\- Invalid email shows validation error

\- Name shorter than 2 characters shows validation error

\- Valid submission shows success message



\## Comparison



Round 1:

\- Simple implementation

\- Validation mixed with component logic



Round 2:

\- Better architecture

\- Better validation

\- Better accessibility

\- Easier maintenance



\## Conclusion



The structured AI workflow produced cleaner code, stronger validation, improved accessibility, and a more maintainable solution.

