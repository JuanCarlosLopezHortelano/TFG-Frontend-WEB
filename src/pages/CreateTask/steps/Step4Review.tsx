import { Button, Descriptions, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useWizard } from '../TaskDraftContext';

/*  Si vas a usar Amplify DataStore / GraphQL, importa tu client aquí */
// import { generateClient } from 'aws-amplify/data';
// const client = generateClient<Schema>();

export default function Step4Review() {
  const { draft, setDraft } = useWizard();
  const nav = useNavigate();

  async function publish() {
    try {
      // --- GRABAR en backend ---
      // await client.models.Job.create({ ...draft, status: 'open', createdAt: new Date().toISOString() });
      console.log('Publicado', draft);
      message.success('Tarea publicada');
      setDraft({});
      nav('/mis-ofertas');
    } catch (err) {
      message.error('Error publicando');
      console.error(err);
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Revisar datos</h3>

      <Descriptions bordered column={1}>
        <Descriptions.Item label="Título">{draft.title}</Descriptions.Item>
        <Descriptions.Item label="Categoría">{draft.category}</Descriptions.Item>
        <Descriptions.Item label="Tarifa">{draft.rate}€/h</Descriptions.Item>
        <Descriptions.Item label="Duración">{draft.duration}</Descriptions.Item>
        <Descriptions.Item label="Zona">
          {draft.area ? 'Zona seleccionada' : '—'}
        </Descriptions.Item>
        <Descriptions.Item label="Fecha">
          {draft.isFlexible ? 'Flexible' : draft.date}
        </Descriptions.Item>
      </Descriptions>

      <div className="flex justify-between mt-6">
        <Button onClick={() => nav('../step-3')}>Atrás</Button>
        <Button type="primary" icon={<SaveOutlined />} onClick={publish}>
          Publicar
        </Button>
      </div>
    </>
  );
}
