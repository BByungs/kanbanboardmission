import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { EDIT_CARD, PLUS_CARD } from 'src/store/actions/actionType';
import { CardType } from 'src/types/CardType';
import { v4 as uuidv4 } from 'uuid';
import { Buttons, CancelButton, Container, Input, SubmitButton } from './style';

type Inputs = {
  title: string;
  content: string;
};

interface SubmitCardProps {
  setAddOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  progress?: string;
  card?: CardType;
  setEditOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  edit?: boolean;
}

const SubmitCard = (props: SubmitCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const prgoressReturn = (progress?: string) => {
    if (progress && progress === 'To do') {
      return 'todo';
    } else if (progress && progress === 'In progress') {
      return 'inProgress';
    } else if (progress && progress === 'Done') {
      return 'done';
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch({
      type: props.edit ? EDIT_CARD : PLUS_CARD,
      payload: {
        id: props.edit ? props.card?.id : uuidv4(),
        content: data.content,
        title: data.title,
        progress: props.edit
          ? props.card?.progress
          : prgoressReturn(props?.progress),
      },
    });
    if (!props.edit && props.setAddOpen) props.setAddOpen(false);
    else if (props.setEditOpen && props.setEditOpen) props.setEditOpen(false);
  };

  const handleCancle = () => {
    if (props.edit && props.setEditOpen) props.setEditOpen(false);
    else if (!props.edit && props.setAddOpen) props.setAddOpen(false);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={props.edit ? props.card?.title : ''}
        placeholder="Title"
        {...register('title', { required: true })}
      />
      <Input
        defaultValue={props.edit ? props.card?.content : ''}
        placeholder="Content"
        {...register('content', { required: true })}
      />
      <Buttons>
        <SubmitButton
          className="button"
          type="submit"
          disabled={errors.content !== undefined || errors.title !== undefined}
        >
          {props.edit ? 'Edit' : 'Add'}
        </SubmitButton>
        <CancelButton className="button" onClick={handleCancle}>
          Cancel
        </CancelButton>
      </Buttons>
    </Container>
  );
};

export default SubmitCard;
