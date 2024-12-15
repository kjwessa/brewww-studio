'use client';

import { useState, useEffect } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { useThemeGenerate } from '../../_context/ThemeGenerateContext';
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
  scaleIndex: number;
  unit: string;
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
  };

  // Convert REM to PX (assuming base font size of 16px)
  const remToPx = (rem) => {
    return Math.round(rem * 16 * 100) / 100;
  };

  const formatValue = (value, unit) => {
    return unit === 'px' ? remToPx(value) : value;
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="flex items-center space-x-4 mb-2">
      <div {...listeners} className="cursor-grab text-[var(--color-muted-foreground)]">⋮⋮</div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={variable.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 pr-8 shadow-sm"
          />
          <button
            onClick={onRemove}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          >
            ×
          </button>
        </div>
        <div className="relative flex-1">
          <input
            type="number"
            step="0.01"
            value={formatValue(variable.desktopSize, variable.unit)}
            onChange={(e) => onUpdate({ desktopSize: Number(e.target.value) })}
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 pr-12 shadow-sm"
            readOnly
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] text-sm">{variable.unit.toUpperCase()}</span>
        </div>
        <div className="relative flex-1">
          <input
            type="number"
            step="0.01"
            value={formatValue(variable.mobileSize, variable.unit)}
            onChange={(e) => onUpdate({ mobileSize: Number(e.target.value) })}
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 pr-12 shadow-sm"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] text-sm">{variable.unit.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export function GenerateTitleSection() {
  const { variables, setVariables } = useThemeGenerate();
  const [desktopRatio, setDesktopRatio] = useState<number>(1.39);
  const [mobileRatio, setMobileRatio] = useState<number>(1.26);
  const [displayUnit, setDisplayUnit] = useState('rem');

  // Update desktop sizes when the ratio changes
  useEffect(() => {
    const baseSize = 1.00; // h6 size
    setVariables((prevVariables) =>
      prevVariables.map((variable) => ({
        ...variable,
        desktopSize: Number((baseSize * Math.pow(desktopRatio, variable.scaleIndex)).toFixed(2)),
      }))
    );
  }, [desktopRatio, setVariables]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddVariable = () => {
    const newId = String(variables.length + 1);
    const newScaleIndex = variables.length;
    const baseSize = 1.00;
    const newDesktopSize = Number((baseSize * Math.pow(desktopRatio, newScaleIndex)).toFixed(2));

    setVariables([
      ...variables,
      {
        id: newId,
        name: '',
        desktopSize: newDesktopSize,
        mobileSize: 1,
        scaleIndex: newScaleIndex,
        unit: displayUnit,
      },
    ]);
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

        // Update scale indices after reordering
        const reorderedItems = arrayMove(items, oldIndex, newIndex);
        return reorderedItems.map((item, index) => ({
          ...item,
          scaleIndex: reorderedItems.length - 1 - index,
          desktopSize: Number(
            (1.00 * Math.pow(desktopRatio, reorderedItems.length - 1 - index)).toFixed(2)
          ),
        }));
      });
    }
  };

  // Update all variables when display unit changes
  useEffect(() => {
    setVariables((prevVariables) =>
      prevVariables.map((variable) => ({
        ...variable,
        unit: displayUnit,
      }))
    );
  }, [displayUnit, setVariables]);

  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large">
        <div className="space-y-8">
          <div>
            <h2 className="text-[var(--text-title-large)] font-semibold mb-6">Scale Ratios</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Desktop Scale Ratio</label>
                <input
                  type="number"
                  step="0.01"
                  value={desktopRatio}
                  onChange={(e) => setDesktopRatio(Number(e.target.value))}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-foreground)] mb-1">Mobile Scale Ratio</label>
                <input
                  type="number"
                  step="0.01"
                  value={mobileRatio}
                  onChange={(e) => setMobileRatio(Number(e.target.value))}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-muted)] p-6 rounded-[var(--radius-lg)] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[var(--text-title-large)] font-semibold">Heading Variables</h2>
              <div className="flex items-center">
                <button
                  onClick={() => setDisplayUnit('rem')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-l-[var(--radius-md)] cursor-pointer border border-r-0 border-[var(--color-border)] ${
                    displayUnit === 'rem'
                      ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
                      : 'bg-[var(--color-background)] text-[var(--color-foreground)]'
                  }`}
                >
                  REM
                </button>
                <button
                  onClick={() => setDisplayUnit('px')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-r-[var(--radius-md)] cursor-pointer border border-[var(--color-border)] ${
                    displayUnit === 'px'
                      ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
                      : 'bg-[var(--color-background)] text-[var(--color-foreground)]'
                  }`}
                >
                  PX
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4 px-12 text-sm text-[var(--color-muted-foreground)]">
              <div>Variable Name</div>
              <div>Desktop Size</div>
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
                <div className="space-y-2 px-4">
                  {variables.map((variable, index) => (
                    <SortableItem
                      key={variable.id}
                      variable={variable}
                      onRemove={() => handleRemoveVariable(index)}
                      onUpdate={(updates) => handleUpdateVariable(index, updates)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            <button
              onClick={handleAddVariable}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[var(--radius-md)] text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:ring-offset-2 cursor-pointer"
            >
              Add Variable
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GenerateTitleSection;