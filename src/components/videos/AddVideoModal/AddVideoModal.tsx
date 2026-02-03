import { Film, X } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import VideoForm from "./VideoForm";
import { type VideoFormData } from "../../../types/videoTypes"; 

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddVideoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (data: VideoFormData) => {
    console.log("New Video:", data);
    onClose();
  };

  return (
    <ModalWrapper>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Film className="text-indigo-500" />
          Add New Video
        </h2>

        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Form */}
      <VideoForm onSubmit={handleSubmit} onCancel={onClose} />
    </ModalWrapper>
  );
};

export default AddVideoModal;
