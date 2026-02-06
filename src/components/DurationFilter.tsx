import React from 'react';
import useFilterStore from '../store/useFilterStore';

const DurationFilter: React.FC = () => {
  const duration = useFilterStore((state) => state.duration);
  const setDuration = useFilterStore((state) => state.setDuration);

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs font-bold uppercase text-gray-500 tracking-widest">Duration</h3>
        <span className="text-indigo-400 text-sm font-mono">{duration}m</span>
      </div>
      <input
        type="range"
        min="30"
        max="240"
        step="10"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="w-full accent-indigo-500 bg-gray-700 rounded-lg appearance-none cursor-pointer h-2"
      />
    </section>
  );
};

export default DurationFilter;