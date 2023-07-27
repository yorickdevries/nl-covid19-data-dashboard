import React, { useState } from 'react';

interface Section {
  id: string;
  name: string;
  isArchived: boolean;
}

interface PageBuilderProps {
  initialSections: Section[];
}

const ConfigureSections: React.FC<PageBuilderProps> = ({ initialSections }) => {
  const [sections, setSections] = useState<Section[]>(initialSections);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    const temp = newSections[index];
    newSections[index] = newSections[index - 1];
    newSections[index - 1] = temp;
    setSections(newSections);
  };

  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    const temp = newSections[index];
    newSections[index] = newSections[index + 1];
    newSections[index + 1] = temp;
    setSections(newSections);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.id}>
          <div>{section.name}</div>
          <button onClick={() => moveUp(index)}>Move Up</button>
          <button onClick={() => moveDown(index)}>Move Down</button>
        </div>
      ))}
    </div>
  );
};

export default ConfigureSections;
