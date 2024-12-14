'use client';

import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface HeadingVariable {
  id: string;
  name: string;
  desktopSize: number;
  mobileSize: number;
}

interface SortableItemProps {
  variable: HeadingVariable;
  onRemove: () => void;
  onUpdate: (updates: Partial<HeadingVariable>) => void;
}

const SortableItem = ({ variable, onRemove, onUpdate }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: variable.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="grid grid-cols-4 gap-4 items-center mb-2">
      <div className="flex items-center">
        <div {...listeners} className="mr-2 cursor-grab">⋮⋮</div>
        <input
          type="text"
          value={variable.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <button
          onClick={onRemove}
          className="ml-2 p-1 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      <div>
        <input
          type="number"
          step="0.01"
          value={variable.desktopSize}
          onChange={(e) => onUpdate({ desktopSize: Number(e.target.value) })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="text-right text-gray-500">REM</div>
      <div>
        <input
          type="number"
          step="0.01"
          value={variable.mobileSize}
          onChange={(e) => onUpdate({ mobileSize: Number(e.target.value) })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export const GenerateTitleSection = () => {
  const [desktopRatio, setDesktopRatio] = useState<number>(1.39);
  const [mobileRatio, setMobileRatio] = useState<number>(1.26);
  const [variables, setVariables] = useState<HeadingVariable[]>([
    { id: '1', name: '--display-font-size', desktopSize: 7.21, mobileSize: 4.00 },
    { id: '2', name: '--h1-font-size', desktopSize: 5.19, mobileSize: 3.18 },
    { id: '3', name: '--h2-font-size', desktopSize: 3.73, mobileSize: 2.52 },
    { id: '4', name: '--h3-font-size', desktopSize: 2.69, mobileSize: 2.00 },
    { id: '5', name: '--h4-font-size', desktopSize: 1.93, mobileSize: 1.59 },
    { id: '6', name: '--h5-font-size', desktopSize: 1.39, mobileSize: 1.26 },
    { id: '7', name: '--h6-font-size', desktopSize: 1.00, mobileSize: 1.00 },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddVariable = () => {
    const newId = String(variables.length + 1);
    setVariables([...variables, { id: newId, name: '', desktopSize: 1, mobileSize: 1 }]);
  };

  const handleRemoveVariable = (index: number) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  const handleUpdateVariable = (index: number, updates: Partial<HeadingVariable>) => {
    const newVariables = [...variables];
    newVariables[index] = { ...newVariables[index], ...updates };
    setVariables(newVariables);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setVariables((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large">
        <div className="grid grid-cols-3 gap-4">
          <div />
          <div>
            <label className="block text-sm font-medium text-gray-700">Desktop Scale Ratio</label>
            <input
              type="number"
              step="0.01"
              value={desktopRatio}
              onChange={(e) => setDesktopRatio(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Scale Ratio</label>
            <input
              type="number"
              step="0.01"
              value={mobileRatio}
              onChange={(e) => setMobileRatio(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Heading Variables</h2>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>Variable Name</div>
            <div>Desktop Size</div>
            <div className="text-right">REM</div>
            <div>Mobile Size</div>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={variables}
              strategy={verticalListSortingStrategy}
            >
              {variables.map((variable, index) => (
                <SortableItem
                  key={variable.id}
                  variable={variable}
                  onRemove={() => handleRemoveVariable(index)}
                  onUpdate={(updates) => handleUpdateVariable(index, updates)}
                />
              ))}
            </SortableContext>
          </DndContext>

          <button
            onClick={handleAddVariable}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Variable
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default GenerateTitleSection;