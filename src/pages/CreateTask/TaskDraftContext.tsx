// src/pages/CreateTask/TaskDraftContext.tsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Point } from 'geojson';

export interface TaskDraft {
  title?:      string;
  category?:   string;
  rate?:       number;
  duration?:   string;
  date?:       string;
  isFlexible?: boolean;
  address?:    string;
  area?:       Point & { radius: number };
}

type WizardCtx = {
  draft: TaskDraft;
  setDraft: React.Dispatch<React.SetStateAction<TaskDraft>>;
};

const WizardContext = createContext<WizardCtx | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<TaskDraft>({});
  return (
    <WizardContext.Provider value={{ draft, setDraft }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error('useWizard must be inside WizardProvider');
  return ctx;
}
