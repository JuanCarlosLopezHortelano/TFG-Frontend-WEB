/* eslint-disable react-refresh/only-export-components */
// src/pages/CreateTask/TaskDraftContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import type { TaskDraft } from '../../types/types';

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
