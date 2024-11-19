import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface FormSchema {
  formTitle: string;
  formDescription?: string;
  fields: FormField[];
}

interface FormGeneratorProps {
  schema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  let parsedSchema: FormSchema;

  try {
    parsedSchema = JSON.parse(schema);
  } catch {
    return <div className="text-red-500">Invalid JSON Schema</div>;
  }

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-xl font-bold">{parsedSchema.formTitle}</h1>
      {parsedSchema.formDescription && <p>{parsedSchema.formDescription}</p>}
      {parsedSchema.fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block font-medium">{field.label}</label>
          {field.type === 'text' && (
            <Controller
              name={field.id}
              control={control}
              rules={{ required: field.required }}
              render={({ field }) => (
                <input
                  {...field}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="border w-full"
                />
              )}
            />
          )}
          {field.type === 'select' && (
            <Controller
              name={field.id}
              control={control}
              render={({ field }) => (
                <select {...field} id={field.id} className="border w-full">
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              )}
            />
          )}
          {errors[field.id] && <p className="text-red-500">This field is required</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
