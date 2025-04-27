import { Button, Checkbox, DatePicker, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useWizard } from '../TaskDraftContext';

export default function Step3Date() {
  const { draft, setDraft } = useWizard();
  const nav = useNavigate();

  const onFinish = (vals: { flexible: boolean; date?: string }) => {
    setDraft({ ...draft, isFlexible: vals.flexible, date: vals.date });
    nav('../review');
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ flexible: draft.isFlexible, date: draft.date }}
      onFinish={onFinish}
    >
      <Form.Item name="flexible" valuePropName="checked">
        <Checkbox>Fecha flexible (sin día concreto)</Checkbox>
      </Form.Item>

      <Form.Item
        name="date"
        label="Fecha / Hora"
        dependencies={['flexible']}
        rules={[
          ({ getFieldValue }) => ({
            required: !getFieldValue('flexible'),
            message: 'Necesitas seleccionar una fecha',
          }),
        ]}
      >
        <DatePicker showTime disabled={Form.useWatch('flexible')} />
      </Form.Item>


      <div className="flex justify-between">
        <Button onClick={() => nav('../step-2')}>Atrás</Button>
        <Button type="primary" htmlType="submit">
          Siguiente
        </Button>
      </div>
    </Form>
  );
}
