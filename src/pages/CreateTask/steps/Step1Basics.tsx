//   steps/Step1Basics.tsx  (ejemplo)
import { Form, Input, Select, Button, Row, Col, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { useWizard } from "../TaskDraftContext";

export default function Step1Basics() {
  const { draft, setDraft } = useWizard();
  const nav = useNavigate();

  return (
    <Form
      layout="vertical"
      initialValues={draft}
      onFinish={(vals) => {
        setDraft({ ...draft, ...vals });
        nav("../step-2");
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Paso 1: Datos básicos</h2>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="title"
            label="Título"
            rules={[{ required: true, message: 'Introduce un título' }]}
          >
            <Input placeholder="Ej.: Reparar gotera" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Categoría"
            rules={[{ required: true, message: 'Selecciona una categoría' }]}
          >
            <Select
              placeholder="Categoría"
              options={["Eventos", "Logística"].map((v) => ({ value: v, label: v }))}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="rate"
            label="Tarifa €/h"
            rules={[{ required: true, message: 'Introduce una tarifa' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="15" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="duration"
            label="Duración"
            rules={[{ required: true, message: 'Introduce la duración' }]}
          >
            <Input placeholder="4 h, 1 día…" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Siguiente
        </Button>
      </Form.Item>
    </Form>
  );
}
