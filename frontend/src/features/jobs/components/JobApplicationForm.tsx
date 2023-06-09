import { FC, RefObject, useRef, FormEvent } from 'react';

import { ButtonBar, ErrorDisplay } from '@/features/editable';
import { Button } from '@/components/Buttons';
import { Container, Flexer, Item, Surface } from '@/components/Containers';
import { Text } from '@/components/Elements';
import { BaseProps } from '@/theme/base';
import { Input } from '@/components/Form';
import { useFormValidation } from '@/hooks';
import { validateForm } from '@/lib/api';
import { useEditModeStore } from '@/stores/editmode';
import { useAlertStore } from '@/stores/alert';

import {
  applicationFields,
  initialApplicationData,
  useApplicationForm,
} from '../api/useApplicationForm';
import { JobContent } from '../types';

interface JobApplicationFormProps extends BaseProps {
  job: JobContent;
  formRef: RefObject<any>;
}

export const JobApplicationForm: FC<JobApplicationFormProps> = ({ job, formRef, ...rest }) => {
  const alertStore = useAlertStore();
  const { editMode }: any = useEditModeStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current!.click();
  };

  const submitLogic = (event: FormEvent) => {
    event.preventDefault();
    useApplicationForm(resetForm, values, alertStore);
  };

  const { values, errors, setErrors, isSubmitting, handleChange, handleSubmit, resetForm } =
    useFormValidation(
      {
        ...initialApplicationData,
        job: job.position,
      },
      validateForm,
      submitLogic
    );

  return (
    <div ref={formRef}>
      <Item xs={12} mt={40} {...rest}>
        <Surface maxWidth={1000} boxShadow={1} j="c" br={12}>
          {editMode && (
            <ButtonBar adminLink="application" tooltipPosition="top" text="Applications" />
          )}
          <Text t="h3" a="c" fw="bold" mb={0}>
            Apply Now
          </Text>
          <Text t="body1" s="0.9rem" a="c" mb={6}>
            {job.position} - {job.location} - {job.type}
          </Text>
          <Container>
            {applicationFields.map(({ helpText, name }, index) => (
              <Item key={index} xs={12} sm={6} mt={6} pl={4} pr={4}>
                <Input
                  size="medium"
                  helpText={helpText}
                  id={name}
                  name={name}
                  value={values[name]}
                  onChange={handleChange}
                />
              </Item>
            ))}
            <Flexer a="c" j="c" mt={12}>
              <input
                ref={fileInputRef}
                type="file"
                id="resume-input"
                name="resume"
                // inputProps={{ accept: ".pdf,.docx" }}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <Button size="sm" onClick={handleClick} startIcon="attach_file" w={160}>
                {values.resume ? values.resume.name : 'Upload Resume'}
              </Button>
            </Flexer>
            {errors.resume && (
              <Text c="error" a="c">
                {errors.resume}
              </Text>
            )}
            <Flexer j="c" mt={8}>
              <Button size="sm" onClick={handleSubmit} startIcon="publish" w={160}>
                Submit Application
              </Button>
            </Flexer>
          </Container>
          <ErrorDisplay errors={errors} setErrors={setErrors} mt={8} />
        </Surface>
      </Item>
    </div>
  );
};
