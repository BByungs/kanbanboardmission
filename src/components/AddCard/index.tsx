import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { PLUS_CARD } from 'src/store/actions/actionType';

import { v4 as uuidv4 } from 'uuid';
import { Buttons, CancelButton, Container, Input, SubmitButton } from './style';

type Inputs = {
  title: string;
  content: string;
};

interface AddCardProps {
  setAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  progress: string;
}

const AddCard = (props: AddCardProps) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const prgoressReturn = (progress: string) => {
    if (progress === 'To do') {
      return 'todo';
    } else if (progress === 'In progress') {
      return 'inProgress';
    } else {
      return 'done';
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.content, data.title);
    dispatch({
      type: PLUS_CARD,
      payload: {
        content: data.content,
        title: data.title,
        id: uuidv4(),
        progress: prgoressReturn(props.progress),
      },
    });
  };

  const handleCancel = () => {
    props.setAddOpen(false);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Title" {...register('title', { required: true })} />
      <Input
        placeholder="Content"
        {...register('content', { required: true })}
      />
      <Buttons id="test">
        <SubmitButton
          className="button"
          type="submit"
          disabled={errors.content !== undefined || errors.title !== undefined}
        >
          Add
        </SubmitButton>
        <CancelButton className="button" onClick={handleCancel}>
          Cancel
        </CancelButton>
      </Buttons>
    </Container>
  );
};

export default AddCard;
