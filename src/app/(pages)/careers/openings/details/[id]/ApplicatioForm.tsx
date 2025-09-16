// ApplicationFormClient.tsx (client component)
'use client';

import { useCallback, useEffect, useState } from 'react';
import { getQuestions, saveAnswer } from '@/app/services/questionsService';
import SpinnerService from '@/app/services/SpinnerService';
import { QuestionField } from '@/app/utils/interfaces';

export default function ApplicationForm({ opening }: { opening: any }) {
  const [questions, setQuestions] = useState<QuestionField[]>([]);
  const [applicationData, setApplicationData] = useState<any>({});

  useEffect(() => {
    getQuestions().then((res) => setQuestions(res.data || []));
  }, []);

  const handleChange = useCallback((e: any) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === 'checkbox' || type === 'radio' ? checked : value;
    setApplicationData((prev: any) => ({ ...prev, [name]: newValue }));
  }, []);

  const handleApplicationSubmit = useCallback(async () => {
    SpinnerService.showSpinner();
    try {
      const res = await saveAnswer({ data: { answer: applicationData } });
      // create application
    } finally {
      SpinnerService.hideSpinner();
    }
  }, [applicationData]);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {questions.map((ques: QuestionField) => (
        <div key={ques.id}>
          {ques.type !== 'textarea' && ques.type !== 'checkbox' && ques.type !== 'radio' && (
            <input
              required={ques.required}
              placeholder={ques.label}
              name={String(ques.text)}
              type={ques.type}
              onChange={handleChange}
              className="rounded-xl border px-3 py-2"
            />
          )}
          {ques.type === 'textarea' && (
            <textarea
              className="rounded-xl border px-3 py-2 md:col-span-2"
              name={String(ques.text)}
              placeholder={ques.label}
              onChange={handleChange}
            />
          )}
          {ques.type === 'checkbox' && (
            <div className="flex items-center gap-2 text-sm md:col-span-2">
              <input id={`night-${ques.id}`} type="checkbox" onChange={handleChange} name={ques.text} className="h-4 w-4" />
              <label htmlFor={`night-${ques.id}`}>{ques.label}</label>
            </div>
          )}
        </div>
      ))}
      <button
        type="submit"
        onClick={handleApplicationSubmit}
        className="mt-2 rounded-xl bg-teal-600 px-4 py-2 text-white md:col-span-2"
      >
        Submit Application
      </button>
    </div>
  );
}
