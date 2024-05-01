import { Box, Modal } from '@mui/material';

type CDModalProps = {
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

const CDModal: React.FC<CDModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default CDModal;
