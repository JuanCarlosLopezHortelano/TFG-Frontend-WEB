// src/pages/CreateTask/steps/Step4Review.tsx
import { Button, Descriptions, Alert, message } from 'antd';
import { SaveOutlined }         from '@ant-design/icons';
import { useNavigate }          from 'react-router-dom';
import { useAuthenticator }     from '@aws-amplify/ui-react';
import { useWizard }            from '../TaskDraftContext';
import { useCreateTask }        from  '../hooks/useCreateTask';

export default function Step4Review() {
  const { draft, setDraft }       = useWizard();
  const { user }                  = useAuthenticator();          // Amplify Auth
  const { execute, loading, error } = useCreateTask(user.username);
  const nav                       = useNavigate();

  const publish = async () => {
    // ←— aquí añadimos un console.log para depuración
    console.log('🚀 Publicando draft en frontend:', draft);
    console.log(' User:', user.username);
    console.log(' User ID:', user);


    try {
      await execute(draft);
      message.success('Tarea publicada');
      setDraft({});
      nav('/trabajosrequeridos');
    } catch {
      // El hook ya volcará error en pantalla
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 16 }}>Revisar datos</h3>
      {error && <Alert type="error" message={error} style={{ marginBottom: 16 }} />}

      <Descriptions bordered column={1}>
        <Descriptions.Item label="Título">{draft.title}</Descriptions.Item>
        <Descriptions.Item label="Categoría">{draft.category}</Descriptions.Item>
        <Descriptions.Item label="Tarifa">{draft.rate} €/h</Descriptions.Item>
        <Descriptions.Item label="Duración">{draft.duration}</Descriptions.Item>
        <Descriptions.Item label="Zona">
          {draft.area ? 'Zona seleccionada' : '—'}
        </Descriptions.Item>
        <Descriptions.Item label="Fecha">
          {draft.isFlexible ? 'Flexible' : draft.date?.toLocaleString() || '—'}
        </Descriptions.Item>
      </Descriptions>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <Button onClick={() => nav('../step-3')}>Atrás</Button>
        <Button
          type="primary"
          icon={<SaveOutlined />}
          loading={loading}
          onClick={publish}
        >
          Publicar
        </Button>
      </div>
    </>
  );
}
