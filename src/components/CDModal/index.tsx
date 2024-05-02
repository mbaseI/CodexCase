import { Box, Modal } from '@mui/material';

export type CDModalProps = {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '680px',
};

const CDModal: React.FC<CDModalProps> = ({ ...props }) => {
  return (
    <Modal onClose={props.onClose} open={props.open || false}>
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
};

export default CDModal;
