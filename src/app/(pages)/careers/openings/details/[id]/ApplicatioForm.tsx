// ApplicationFormClient.tsx (client component)
'use client';

import { useCallback, useEffect, useState } from 'react';
import { getQuestions, saveAnswer } from '@/app/services/questionsService';
import SpinnerService from '@/app/services/SpinnerService';
import { QuestionField } from '@/app/utils/interfaces';
import { createApplication } from '@/app/services';
import ToastService from '@/app/services/toasterService';
import { Card } from 'flowbite-react';

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

    const data = {
      job_ids: [opening.id],
      answers: applicationData,
      name: applicationData?.name || '',
    };

    try {
      await createApplication(data)
        .then((res) => {
          console.log(res);

          ToastService.showToast(`Your Application for ${opening.title} has been submitted successfully`, 'success');
        })
        .catch((error) => {
          ToastService.showToast(error.message, 'error');
        });
    } finally {
      SpinnerService.hideSpinner();
    }
  }, [applicationData]);

  return (
    questions.length > 0 && (
      <Card  className='p-2'>
        {questions.map((ques: QuestionField) => (
          <div key={ques.id}>
            {ques.type !== 'textarea' && ques.type !== 'checkbox' && ques.type !== 'radio' && <input required={ques.required} placeholder={ques.label} name={String(ques.text)} type={ques.type} onChange={handleChange} className="rounded-xl w-125 border px-3 p-2" />}
            {ques.type === 'textarea' && <textarea className="rounded-xl border px-3 py-2 md:col-span-2 w-125" name={String(ques.text)} placeholder={ques.label} onChange={handleChange} />}
            {ques.type === 'checkbox' && (
              <div className="flex items-center gap-2 text-sm md:col-span-2 p-2">
                <input id={`night-${ques.id}`} type="checkbox" onChange={handleChange} name={ques.text} className="h-4 w-4" />
                <label htmlFor={`night-${ques.id}`}>{ques.label}</label>
              </div>
            )}
          </div>
        ))}
        <button type="submit" onClick={handleApplicationSubmit} className="mt-2 rounded-xl bg-teal-600 px-4 py-2 text-white md:col-span-2">
          Submit Application
        </button>
      </Card>
    )
  );
}
