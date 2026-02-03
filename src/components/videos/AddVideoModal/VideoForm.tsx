import { useForm, type SubmitHandler } from "react-hook-form";
import { Save } from "lucide-react";
import { type VideoFormData } from "../../../types/videoTypes";
import FormRow from "./FormRow";

interface Props {
    onSubmit: (data: VideoFormData) => void;
    onCancel: () => void;
}

const VideoForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VideoFormData>();

    const submit: SubmitHandler<VideoFormData> = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="p-6 space-y-6">
            {/* Title */}
            <FormRow>
                <label className="text-xs font-bold text-gray-400 uppercase">Title</label>
                <input
                    {...register("title", { required: "Title is required" })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
                />
                {errors.title && (
                    <p className="text-red-400 text-xs">{errors.title.message}</p>
                )}
            </FormRow>

            {/* Description */}
            <FormRow>
                <label className="text-xs font-bold text-gray-400 uppercase">
                    Description
                </label>
                <textarea
                    {...register("description", { required: true })}
                    rows={3}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
                />
            </FormRow>

            {/* Footer */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-5 py-2 text-gray-300"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-indigo-600 rounded-lg text-white"
                >
                    <Save size={16} />
                    Save
                </button>
            </div>
        </form>
    );
};

export default VideoForm;
